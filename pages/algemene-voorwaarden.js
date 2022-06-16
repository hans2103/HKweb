// pages/algemene-voorwaarden.js

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Layout from '../src/layout/layout';
import Link from '../src/components/link';
import Stack from '../src/components/stack';
import Text from '../src/components/text';

const Conditions = () => {
    return (
        <Layout>
            <Flex p="2rem" pl="3vw" flexDirection="column">
                <Heading level={1}>Algemene voorwaarden HKweb versie 1. 15 juni 2022</Heading>

                <Stack as="section" mt="1rem" aria-labelledby="content">
                    <Heading level={2} id="definities">
                        Artikel 1. Definities
                    </Heading>
                    <Text>
                        In deze algemene voorwaarden worden de hiernavolgende termen in de
                        navolgende betekenis gebruikt, tenzij uitdrukkelijk anders aangegeven.
                        <ul>
                            <li>Algemene voorwaarden: deze algemene voorwaarden</li>
                            <li>
                                Opdrachtgever: de natuurlijke persoon of rechtspersoon, met wie
                                HKweb onderhandelt omtrent de totstandkoming van een Overeenkomst
                                respectievelijk een Overeenkomst gesloten.
                            </li>
                            <li>
                                Overeenkomst: de overeenkomst tussen HKweb en Opdrachtgever, elke
                                wijziging daarvan of aanvulling daarop, alsmede alle
                                (rechts-)handelingen ter voorbereiding op en ter uitvoering van die
                                overeenkomst.
                            </li>
                            <li>
                                Producten: alle zaken die het onderwerp zijn van een Overeenkomst
                                zoals, maar niet beperkt tot, software, databases en websites
                                alsmede voorlopige en/of definitieve ontwerpen, formats etc. die al
                                dan niet voorlopig als tussen-, deel-, of eindresultaat van de
                                Overeenkomst door HKweb aan Opdrachtgever ter beschikking worden
                                gesteld.
                            </li>
                            <li>
                                Diensten: alle dienstverlening die het onderwerp is van een
                                Overeenkomst zoals, maar niet beperkt tot,
                                programmeringswerkzaamheden, ontwerpen, ontwikkelen, beheren, het
                                uitvoeren van Service van websites en databases, hosting,
                                projectmanagement, advies omtrent de promotie van website alsmede
                                alle aanvullende en ondersteunende diensten op dit gebied.
                            </li>
                            <li>
                                Software: alle programmatuur die noodzakelijk is om websites te
                                ontwerpen, ontwikkelen, beheren en/of Service te verlenen.
                            </li>
                            <li>
                                Service: het aanpassen en/of wijzigen van een website van
                                Opdrachtgever. Onder deze werkzaamheden vallen onder andere het
                                aanpassen van teksten, beelden, bewegende beelden en/of geluid van
                                de webpagina’s aan gewijzigde omstandigheden op verzoek van
                                Opdrachtgever.
                            </li>
                            <li>
                                Prijs: de prijs voor de door HKweb te leveren dienst of product met
                                inbegrip van alle bijkomende kosten en belastingen.
                            </li>
                            <li>
                                HKweb: een onderneming (een eenmanszaak) die zich bezighoudt met
                                frontwend, website- en softwareontwikkeling alsmede daaraan
                                gerelateerde activiteiten.
                            </li>
                        </ul>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 2. Toepasselijkheid
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Deze algemene voorwaarden zijn van toepassing op alle offertes,
                                algemene aanbiedingen, (rechts)handelingen, Diensten, Producten,
                                Overeenkomsten en overige rechtsbetrekkingen van HKweb en alle
                                daarbij horende handelsnamen, zoals ingeschreven bij de Kamer van
                                Koophandel onder nummer 17173882.
                            </li>
                            <li>
                                De onderhavige Algemene Voorwaarden zijn eveneens van toepassing op
                                alle overeenkomsten voor de uitvoering waarvan HKweb derden
                                inschakelt.
                            </li>
                            <li>
                                Door acceptatie van een aanbod van HKweb voor het verrichten van
                                werkzaamheden of de levering van (een) product(en), aanvaardt de
                                Opdrachtgever de toepasselijkheid van de Algemene Voorwaarden. De
                                toepasselijkheid van door Opdrachtgever gehanteerde algemene
                                voorwaarden wordt uitdrukkelijk uitgesloten.
                            </li>
                            <li>
                                Deze algemene voorwaarden zijn ook van toepassing op aanvullende
                                opdrachten en vervolgopdrachten van Opdrachtgever.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 3. Offertes, Aanbiedingen en Overeenkomst
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Alle offertes en aanbiedingen van HKweb zijn vrijblijvend, tenzij
                                uitdrukkelijk anders vermeld.
                            </li>
                            <li>
                                De prijzen in de genoemde aanbiedingen, offertes en/of
                                overeenkomsten zijn exclusief BTW, tenzij anders aangegeven.
                            </li>
                            <li>
                                HKweb kan niet aan zijn offertes of aanbiedingen worden gehouden
                                indien Opdrachtgever redelijkerwijs kan begrijpen dat de offertes of
                                aanbiedingen, dan wel een onderdeel daarvan, een kennelijke
                                vergissing of verschrijving bevatten. Opdrachtgever kan voorts geen
                                rechten ontlenen aan een aanbod van HKweb dat gebaseerd is op door
                                de Opdrachtgever verstrekte onjuiste of onvolledige gegevens.
                            </li>
                            <li>
                                HKweb behoudt zich het recht voor opdrachten zonder opgave van
                                redenen te weigeren.
                            </li>
                            <li>
                                Een Overeenkomst tussen HKweb en Opdrachtgever komt tot stand indien
                                en voor zover HKweb een opdracht schriftelijk of per e-mail
                                aanvaardt of door HKweb uitvoering aan een opdracht wordt gegeven.
                            </li>
                            <li>
                                Aanvullingen of wijzigingen gedurende de looptijd van de
                                Overeenkomst worden zoveel mogelijk schriftelijk of per e-mail
                                bevestigd.
                            </li>
                            <li>
                                Opdrachtgever verleent aan HKweb voor de duur van de overeenkomst en
                                met inachtneming van het bepaalde in de overeenkomst het exclusieve
                                recht de toegewezen opdracht te vervullen.
                            </li>
                            <li>
                                Van het bepaalde in deze Algemene voorwaarden kan uitsluitend
                                schriftelijk worden afgeweken. Indien en voor zover hetgeen partijen
                                uitdrukkelijk schriftelijk zijn overeengekomen, afwijkt van het
                                bepaalde in deze Algemene voorwaarden, geldt hetgeen partijen
                                uitdrukkelijk schriftelijk zijn overeengekomen.
                            </li>
                            <li>
                                Het is mogelijk dat de aard van het Product en/of Dienst wijzigt
                                gedurende de looptijd van de Overeenkomst. Een dergelijke wijziging
                                zal te allen tijde worden afgestemd met Opdrachtgever en na
                                goedkeuring worden uitgevoerd. Afhankelijk van de aard van de
                                wijziging is het ter beoordeling aan HKweb of hiertoe een aangepaste
                                offerte dient te worden opgesteld.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 4. Uitvoer & voltooiing van de opdracht en dienstverlening
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb zal de overeenkomst naar beste inzicht en vermogen en
                                overeenkomstig de eisen van goed vakmanschap uitvoeren. HKweb zal
                                zich inspannen om de werkzaamheden naar behoren en zorgvuldig te
                                verrichten, alsmede de belangen van Opdrachtgever naar beste weten
                                te behartigen en te streven naar een voor Opdrachtgever bruikbaar
                                resultaat. HKweb kan echter niet garanderen dat met de werkzaamheden
                                steeds het door Opdrachtgever gewenste resultaat wordt bereikt en is
                                nimmer aansprakelijk voor het niet bereiken van het resultaat dat
                                Opdrachtgever beoogde.
                            </li>
                            <li>
                                HKweb is gerechtigd bij de uitvoering van Overeenkomsten van
                                Opdrachtgevers derden in te schakelen. Bij de selectie van derden
                                zal HKweb de nodige zorgvuldigheid in acht nemen. Deze algemene
                                voorwaarden zijn mede bedongen ten behoeve van de derden als bedoeld
                                in de vorige zin. Derhalve kunnen deze derden, voor zover de rechten
                                c.q. verplichtingen naar hun aard niet uitsluitend voorbehouden
                                kunnen zijn aan HKweb, jegens de Opdrachtgever een beroep doen op de
                                bepalingen van deze Algemene voorwaarden.
                            </li>
                            <li>
                                Rapportering, indien vooraf afgesproken, door HKweb aan
                                Opdrachtgever vindt plaats conform aanbieding, offerte of
                                overeenkomst.
                            </li>
                            <li>
                                Indien geen wijze van rapporteren is gespecificeerd, geschiedt
                                rapportering in het Nederlands en volgens de normen van goed
                                vakmanschap. Indien geen rapporteringsmedium is afgesproken, bepaalt
                                HKweb het medium dat hiervoor wordt gebruikt.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 5. Verplichtingen Partijen
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Opdrachtgever zal zijn volledige medewerking verlenen bij het
                                uitvoeren van de Overeenkomst en alle benodigde informatie aan HKweb
                                verstrekken.
                            </li>
                            <li>
                                Opdrachtgever draagt er zorg voor dat alle gegevens waarvan HKweb
                                aangeeft dat deze noodzakelijk zijn of waarvan Opdrachtgever
                                redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor
                                het uitvoeren van de Overeenkomst, tijdig aan HKweb worden
                                verstrekt. Indien de voor de uitvoering van de Overeenkomst
                                benodigde gegevens niet tijdig aan HKweb zijn verstrekt, heeft HKweb
                                het recht de uitvoering van de Overeenkomst op te schorten en/of de
                                uit de vertraging voortvloeiende extra kosten volgens de
                                gebruikelijke tarieven aan Opdrachtgever in rekening te brengen.
                            </li>
                            <li>
                                Onder de in de leden 1 en 2 van dit artikel bedoelde informatie
                                wordt zeer nadrukkelijk begrepen de informatie als bedoeld in
                                artikel 6 lid 3.
                            </li>
                            <li>
                                Indien is overeengekomen dat de overeenkomst in fasen zal worden
                                uitgevoerd kan HKweb de uitvoering van die onderdelen die tot een
                                volgende fase behoren opschorten totdat Opdrachtgever de resultaten
                                van de voorafgaande fase schriftelijk heeft goedgekeurd en/of
                                betaald.
                            </li>
                            <li>
                                Opdrachtgever is verplicht te handelen conform de toepasselijke
                                wettelijke bepalingen, de nettiquette, de richtlijnen van de Reclame
                                Code Commissie, de Overeenkomst en deze algemene voorwaarden.
                            </li>
                            <li>
                                Opdrachtgever is gehouden op een dusdanige manier gebruik te maken
                                van het Product en/of de Dienst dat daardoor de juiste werking van
                                de Software, het computersysteem en/of eventueel aangelinkte
                                websites niet wordt belemmerd, dan wel dat daardoor andere
                                Opdrachtgevers in het gebruik van het Product en/of de Dienst niet
                                worden belemmerd.
                            </li>
                            <li>
                                HKweb behoudt zich het recht voor om aan Opdrachtgever de toegang
                                tot het Product en/of de Dienst of Software te ontzeggen indien
                                Opdrachtgever in strijd handelt met de voorafgaande artikelleden dan
                                wel indien Opdrachtgever niet tijdig voldoet aan haar
                                betalingsverplichtingen als bepaald in artikel 7. HKweb zal wegens
                                weigering van de toegang tot het Product en/of de Dienst of Software
                                op grond van dit artikel nimmer tot enige schadevergoeding verplicht
                                zijn. Opdrachtgever vrijwaart HKweb voor alle aanspraken van derden
                                uit hoofde van dit artikel.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 6. Specificaties en ontwikkeling website
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                In geval HKweb voor Opdrachtgever een website zal
                                ontwerpen/ontwikkelen zullen de specificaties waaraan een dergelijke
                                website dient te voldoen vooraf door Opdrachtgever aan HKweb ter
                                beschikking worden gesteld.
                            </li>
                            <li>
                                De specificaties als bedoeld in lid 1 van dit artikel kunnen onder
                                meer betrekking hebben op de stijl, het aantal te ontwikkelen
                                webpagina’s, de op te nemen tekstbestanden, formulieren, logo’s,
                                foto- en videobeelden, grafische bestanden, geluid codes en/of ander
                                materiaal. Ook dient hierbij te worden gedacht aan de functionele en
                                technische eigenschappen van de website.
                            </li>
                            <li>
                                Vooraf zal duidelijk worden afgestemd welke informatie als bedoeld
                                in lid 2 van dit artikel door Opdrachtgever zal worden aangeleverd.
                                Het bepaalde in artikel 5 lid 2 is nadrukkelijk van toepassing op
                                deze informatie.
                            </li>
                            <li>
                                HKweb is niet verantwoordelijk voor fouten als gevolg van een
                                onjuist ontwerp of het aanleveren van een verkeerd bestand. HKweb is
                                niet gehouden om de ontwerpen en bestanden vooraf te controleren.
                                Opdrachtgever staat in voor de juistheid van de door haar
                                aangeleverde informatie.
                            </li>
                            <li>
                                HKweb zal de website met zorg ontwikkelen zoveel mogelijk met
                                inachtneming van de specificaties als bedoeld in leden 1 en 2 van
                                dit artikel.
                            </li>
                            <li>
                                HKweb zal in eerste instantie een ontwerp opleveren van het
                                uiterlijk van de webpagina’s die behoren bij de website.
                                Opdrachtgever dient vervolgens per ontworpen pagina goedkeuring te
                                verlenen voor het definitieve ontwerp. Een dergelijke goedkeuring
                                behelst ten minste het navolgende:
                                <ol>
                                    <li>
                                        Opdrachtgever geeft hiermee te kennen dat het definitief
                                        ontwerp gezien is, en gaat akkoord met het ontwerp zoals dat
                                        staat afgebeeld in het desbetreffende document;
                                    </li>
                                    <li>
                                        Opdrachtgever gaat akkoord met het feit dat alle eventuele
                                        aanpassingen welke na goedkeuring dienen te worden verricht
                                        door HKweb aan het ontwerp, vallen onder meerwerk als
                                        bedoeld in artikel 9;
                                    </li>
                                    <li>
                                        Opdrachtgever gaat akkoord met de elementen die staan
                                        afgebeeld op het ontwerp. Dit zijn de elementen die zullen
                                        terugkomen in de uiteindelijk op te leveren website. Een
                                        element is bijvoorbeeld (maar zeker niet uitputtend) een
                                        tekstblok, een blok waarin een YouTube filmpje moet komen,
                                        een blok waar Facebook contacten komen, een menu, een logo
                                        of vaste afbeelding, een direct contact formulier, knoppen
                                        voor social media of SEO-links;
                                    </li>
                                    <li>
                                        Opdrachtgever gaat akkoord met de plaats waar de elementen
                                        als bedoeld onder c staan afgebeeld en derhalve met
                                        plaatsing van de elementen in het ontwerp van de webpagina.
                                        De elementen zullen in de uiteindelijk op te leveren website
                                        terugkomen op dezelfde plaats;
                                    </li>
                                    <li>
                                        Opdrachtgever gaat akkoord met de afbeeldingen die staan
                                        afgebeeld. Deze afbeeldingen zullen ook terugkomen in de
                                        uiteindelijk op te leveren website. Het betreft afbeeldingen
                                        als logo, header image en achtergrond.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                De hoeveelheid teksten (inclusief opgenomen links), de opmaak
                                hiervan alsmede afbeeldingen in een tekstblok kunnen door
                                Opdrachtgever zelf worden aangepast en vallen nadrukkelijk niet
                                onder lid 6 van dit artikel. Opdrachtgever is zich er terdege van
                                bewust dat eventuele aanpassing van deze elementen consequenties kan
                                hebben voor de lay-out van de website.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 7. Prijzen / Betalingsvoorwaarden
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Alle prijzen HKweb zijn uitgedrukt in Euro’s – tenzij anders
                                aangegeven – en exclusief omzetbelasting en andere heffingen die van
                                overheidswege worden opgelegd. Tenzij uitdrukkelijk anders wordt
                                vermeld, komen ten laste van Opdrachtgever alle kosten verband
                                houdende met de Producten en/of Diensten.
                            </li>
                            <li>
                                Tenzij anders is overeengekomen, dienen alle facturen van HKweb
                                zonder aftrek, korting, opschorting of verrekening betaald te worden
                                binnen 30 dagen na factuurdatum.
                            </li>
                            <li>
                                Prijzen zijn onder meer gebaseerd op ten tijde van de opgave of
                                totstandkoming van de overeenkomst of offerte geldende factoren,
                                waaronder sociale en fiscale lasten, heffingen, assurantiepremies
                                etc. Indien zich na opgave of sluiting van de overeenkomst en voor
                                de voltooiing van de dienstverlening of levering, wijzigingen in
                                deze of andere prijsbepalende factoren mochten voordoen, heeft HKweb
                                het recht de door haar gehanteerde prijzen aan te passen en aan
                                Opdrachtgever te factureren.
                            </li>
                            <li>
                                De betalingsverplichting van Opdrachtgever gaat in op de dag dat de
                                Overeenkomst tot stand komt. Betaling geschiedt afhankelijk van de
                                duur en aard van de Overeenkomst volgens een met Opdrachtgever
                                overeen te komen verdeling vooraf, bij aanvang, gedurende en bij
                                voltooiing van het Product en/of de Dienst dan wel door middel van
                                periodiek vervallende bedragen.
                            </li>
                            <li>
                                Indien betaling van het Product en/of de Dienst geschiedt door
                                middel van periodiek vervallende bedragen dan zijn deze bedragen
                                maandelijks per vooruitbetaling verschuldigd (per automatische
                                incasso of factuur). In geval van automatische incasso dient
                                Opdrachtgever zorg te dragen voor voldoende saldo op haar rekening.
                            </li>
                            <li>
                                Bij overschrijding van de betalingstermijn (in het geval van
                                automatische incasso vanaf het moment dat de periodiek verschuldigde
                                vergoeding niet kan worden geïncasseerd) is Opdrachtgever van
                                rechtswege in verzuim en is HKweb gerechtigd de wettelijke rente in
                                rekening te brengen. Alle te maken invorderingskosten zijn voor
                                rekening van de nalatige Opdrachtgever. Deze kosten bedragen ten
                                minste 10% van het verschuldigde bedrag, met een minimum van €
                                250,00 (voor particulieren gelden de dwingendrechtelijke wettelijke
                                bepalingen).
                            </li>
                            <li>
                                HKweb is gerechtigd uitvoering van de Overeenkomst afhankelijk te
                                stellen van betaling van een voorschot van Opdrachtgever. HKweb zal,
                                in geval van een gevraagd voorschot, slechts werkzaamheden in het
                                kader van de desbetreffende Overeenkomst verrichten nadat het
                                voorschot door Opdrachtgever is voldaan. Indien het voorschot niet,
                                of althans niet tijdig, is voldaan, is HKweb nimmer aansprakelijk
                                voor schade die het gevolg is van het niet uitvoeren van de
                                Overeenkomst. Eventueel betaalde voorschotten worden verrekend met
                                een factuur in het kader van de Overeenkomst.
                            </li>
                            <li>
                                Door Opdrachtgever gedane betalingen strekken in de eerste plaats
                                ter voldoening van eventuele wettelijke rente en kosten en vervolgen
                                van opeisbare facturen die het langst openstaan, zelfs al vermeldt
                                Opdrachtgever dat de voldoening betrekking heeft op een latere
                                factuur.
                            </li>
                            <li>
                                HKweb is bevoegd de nakoming van haar verplichtingen uit de
                                Overeenkomst op te schorten indien Opdrachtgever niet aan al haar
                                verplichtingen voldoet dan wel indien na het sluiten van de
                                Overeenkomst te haar kennis gekomen omstandigheden HKweb goede grond
                                te geven te vrezen dat Opdrachtgever haar verplichtingen niet zal
                                nakomen.
                            </li>
                            li>
                            <li>
                                Indien tijdens de uitvoering van de opdracht blijkt dat, door ten
                                tijde van de totstandkoming van de opdracht nog onbekende factoren,
                                het honorarium de kostenraming te boven gaat, zal, tenzij
                                schriftelijk anders overeengekomen, zonder goedkeuring vooraf van de
                                Opdrachtgever, de kostenraming met maximaal 25% mogen overschrijden.
                                Dit percentage zal niet worden overschreden zonder nader overleg met
                                de Opdrachtgever, waarbij tot een eventuele herziening van de
                                kostenraming of van de werkzaamheden kan worden besloten.
                            </li>
                            <li>
                                De gemaakte inkoopkosten inclusief, maar niet beperkt tot,
                                mediakosten die door HKweb in opdracht van Opdrachtgever worden
                                betaald zullen altijd volledig in rekening worden gebracht,
                                inclusief het afgesproken opslagpercentage, tenzij hierover
                                afwijkende afspraken zijn gemaakt in de overeenkomst. Overschrijding
                                en/of afwijking van de gemaakte inkoopkosten, anders dan vooraf is
                                afgesproken, worden door HKweb alsnog bij Opdrachtgever in rekening
                                gebracht.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 8. Leveringstermijnen / Aflevering
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb zal het Product en/of de Dienst aan Opdrachtgever afleveren op
                                de overeengekomen wijze. Op het moment dat HKweb aangeeft dat de
                                werkzaamheden zijn voltooid, dan wel voor beide partijen
                                redelijkerwijs kenbaar is dat de werkzaamheden zijn voltooid, wordt
                                het Product en/of de Dienst als opgeleverd beschouwd. Indien het
                                desbetreffende Product een website betreft is het mogelijk dat de
                                website op de server van HKweb wordt “gehost” ofwel kan de website
                                bij Opdrachtgever of een door Opdrachtgever aangewezen provider
                                worden geïnstalleerd.
                            </li>
                            <li>
                                De in offertes, opdrachtbevestigingen en Overeenkomsten genoemde
                                leveringstermijnen zijn bij benadering, en derhalve niet fataal, en
                                binden HKweb niet, tenzij uitdrukkelijk schriftelijk het tegendeel
                                is overeengekomen. Het verzuim van HKweb treedt niet eerder in dan
                                nadat de Opdrachtgever HKweb schriftelijk in gebreke heeft gesteld,
                                waarbij hij HKweb een redelijke termijn geeft de overeenkomst alsnog
                                na te komen, en de nakoming na verstrijken van de laatstbedoelde
                                termijn nog steeds is uitgebleven.
                            </li>
                            <li>
                                De leveringstermijnen vangen pas aan ten tijde van het sluiten van
                                de Overeenkomst, of indien later bij ontvangst van alle
                                noodzakelijke materialen als bedoeld in artikel 5, leden 2 en 3, of
                                indien later bij ontvangst van het bedongen voorschot of
                                zekerheidsstelling.
                            </li>
                            <li>
                                Overschrijding van een leveringstermijn geeft geen aanspraak op
                                schadevergoeding, tenzij er sprake is van toerekenbare tekortkoming
                                in de nakoming aan de zijde van HKweb. In dit geval dient er sprake
                                te zijn van overschrijding van een fatale termijn, die uitdrukkelijk
                                als zodanig schriftelijk is overeengekomen. Alsdan kan door
                                Opdrachtgever slechts aanspraak worden gemaakt op vergoeding van, de
                                Overeenkomst betreffende, gemaakte kosten. Een vergoeding bestaande
                                uit wettelijke rente en/of vertragingsrente, dan wel een vergoeding
                                wegens winstderving en/of vervolgschade is uitdrukkelijk
                                uitgesloten.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 9. Meerwerk
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Indien HKweb op verzoek of met voorafgaande instemming van
                                Opdrachtgever werkzaamheden of andere prestaties heeft verricht die
                                buiten de inhoud of omvang van de overeengekomen dienstverlening
                                vallen, zullen deze werkzaamheden of prestaties door Opdrachtgever
                                worden vergoed volgens de gebruikelijke tarieven van HKweb. Van
                                meerwerk is eveneens sprake indien een systeemanalyse, een ontwerp
                                of specificaties worden uitgebreid of gewijzigd. HKweb is nimmer
                                verplicht aan een dergelijk verzoek te voldoen en zij kan verlangen
                                dat daarvoor een afzonderlijke schriftelijke overeenkomst wordt
                                gesloten.
                            </li>
                            <li>
                                Opdrachtgever aanvaardt dat door werkzaamheden of prestaties als
                                bedoeld in lid 1 van dit artikel het overeengekomen of verwachte
                                tijdstip van voltooiing van de dienstverlening, en de wederzijdse
                                verantwoordelijkheden van Opdrachtgever en HKweb, kunnen worden
                                beïnvloed. Het feit dat zich tijdens de uitvoering van de
                                Overeenkomst (de vraag naar) meerwerk voordoet, is voor
                                Opdrachtgever nimmer grond voor ontbinding of beëindiging van de
                                Overeenkomst.
                            </li>
                            <li>
                                Voor zover voor de dienstverlening een vaste prijs is afgesproken,
                                zal HKweb Opdrachtgever desgevraagd tevoren schriftelijk informeren
                                over de financiële consequenties van die extra werkzaamheden of
                                prestaties.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 10. Garantie
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb staat er niet voor in dat de Producten goed werken in
                                samenhang met alle soorten of nieuwe versies van web- en
                                internetbrowsers en eventuele andere programmatuur. HKweb staat er
                                evenmin voor in dat de Producten goed werken in samenhang met alle
                                soorten apparatuur. HKweb zal zich jegens Opdrachtgever inspannen om
                                de beschikbaarheid en bruikbaarheid van de Producten en/of Diensten
                                zo groot mogelijk te laten zijn. HKweb garandeert niet dat de
                                Producten en/of Diensten geschikt zijn voor het door Opdrachtgever
                                beoogde gebruik of doel, noch dat de Producten en/of Diensten zonder
                                onderbreking, fouten of overige gebreken zullen werken.
                            </li>
                            <li>
                                Na oplevering van de werkzaamheden dient de Opdrachtgever direct te
                                onderzoeken of HKweb de overeenkomst deugdelijk is nagekomen.
                            </li>
                            <li>
                                HKweb zal zich naar beste vermogen inspannen aan haar toerekenbare
                                fouten in de weergave van de inhoud dan wel de technische werking
                                van de Producten en/of Diensten binnen een redelijke termijn te
                                herstellen indien deze binnen 2 (twee) maanden na levering
                                gedetailleerd omschreven schriftelijk bij HKweb zijn gemeld. Indien
                                sprake is van gebruiksfouten of onoordeelkundig gebruik van
                                Opdrachtgever of van andere niet aan HKweb toe te rekenen oorzaken
                                dan zullende kosten voor herstel volgens de gebruikelijk tarieven
                                van HKweb aan Opdrachtgever in rekening kunnen worden gebracht.
                                Indien de Opdrachtgever niet tijdig reclameert, vloeit er voor HKweb
                                uit een dergelijke reclame van de Opdrachtgever geen enkele
                                verplichting voort.
                            </li>
                            <li>
                                HKweb is nimmer gehouden tot herstel van verminkte of verloren
                                gegane gegevens.
                            </li>
                            <li>
                                HKweb heeft geen verplichting tot herstel voor fouten of gebreken
                                die na afloop van de in lid 4 van dit artikel bedoelde
                                garantieperiode zijn gemeld, tenzij tussen Partijen een aparte
                                overeenkomst is afgesloten waarin een dergelijke bepaling
                                nadrukkelijk is opgenomen.
                            </li>
                            <li>
                                Niet nakoming door Opdrachtgever van één of meer van zijn
                                verplichtingen ontheft HKweb van al haar garantieverplichtingen.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 11. Aansprakelijkheid
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb aanvaardt wettelijke verplichtingen tot schadevergoeding
                                alleen voor zover dit uit dit artikel blijkt. Behoudens ingeval van
                                opzet of grove schuld van HKweb, alsmede behoudens het bepaalde in
                                artikel 10, is HKweb na (op)levering niet langer aansprakelijk voor
                                gebreken van het (op)geleverde.
                            </li>
                            <li>
                                De Opdrachtgever draagt de schade veroorzaakt door onjuistheden in
                                de door haar opgedragen werkzaamheden, onjuistheden in de door
                                Opdrachtgever verlangde werkwijzen, iedere andere tekortkoming in de
                                nakoming van de verplichtingen van de Opdrachtgever die uit de wet
                                of de overeenkomst voortvloeien, alsmede een andere omstandigheid
                                die niet aan HKweb kan worden toegerekend.
                            </li>
                            <li>
                                Behoudens in geval van opzet of grove schuld van HKweb is iedere
                                aansprakelijkheid van HKweb uit hoofde van een gebeurtenis –
                                daaronder begrepen een nalaten – die tot aansprakelijkheid leidt,
                                beperkt tot een vergoeding van directe schade en zal nooit meer
                                bedragen dan tweemaal de factuurwaarde. Indien de Overeenkomst
                                betrekking heeft op doorlopende dienstverlening of een
                                duurovereenkomst betreft met een looptijd van meer dan één jaar,
                                wordt de maximale vergoeding gesteld op het totaal van de
                                vergoedingen bedongen voor één jaar. In geen geval zal de totale
                                vergoeding voor directe schade meer bedragen dan 25.000 euro
                                (vijfentwintigduizend euro). Onder directe schade wordt uitsluitend
                                verstaan:
                                <ol>
                                    <li>
                                        de redelijke kosten die Opdrachtgever zou moeten maken om de
                                        prestatie van HKweb aan de Overeenkomst te laten
                                        beantwoorden. Deze schade wordt echter niet vergoed indien
                                        Opdrachtgever de Overeenkomst heeft ontbonden.
                                    </li>
                                    <li>
                                        redelijke kosten, gemaakt ter vaststelling van de oorzaak en
                                        de omvang van de schade, voor zover de vaststelling
                                        betrekking heeft op directe schade in de zin van deze
                                        voorwaarden.
                                    </li>
                                    <li>
                                        redelijke kosten, gemaakt ter voorkoming of beperking van
                                        schade, voor zover Opdrachtgever aantoont dat deze kosten
                                        hebben geleid tot beperking van directe schade in de zin van
                                        deze voorwaarden.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Aansprakelijkheid van HKweb voor indirecte schade, waaronder mede
                                begrepen gevolgschade, gederfde winst, en schade door
                                bedrijfsstagnatie is te allen tijde uitgesloten. Indien HKweb derden
                                heeft ingeschakeld zoals omschreven in artikel 4, lid 2 en deze
                                derde zijn aansprakelijkheid verder heeft beperkt dan HKweb, is
                                HKweb gerechtigd eventuele aansprakelijkheidsbeperkingen van deze
                                derden namens Opdrachtgever te aanvaarden. Iedere aansprakelijkheid
                                van HKweb voor een tekortkoming van een derde is beperkt tot het
                                bedrag dat Opdrachtgever bij een rechtstreekse aanspraak jegens die
                                derde had kunnen ontvangen.
                            </li>
                            <li>
                                Aansprakelijkheid van HKweb wegens tekortkoming in de nakoming van
                                een Overeenkomst, ontstaat slechts indien Opdrachtgever HKweb
                                onverwijld en deugdelijk schriftelijk in gebreke stelt, stellende
                                daarbij een redelijk termijn ter zuivering van de tekortkoming en
                                HKweb ook na die termijn toerekenbaar in de nakoming van zijn
                                verplichtingen tekort blijft schieten. De ingebrekestelling dient
                                een zo gedetailleerd mogelijke omschrijving van de tekortkoming te
                                bevatten zodat HKweb in staat is adequaat te reageren.
                            </li>
                            <li>
                                De eventuele aansprakelijkheid van HKweb is te allen tijde beperkt
                                tot het bedrag dat uit hoofde van een eventuele
                                beroeps-/bedrijfsaansprakelijkheidsverzekering van HKweb in het
                                betreffende geval zal worden uitgekeerd.
                            </li>
                            <li>
                                HKweb zal niet aansprakelijk zijn voor schade ten gevolge van
                                inbreuk op vertrouwelijkheid van communicatie die op verzoek van,
                                dan wel met al dan niet stilzwijgende instemming van Opdrachtgever
                                elektronisch plaatsvindt.
                            </li>
                            <li>
                                Buiten de in dit artikel genoemde gevallen, rust op HKweb geen
                                enkele aansprakelijkheid voor schadevergoeding, ongeacht de grond
                                waarop een actie tot schadevergoeding zal worden gebaseerd.
                                Opdrachtgever vrijwaart HKweb voor alle aanspraken van derden.
                            </li>
                            <li>
                                De verjaringstermijn van alle vorderingen en verweren jegens HKweb
                                bedraagt één jaar.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 12. Duur en beëindiging Overeenkomst
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Tenzij uitdrukkelijk anders voortvloeit uit de Overeenkomst of
                                schriftelijk anders bepaald, wordt de Overeenkomst aangegaan voor
                                een onbepaalde tijd met een minimum van 6 (zes) maanden.
                            </li>
                            <li>
                                Een Overeenkomst welke is aangegaan voor onbepaalde tijd kan door
                                elk der Partijen (na goed overleg en) met opgave van redenen worden
                                opgezegd, hierbij dient een redelijke termijn in acht te worden
                                genomen. Partijen zullen in geval van rechtmatige opzegging nimmer
                                tot enige schadevergoeding zijn gehouden.
                            </li>
                            <li>
                                Een voor bepaalde tijd gesloten Overeenkomst wordt na afloop van de
                                in de Overeenkomst overeengekomen periode, steeds stilzwijgend
                                verlengd met 6 (zes) maanden, tenzij Opdrachtgever de Overeenkomst
                                ten minste 2 (twee) maanden voor het verstrijken van de
                                overeengekomen periode per aangetekende brief opzegt.
                            </li>
                            <li>
                                Tussentijdse ontbinding van een Overeenkomst is slechts mogelijk,
                                wanneer Opdrachtgever of HKweb toerekenbaar tekortschiet in de
                                nakoming van wezenlijke verplichtingen voortvloeiend uit de
                                Overeenkomst en/of de algemene voorwaarden, na deugdelijk en zo
                                gedetailleerd mogelijk schriftelijke in gebreke te zijn gesteld door
                                de andere Partij waarbij een redelijk termijn wordt gesteld voor de
                                zuivering van de tekortkoming en de tekortkoming in deze termijn
                                niet is verholpen.
                            </li>
                            <li>
                                HKweb kan een Overeenkomst zonder ingebrekestelling en zonder
                                rechterlijke tussenkomst, door schriftelijke kennisgeving met
                                onmiddellijke ingang geheel of gedeeltelijk beëindigen, wanneer
                                Opdrachtgever- al dan niet voorlopig- surseance van betaling wordt
                                verleend, wanneer ten aanzien van Opdrachtgever faillissement wordt
                                aangevraagd of wanneer zijn/haar onderneming wordt geliquideerd of
                                beëindigd anders dan ten behoeve van reconstructie of samenvoeging
                                van de ondernemingen.
                            </li>
                            <li>
                                Indien Opdrachtgever op het moment van de ontbinding als bedoeld in
                                dit artikel, reeds prestaties ter uitvoering van de Overeenkomst
                                heeft ontvangen, zullen deze prestaties en de daarmee samenhangende
                                betalingsverplichting geen voorwerp van ongedaanmaking zijn, tenzij
                                HKweb ten aanzien van die prestaties in verzuim is. Bedragen die
                                HKweb vóór de ontbinding heeft gefactureerd in verband met hetgeen
                                zij reeds ter uitvoering van de Overeenkomst heeft verricht of
                                geleverd, blijven met inachtneming van het in de vorige volzin
                                bepaalde onverminderd verschuldigd en worden op het moment van de
                                ontbinding direct opeisbaar.
                            </li>
                            <li>
                                Onverminderd het bepaalde in dit artikel heeft HKweb het recht de
                                Overeenkomst met onmiddellijke ingang en zonder rechterlijke
                                tussenkomst te beëindigen indien:
                                <ol>
                                    <li>Opdrachtgever oneigenlijk gebruikt maakt van internet;</li>
                                    <li>
                                        Opdrachtgever informatie verspreidt die in strijd is met
                                        (inter)nationale wet- en regelgeving;
                                    </li>
                                    <li>
                                        Opdrachtgever informatie verspreidt die in strijd is met
                                        algemeen aanvaarde normen en waarden;
                                    </li>
                                    <li>
                                        Opdrachtgever informatie verspreidt die discriminerend is
                                        ten aanzien van uiterlijk, ras, religie, geslacht, cultuur,
                                        afkomst of anderszins kwetsend genoemd kan worden.
                                    </li>
                                    <li>
                                        Opdrachtgever anderszins handelt op een wijze die
                                        onverenigbaar is met de normen en waarden van HKweb, zulks
                                        ter beoordeling van HKweb.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 13. Overmacht
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb is niet gehouden tot het nakomen van enige verplichting uit de
                                overeenkomst indien zij daartoe gehinderd wordt door een
                                omstandigheid die haar krachtens de wet, een rechtshandeling of in
                                het maatschappelijk verkeer geldende opvattingen niet kan worden
                                toegerekend. Onder overmacht wordt mede begrepen de omstandigheid
                                dat HKweb door een tekortkoming van derden die bij de uitvoering van
                                de overeenkomst zijn betrokken, niet in staat is haar verplichtingen
                                (tijdig) na te komen. Onder overmacht wordt in ieder geval ook
                                verstaan: oorlog(gevaar), rellen, werkstakingen, molest, brand,
                                waterschade, overstromingen, atmosferische omstandigheden, langdurig
                                uitval van elektriciteit, aanpassingen of onderhoud aan het netwerk
                                van telecommunicatie en/of elektriciteitsnetwerken van anderen,
                                kabelbreuken, storingen in communicatieve verbindingen inclusief
                                telecommunicatie verbindingen of verhindering of weigering van
                                nakoming door leveranciers van wie HKweb bij de uitvoering van haar
                                Producten en/of Diensten afhankelijk is.
                            </li>
                            <li>
                                Wanneer een overmachtsituatie langer dan 30 (dertig) dagen heeft
                                geduurd, heeft HKweb het recht om de Overeenkomst schriftelijk te
                                beëindigen. Indien HKweb bij het intreden van de overmachtsituatie
                                reeds gedeeltelijk aan haar verplichtingen heeft voldaan, of slechts
                                gedeeltelijk aan haar verplichtingen kan voldoen, is zij gerechtigd
                                het reeds uitgevoerde gedeelte, respectievelijk uitvoerbare gedeelte
                                van de overeenkomst afzonderlijk te factureren als ware er sprake
                                van een zelfstandige overeenkomst. Schade als gevolg van overmacht
                                komt nimmer voor vergoeding in aanmerking.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 14. Domeinnaamregistratie
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Op verzoek van Opdrachtgever verzorgt HKweb de registratie van
                                domeinnamen en onderhoudt HKweb een domeinnaam server voor
                                Opdrachtgever tegen de alsdan geldende tarieven. HKweb heeft het
                                recht de tarieven terzake aan te passen. Opdrachtgever zal
                                desgevraagd het door HKweb ter beschikking te stellen formulier voor
                                domeinnaamregistratie ondertekenen.
                            </li>
                            <li>
                                De registratie van domeinnamen geschiedt volledig voor rekening en
                                risico van Opdrachtgever. Opdrachtgever vrijwaart HKweb terzake van
                                aanspraken dat de registratie en/of het gebruik van een (door HKweb
                                geregistreerde) domeinnaam inbreuk maakt op intellectueel
                                eigendomsrechten van een derde.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 15. Service
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                HKweb kan geen onbelemmerde toegang tot het internet en netwerk
                                garanderen, noch dat te allen tijde gebruikgemaakt kan worden van
                                het internet en het netwerk.
                            </li>
                            <li>
                                Indien Opdrachtgever wenst kan HKweb Service verrichten. Hiertoe zal
                                afzonderlijk een overeenkomst worden gesloten tussen Partijen. De in
                                dit artikel vermelde bepalingen zijn in dat geval nadrukkelijk van
                                toepassing.
                            </li>
                            <li>
                                Opdrachtgever zal geen toegang tot de Producten en/of Diensten
                                kunnen verkrijgen op tijdstippen dat werkzaamheden aan het netwerk
                                worden verricht. HKweb zal zich inspannen deze werkzaamheden te
                                laten plaatsvinden op tijden dat Opdrachtgever daarvan het minste
                                hinder ondervindt.
                            </li>
                            <li>
                                HKweb is met het oog op het behoud en/of verbetering van de
                                kwaliteit en veiligheid van het Product en/of de Dienst, gerechtigd
                                in de Software alsmede in de Producten en/of Diensten, wijzigingen
                                aan te brengen, waaronder bijvoorbeeld type Software en omvang en
                                inhoud van de informatie die wordt verstrekt aan Opdrachtgever maar
                                kan hiertoe nimmer verplicht worden gesteld door Opdrachtgever.
                            </li>
                            <li>
                                Onder het Service, zoals bedoeld in deze algemene voorwaarden, wordt
                                verstaan:
                                <ol>
                                    <li>
                                        assistentie in de vorm van helpdesk ondersteuning waarbij de
                                        helpdesk te bereiken is op werkdagen van 8.30 tot 17.30 uur
                                        via het vaste telefoonnummer van HKweb en buiten kantooruren
                                        via e-mail en een eventueel mobiel telefoonnummer zoals door
                                        HKweb aan Opdrachtgever verstrekt;
                                    </li>
                                    <li>
                                        doorvoeren van aanpassingen die vallen onder de Service op
                                        verzoek van Opdrachtgever;
                                    </li>
                                    <li>doorvoeren van aanpassingen geïnitieerd door HKweb.</li>
                                </ol>
                            </li>
                            <li>
                                Aanvullende werkzaamheden, die niet onder Service vallen, betreffen
                                meerwerk als bedoeld in artikel 9 en zullen apart in rekening worden
                                gebracht.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 16. Intellectuele Eigendomsrechten
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Alle aan Opdrachtgever geleverde zaken/rechten blijven eigendom van
                                HKweb totdat alle bedragen die Opdrachtgever verschuldigd is uit
                                hoofde van de Overeenkomst, evenals alle eventuele overige bedragen
                                die Opdrachtgever wegens het tekortschieten in de
                                betalingsverplichting verschuldigd mocht zijn, volledig aan HKweb
                                zijn voldaan.
                            </li>
                            <li>
                                HKweb kan de in het kader van de Overeenkomst ontvangen of
                                gegenereerde zaken, producten, vermogensrechten, gegevens,
                                documenten, databestanden en (deel)resultaten van de Diensten van
                                Opdrachtgever onder zich houden, ondanks een bestaande verplichting
                                tot afgifte, totdat Opdrachtgever alle aan HKweb verschuldigde
                                bedragen heeft voldaan.
                            </li>
                            <li>
                                Opdrachtgever garandeert HKweb, dat door de nakoming van de
                                Overeenkomst en met name door de verveelvoudiging of het openbaar
                                maken van de van Opdrachtgever ontvangen toelevering materiaal als
                                bedoeld in artikel 5, leden 2 en 3, alsmede het door HKweb op
                                verzoek van Opdrachtgever samengestelde materiaal geen inbreuk wordt
                                gemaakt op rechten van derden, zoals maar niet beperkt tot
                                intellectuele eigendomsrechten. Opdrachtgever vrijwaart HKweb zowel
                                in als buiten rechte voor alle aanspraken van derden wegens
                                vermeende inbreuk op hun rechten.
                            </li>
                            <li>
                                Indien ten aanzien van de juistheid van de door derden
                                gepretendeerde rechten als bedoeld in lid 3 van dit artikel gerede
                                twijfel ontstaat of blijft bestaan, is HKweb bevoegd maar niet
                                gehouden de nakoming van de Overeenkomst op te schorten tot het
                                moment waarop in rechte onherroepelijk komt vast te staan dat HKweb
                                door de nakoming van de Overeenkomst geen inbreuk op deze rechten
                                maakt. Daarna zal HKweb de werkzaamheden alsnog binnen een redelijke
                                termijn uitvoeren.
                            </li>
                            <li>
                                Alle rechten van intellectueel eigendom op alle krachtens de
                                Overeenkomst ontwikkelde of ter beschikking gestelde Producten,
                                Diensten en/of Software berusten uitsluitend bij HKweb of diens
                                licentiegevers. Opdrachtgever verkrijgt uitsluitend een
                                niet-exclusief en niet-overdraagbaar gebruiksrecht met betrekking
                                tot het intellectueel eigendom in overeenstemming met het beoogde
                                gebruik voor de duur van de Overeenkomst.
                            </li>
                            <li>
                                Opdrachtgever onthoudt zich het recht van het verveelvoudigen en/of
                                openbaar maken en/of verspreiden van de Producten, Diensten en/of
                                Software en de daarbij behorende andere materialen.
                            </li>
                            <li>
                                Het is Opdrachtgever niet toegestaan enige aanduiding omtrent
                                auteursrechten, merken, handelsnamen of andere rechten van
                                intellectueel eigendom uit de Producten, Diensten en/of Software te
                                verwijderen of te wijzigen, daaronder begrepen aanduidingen omtrent
                                vertrouwelijk karakter en geheimhouding van de Software.
                            </li>
                            <li>
                                Het is HKweb toegestaan technische maatregelen te nemen ter
                                bescherming van de Producten, Diensten en/of Software. Indien HKweb
                                door middel van technische bescherming de genoemde onderdelen heeft
                                beveiligd, is het Opdrachtgever niet toegestaan deze beveiliging te
                                verwijderen of te ontwijken.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 17. Geheimhouding
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Opdrachtgever en HKweb zullen alle vertrouwelijke informatie die zij
                                verkrijgen omtrent elkaars ondernemingen en hun relaties strikt
                                vertrouwelijk behandelen. Informatie zal in ieder geval als
                                vertrouwelijk worden aangemerkt, als zij als zodanig door
                                Opdrachtgever en HKweb worden aangeduid. De in dit artikellid
                                opgenomen verplichting geldt gedurende de looptijd van een
                                Overeenkomst en 1 (een) jaar daarna.
                            </li>
                            <li>
                                Ingeval van overtreding van het in artikel 17 lid 1 bepaalde, is
                                Opdrachtgever aan HKweb een boete verschuldigd van € 2.500, - per
                                overtreding, onverminderd het recht van HKweb om de werkelijk door
                                haar geleden schade op Opdrachtgever te verhalen.
                            </li>
                            <li>
                                Opdrachtgever stemt ermee in dat zijn persoonsgegevens, met
                                inachtneming van de daarvoor geldende wettelijke regelingen, worden
                                verwerkt voor marktonderzoek en direct marketing ten behoeve van
                                Diensten van HKweb. Indien Opdrachtgever bezwaar heeft tegen de
                                verwerking van zijn persoonsgegevens of een eerder verleende
                                instemming wil intrekken, kan hij dit te allen tijde schriftelijk
                                aan HKweb kenbaar maken. Opdrachtgever kan te allen tijde inzage
                                verzoeken in de gegevens die over hem in het databestand van HKweb
                                zijn opgeslagen.
                            </li>
                            <li>
                                Opdrachtgever staat ervoor in dat alle wettelijke voorschriften
                                betreffende eventueel te verwerken gegevens, daaronder in het
                                bijzonder begrepen de voorschriften bij of krachtens de Wet
                                Bescherming Persoonsgegevens gesteld, stipt in acht zijn en zullen
                                worden genomen en dat alle voorgeschreven aanmeldingen zijn
                                verricht. Opdrachtgever zal HKweb alle terzake gevraagde informatie
                                onverwijld schriftelijk verstrekken.
                            </li>
                            <li>
                                Opdrachtgever vrijwaart HKweb voor alle aanspraken van derden die
                                jegens HKweb mochten worden ingesteld wegens schending van de Wet
                                Bescherming Persoonsgegevens en/of wettelijke bewaartermijnen. HKweb
                                spant zich in passende technische en organisatorische maatregelen te
                                treffen om persoonsgegevens en gegevens zoals bedoeld in dit artikel
                                te beveiligen tegen verlies, vernietiging, beschadiging of tegen
                                enige vorm van onrechtmatig gebruik. Deze maatregelen voorzien in,
                                rekening houdend met de stand van de techniek en de kosten van de
                                tenuitvoerlegging, een passend beschermingsniveau gelet op de
                                risico’s die de verwerking en de aard van de gegevens met zich
                                meebrengen.
                            </li>
                            <li>
                                Alhoewel HKweb zich zal inspannen om de gegevens veilig te stellen
                                conform lid 4 van dit artikel is zij niet aansprakelijk voor schade
                                die op basis hiervan eventueel zou ontstaan HKweb behoudt zich het
                                recht voor om anonieme statistische gegevens (niet zijnde
                                persoonsgegevens) die zij ten behoeve van Opdrachtgever verzamelt
                                voor eigen analyses te gebruiken.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 18. Diversen
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Wanneer een bepaling van deze algemene voorwaarden door een
                                gerechtelijke instantie wordt vernietigd, nietig wordt verklaard of
                                haar gelding wordt ontzegd, zal dit geen effect hebben op de andere
                                bepalingen van deze algemene voorwaarden. In voornoemd geval zullen
                                Opdrachtgever en HKweb in overleg treden om nieuwe bepalingen
                                overeen te komen waarbij zoveel mogelijk aansluiting wordt gezocht
                                bij het doel en de strekking van de nietige, vernietigde bepaling
                                dan wel bij de bepaling waaraan de gelding werd ontzegd.
                            </li>
                            <li>
                                HKweb kan haar rechten en verplichtingen voortvloeiend uit een
                                Overeenkomst overdragen aan een andere rechtspersoon bij overgang
                                van (een deel van) haar onderneming. Opdrachtgever kan de rechten en
                                verplichtingen voortvloeiend uit een Overeenkomst en/of algemene
                                voorwaarden niet zonder toestemming van HKweb aan een derde
                                overdragen. HKweb zal haar toestemming niet op onredelijke gronden
                                onthouden.
                            </li>
                            <li>
                                Bepalingen uit de algemene voorwaarden en/of de Overeenkomst die
                                naar hun aard bedoeld zijn stand te houden na het einde van de
                                Overeenkomst, zullen van toepassing blijven.
                            </li>
                            <li>
                                De algemene voorwaarden worden kosteloos aan Opdrachtgever verstrekt
                                door HKweb.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 19. Toepasselijk recht en geschillen
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Op alle rechtsbetrekkingen waarbij HKweb partij is, is uitsluitend
                                het Nederlands recht van toepassing, ook indien aan een Overeenkomst
                                geheel of gedeeltelijk in het buitenland uitvoering wordt gegeven of
                                indien de bij de rechtsbetrekking betrokken partij aldaar woonplaats
                                heeft. De toepasselijkheid van het Weens Koopverdrag wordt
                                uitgesloten.
                            </li>
                            <li>
                                Partijen zullen eerst een beroep op de rechter doen nadat zij zich
                                tot het uiterste hebben ingespannen een geschil in onderling overleg
                                te beslechten.
                            </li>
                            <li>
                                Alle geschillen voortvloeiende uit aanbiedingen en overeenkomsten,
                                hoe ook genaamd, worden onderworpen aan het oordeel van de rechter
                                in het arrondissement waar HKweb is gevestigd, tenzij de wet
                                dwingend een andere rechter bevoegd verklaart.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 20. Specifieke bepalingen omtrent Zoekmachine optimalisatie (SEO)
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Met betrekking tot de Diensten Zoekmachine optimalisatie (SEO)
                                behoudt HKweb zich de volgende rechten voor.
                            </li>
                            <li>
                                HKweb zal zich inspannen de opdracht naar beste kunnen uit te
                                voeren. Hierbij wordt voor de dienst SEO gestreefd naar een goede
                                kwalitatieve vermelding in de meest gebruikte Nederlandse (of
                                anderszins overeengekomen) zoekmachines. HKweb heeft voor de
                                absolute score een inspanningsverplichting en er zal indien mogelijk
                                naar een hoge positie worden gestreefd. HKweb behoudt zich het recht
                                voor hiervan af te wijken indien sprake is van moeilijk te
                                positioneren woorden, spam van derden, niet indexeren door de
                                zoekmachine(s), afwijzing of niet indexeren van de URL door de
                                zoekmachine vanwege technische aspecten of specificaties van de
                                website dan wel technische onvolkomenheden of het niet voldoen en/of
                                opvolgen van de door HKweb verstrekte adviezen.
                            </li>
                            <li>
                                Door of vanwege HKweb verstrekte (statistische) gegevens
                                (indicaties) zijn telkens slechts van indicatieve aard, tenzij
                                uitdrukkelijk anders vermeld. Aan deze gegevens kunnen door
                                Opdrachtgever geen rechten worden ontleend. Voor de Dienst SEO geldt
                                een inspanningsverplichting en geen resultaatsverplichting.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 21. Garanties Opdrachtgever
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Opdrachtgever garandeert dat geen inbreuk wordt gemaakt op rechten
                                van derden bij het ter beschikking stellen aan HKweb van apparatuur,
                                programmatuur, voor websites bestemd materiaal, data(banken), of
                                andere materialen en/of informatie. Opdrachtgever vrijwaart HKweb
                                tegen elke actie die gebaseerd is op de bewering dat zodanig
                                beschikbaar stellen, gebruiken, bewerken, installeren of
                                incorporeren inbreuk maakt op enig recht van derden.
                            </li>
                            <li>
                                Opdrachtgever is als enige verantwoordelijk voor de Content en
                                garandeert dat deze zal voldoen aan de eisen van goede smaak en
                                zeden. Opdrachtgever vrijwaart HKweb voor alle aanspraken van derden
                                die gebaseerd zijn op de Content. Indien HKweb van mening is dat de
                                Content niet voldoet aan deze eisen dan heeft zij het recht haar
                                Diensten op te schorten dan wel te beëindigen zonder ter zake
                                schadeplichtig te worden.
                            </li>
                        </ol>
                    </Text>

                    <Heading level={2} id="definities">
                        Artikel 22. Regelgeving – Gedragscodes
                    </Heading>
                    <Text>
                        <ol>
                            <li>
                                Partijen garanderen dat zij te allen tijde de toepasselijke
                                bepalingen in de geldende (Europese) wetgeving en gedragsregels
                                zullen naleven waaronder regelgeving ter zake van bescherming
                                persoonsgegevens en elektronische communicatie alsmede de
                                (gedrags)regels van de branchevereniging Data Driven Marketing
                                Association (‘DDMA’) waaronder de ‘Code Reclame via E-mail’.
                            </li>
                            <li>
                                In de voornoemde gedragscodes/regelgeving zijn onder andere regels
                                opgenomen ter zake van de naleving van de vereiste ‘opt-in’ regeling
                                voor verzending van e-mails en het verbod op ‘spam’.
                            </li>
                            <li>
                                De Opdrachtgever vrijwaart HKweb voor alle aanspraken van derden die
                                voortvloeien uit het niet – of niet volledig – door de Opdrachtgever
                                naleven van de hiervoor genoemde regelgeving en/of gedragscodes en
                                zal alle schade vergoeden die door HKweb wordt geleden als gevolg
                                van een inbreuk op de garantie opgenomen in lid 1 van dit artikel.
                                HKweb heeft in een dergelijk geval bovendien het recht de
                                Overeenkomst per direct te beëindigen zonder ter zake schadeplichtig
                                te zijn.
                            </li>
                        </ol>
                    </Text>

                    <Text>
                        <Link href="mailto:info@hkweb.nl" name="e-mail: info@hkweb.nl" /> |{' '}
                        <Link href="tel:+31654224518" name="telefoon: 06 - 5422 4518" />
                    </Text>
                </Stack>
            </Flex>
        </Layout>
    );
};

/** @component */
export default Conditions;
