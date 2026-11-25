---
title: Jacc.nl
url: https://jacc.nl
client: Jheronimus Accountants
tech: [Joomla, PHP]
summary: Van WordPress naar Joomla 6.2, met minder om bij te houden
intro: Jheronimus Accountants wilde een site met minder losse onderdelen om bij te houden. Ik zette hem over van WordPress naar Joomla 6.2, met een nieuw ontwerp en alleen extensies die ik zelf bouwde. De fiscale nieuwsfeed ging mee, en werkt nu beter dan voorheen.
relation: eigen klant
image: jacc-nl
order: 2.5
case: true
role: Ontwerp, bouw en migratie
since: 2026
compare:
    before:
        label: Voor, WordPress
        image: jacc-nl-wordpress
    after:
        label: Na, Joomla 6.2
        image: jacc-nl-joomla
    alt:
        before:
            desktop: 'De oude homepage op de computer: het logo en een menu boven een grote foto van de gevel van het kantoor, onderin een cookiemelding.'
            mobiel: 'De oude homepage op de telefoon: adresregel, logo, een smalle foto van de gevel en een gecentreerde tekst over het kantoor.'
        after:
            desktop: 'De nieuwe homepage op de computer: de kop ‘Cijfers die vooruitkijken.’, een korte uitleg, twee knoppen en een illustratie van een adviseur.'
            mobiel: 'De nieuwe homepage op de telefoon: de kop ‘Cijfers die vooruitkijken.’, een korte uitleg, twee knoppen en drie vinkjes.'
---

## De vraag

Jheronimus Accountants is een accountantskantoor in Den Dungen. De site draaide op WordPress, met een gekocht thema en twaalf plugins. Vijf daarvan waren betaalde pro-versies, elk met een eigen licentie en een eigen manier van updaten. Elke plugin is software van een andere maker die je moet bijhouden, en een plek waar iets mis kan gaan. Dat zegt niets over WordPress zelf: het gaat om het aantal losse onderdelen.

Het doel: een site die hetzelfde doet, met zo min mogelijk onderdelen om bij te houden.

## Minder om bij te houden

De nieuwe site draait op Joomla 6.2, zonder extensies van anderen. Wat er bovenop Joomla zit, bouwde ik zelf: het template, de koppeling met het fiscale nieuws, de afbeeldingen via ImageKit en de cookiemelding.

- Eén updatestroom: Joomla zelf, plus mijn eigen extensies. Geen losse licenties meer die verlopen.
- De koppeling waarmee andere programma's met de site kunnen praten (de API) staat uit. De site heeft hem niet nodig.
- Wie inlogt op het beheer, moet altijd een tweede stap doen, zoals een code op de telefoon.
- Strenge regels voor wat de browser mag laden (een Content Security Policy), zonder uitzonderingen voor losse stukjes code in de pagina. Op de oude site lukte dat niet.
- Bezoekers laden geen JavaScript, behalve op het contactformulier (tegen spam) en bij de advieswijzers.

## Van WordPress-plugin naar Joomla-extensie

Het fiscale nieuws en de advieswijzers op de site komen van Informanagement. Daarvoor waren er twee WordPress-plugins, maar geen Joomla-versie. Die bouwde ik zelf, als [open-source pakket voor Joomla 5 en 6](https://github.com/hans2103/pkg_informanagement), en ik loste meteen op wat er aan de plugins schortte:

- De site haalt het nieuws elk uur op met één verzoek, in plaats van één voor de lijst plus één voor elk artikel. De details van een artikel volgen alleen als het nieuw of gewijzigd is.
- Een storing bij de bron stopt de import niet meer halverwege. De site noteert de fout en gaat door met de rest.
- Datums kloppen. De oude plugin toonde een datum een dag te vroeg en verschoof de tijd een uur.
- Wat de redactie aanpast, blijft staan. Een herzien artikel houdt zijn adres; voorheen kwam er een nieuw bericht en verdween het oude adres.
- Per artikel één afbeelding van zo’n 200 kB, in plaats van vijftien formaten en PNG’s van 3 MB.
- De tekst uit de feed wordt opgeschoond, zonder losse opmaak in de tekst.
- De scripts van de advieswijzers laden alleen op de pagina waar die staan, niet meer op elke pagina.

Het pakket is gratis te gebruiken door elk kantoor met een abonnement bij Informanagement dat een Joomla-site heeft.

## Verder

- Een nieuw ontwerp, met een eigen ontwerpsysteem, in een lichte en een donkere weergave.
- Alle inhoud overgezet: nieuws, diensten, handleidingen en het team. Van de 1.324 oude adressen sturen er 1.319 in één stap door naar de juiste pagina.
- Bij elke wijziging test de site zichzelf: toegankelijkheid en snelheid op 13 pagina’s, ook op een smal scherm en in de donkere weergave. Toegankelijkheid volgens WCAG 2.2, niveau AA, is de lat.
- Google en AI-assistenten zoals ChatGPT krijgen een duidelijke beschrijving van het kantoor en zijn diensten.
- Van eerste analyse tot livegang in twee dagen: 18 en 19 november 2026.

## Het resultaat

Gemeten met Lighthouse, de test achter de snelheidstest van Google, op de telefoon. De oude site vlak voor de overstap, de nieuwe voorlopig:

- **Snelheid:** van 63 naar 100. De homepage staat er in 0,9 seconde in plaats van 16,5.
- **Gewicht:** de homepage ging van 8,5 MB naar 0,2 MB, en van 105 naar 12 bestanden. JavaScript: van 2,4 MB naar niets.
- **Toegankelijkheid:** van 88 naar 100. **Techniek:** van 77 naar 100. **Vindbaarheid:** van 92 naar 100.
