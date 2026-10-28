import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import {
    EXTENSIONS,
    OTHER_CLIENTS,
    SITE_EMAIL,
    SITE_URL,
    SKILLS,
    SOCIAL_PROFILES
} from '../data/site';
import { indexablePages } from '../lib/pages';

// llms.txt (https://llmstxt.org): a Markdown summary of the site for AI
// assistants, generated from the same data as the pages so it never drifts.
export const GET: APIRoute = async () => {
    const pages = await indexablePages();
    const werk = (await getCollection('werk')).sort((a, b) => a.data.order - b.data.order);

    const body = `# HKweb

> HKweb is het bedrijf van Hans Kuijpers, frontend developer in Eersel. Hij bouwt snelle, toegankelijke frontends voor Joomla, Magento (Hyvä) en Craft CMS, voor eigen klanten en als vaste kracht voor Perfect Web Team.

Hans maakte zijn eerste website in 1995; HKweb bestaat sinds 2005. Hij is spreker in de Joomla-community (JoomlaDagen, Joomla World Conference) en beschikbaar voor freelance projecten. Contact: ${SITE_EMAIL} (liefst per e-mail). De site is Nederlandstalig.

Expertise: ${SKILLS.join(', ')}.

## Pagina's

${pages.map(({ path, title, summary }) => `- [${title}](${SITE_URL}${path}): ${summary}`).join('\n')}

## Werk

${werk.map(({ data }) => `- [${data.title}](${data.url}): ${data.summary} (${data.tech.join(', ')}, ${data.relation})`).join('\n')}
- Ook gewerkt voor: ${OTHER_CLIENTS.join(', ')}

## Eigen Joomla-extensies (open source)

${EXTENSIONS.map(({ name, repo, summary }) => `- [${name}](${repo}): ${summary}`).join('\n')}

## Profielen

${SOCIAL_PROFILES.map(({ label, url }) => `- [${label}](${url})`).join('\n')}
`;

    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
