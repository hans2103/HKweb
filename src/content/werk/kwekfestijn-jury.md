---
title: Jurysysteem Kwèkfestijn
url: https://www.oeteldonk.org/activiteiten/evenementen/kwekfestijn
client: Oeteldonksche Club van 1882
tech: [Joomla, PHP]
summary: Punten tellen en de uitslag live op het grote scherm
intro: Op het Kwèkfestijn, de liedjeswedstrijd van het carnaval van ’s‑Hertogenbosch, beoordeelt een jury de hele dag liedjes. Ik bouwde het systeem waarin ze dat doen, het scorebord van de finale en de presentatie op het grote scherm. Alles draait op mijn eigen server.
relation: vrijwilligerswerk
image: kwekfestijn-jury
order: 1.5
case: true
role: Bouw, hosting en beheer
---

## De vraag

Op het Kwèkfestijn strijden carnavalsliedjes om de titel. Gedurende de dag geeft een jury punten, en ’s avonds wil de zaal weten wie er wint. Die uitslag moet kloppen, en hij moet er meteen staan: er is geen tijd om na te rekenen.

## Wat ik bouwde

- **Het jurysysteem.** Een eigen Joomla-component. Juryleden loggen in en geven per liedje hun punten; het systeem telt alles op.
- **Het scorebord.** Een aparte pagina voor de finale, die de uitslag via een API rechtstreeks uit het jurysysteem haalt. Niemand hoeft punten over te typen.
- **De presentatie.** Een slideshow in reveal.js voor het grote scherm in de zaal.
- **Een testomgeving.** Een kopie van het jurysysteem, zodat ik wijzigingen kan uitproberen zonder de echte punten te raken.

## Hoe het draait

Elk onderdeel draait apart, op een server die ik zelf beheer, naast [de site van de club](/werk/oeteldonk-org). Zo weet ik op de dag zelf precies wat er draait en kan ik meteen ingrijpen als dat nodig is.
