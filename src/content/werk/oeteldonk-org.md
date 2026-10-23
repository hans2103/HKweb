---
title: Oeteldonk.org
url: https://www.oeteldonk.org
client: Oeteldonksche Club van 1882
tech: [Joomla]
summary: De site van het carnaval van ’s‑Hertogenbosch
intro: Al dertien jaar bouw en beheer ik de site van de Oeteldonksche Club van 1882, het carnaval van ’s‑Hertogenbosch. Inclusief het jurysysteem voor de liedjeswedstrijd Kwèkfestijn. Vrijwilligerswerk, met dezelfde zorg als betaald werk.
relation: vrijwilligerswerk
image: oeteldonk-org
order: 1
featured: true
case: true
role: Bouw, frontend en technisch beheer
since: 2013
---

## Wat ik bouwde

- **De website.** Een Joomla-site met eigen template, gebouwd naar het ontwerp uit 2020, met een aftelklok naar het moment dat de Prins naar zijn durp komt.
- **Het jurysysteem van het Kwèkfestijn.** Een eigen Joomla-component waarin de jury de liedjes beoordeelt, met een API waar het scorebord van de finale de uitslag uit haalt.
- **De presentatie op de avond zelf.** Een slideshow in reveal.js voor op het grote scherm tijdens het Kwèkfestijn.
- **De webshop.** [Hendrien.org](https://www.hendrien.org), de Magento-webshop van Stichting Hendrien en het officiële verkooppunt van de club.

## Hoe het nu draait

De site wordt nog steeds doorontwikkeld, met genummerde releases en geautomatiseerde tests, en lokaal in DDEV.

## Snelheid en bewuste keuzes

Gemeten met Lighthouse op 23 oktober 2026: toegankelijkheid 100, prestaties 99 op mobiel en 100 op desktop. Om daar te komen laadt het kernscript van Joomla nu pas na de pagina, krijgt alleen de grootste afbeelding voorrang en is het logo 29% kleiner.

Twee scores zijn met opzet geen 100. Best practices komt op 79, omdat Cloudflare's botbescherming een script toevoegt. Bij een site met stemmen, een webshop en formulieren weegt die bescherming zwaarder. SEO komt op 92, omdat `robots.txt` AI-bedrijven laat weten dat ze de content niet mogen gebruiken om modellen te trainen. Google indexeert gewoon door; alleen Lighthouse kent die regel nog niet.
