import { getCollection } from 'astro:content';

import { PAGES } from '../data/site';

export type IndexablePage = { path: string; title: string; summary: string };

/** Every indexable page: the fixed pages plus one case page per `case: true` project. */
export async function indexablePages(): Promise<IndexablePage[]> {
    const werk = (await getCollection('werk'))
        .filter((entry) => entry.data.case)
        .sort((a, b) => a.data.order - b.data.order);

    return [
        ...PAGES,
        ...werk.map(({ id, data }) => ({
            path: `/werk/${id}`,
            title: `Case: ${data.title}`,
            summary: data.intro ?? data.summary
        }))
    ];
}
