// pages/privacy-backups.tsx

import type { PageConfig } from 'next';

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Link from '../src/components/link';
import Stack from '../src/components/stack';
import Text from '../src/components/text';
import Layout from '../src/layout/layout';

const PrivacyBackups = () => {
    return (
        <Layout
            title="Privacyverklaring HKweb rclone backups | HKweb"
            description="Privacyverklaring van de interne Google OAuth-client “HKweb rclone backups”, waarmee HKweb serverbackups opslaat in de eigen Google Drive.">
            <Flex
                gap="xl"
                p="l"
                pl="pageInline"
                ml="auto"
                mr="auto"
                maxWidth="bodyMaxWidth"
                flexDirection="column">
                <Heading level={1}>Privacyverklaring HKweb rclone backups</Heading>
                <Text>Laatst bijgewerkt: 1 oktober 2026</Text>

                <Stack as="section" gap="m" mt="m" aria-labelledby="section01">
                    <Heading level={2} id="section01">
                        Wat is deze app?
                    </Heading>
                    <Text>
                        &ldquo;HKweb rclone backups&rdquo; is een interne Google OAuth-client van
                        HKweb (Hans Kuijpers). Hij wordt uitsluitend gebruikt door de beheerder om
                        met de open-source tool <Link href="https://rclone.org" name="rclone" />{' '}
                        nachtelijke backups van de eigen webservers op te slaan in het eigen Google
                        Drive-account van HKweb. De app is niet bedoeld voor en niet beschikbaar aan
                        andere gebruikers.
                    </Text>
                </Stack>

                <Stack as="section" gap="m" mt="m" aria-labelledby="section02">
                    <Heading level={2} id="section02">
                        Welke gegevens worden gebruikt?
                    </Heading>
                    <Text>
                        De app vraagt toegang tot Google Drive van het account van de beheerder, om
                        backupbestanden te uploaden, te lijsten en te kopiëren. Er worden geen
                        gegevens van andere Google-gebruikers opgevraagd, verzameld of opgeslagen.
                    </Text>
                </Stack>

                <Stack as="section" gap="m" mt="m" aria-labelledby="section03">
                    <Heading level={2} id="section03">
                        Delen en bewaren
                    </Heading>
                    <Text>
                        Gegevens die via de Google API&apos;s worden benaderd, worden niet gedeeld
                        met derden, niet verkocht en niet gebruikt voor advertenties of andere
                        doeleinden dan het maken en beheren van backups. Het OAuth-token staat
                        alleen in de rclone-configuratie op de servers van HKweb, en is alleen
                        toegankelijk voor de beheerder.
                    </Text>
                    <Text>
                        Het gebruik van informatie die via Google API&apos;s is ontvangen, voldoet
                        aan de{' '}
                        <Link
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            name="Google API Services User Data Policy"
                        />
                        , inclusief de eisen voor beperkt gebruik (Limited Use).
                    </Text>
                </Stack>

                <Stack as="section" gap="m" mt="m" aria-labelledby="section04">
                    <Heading level={2} id="section04">
                        Toegang intrekken
                    </Heading>
                    <Text>
                        De toegang kan op elk moment worden ingetrokken via{' '}
                        <Link
                            href="https://myaccount.google.com/permissions"
                            name="myaccount.google.com/permissions"
                        />
                        .
                    </Text>
                </Stack>

                <Stack as="section" gap="m" mt="m" aria-labelledby="section05">
                    <Heading level={2} id="section05">
                        Contact
                    </Heading>
                    <Text>
                        HKweb, Hans Kuijpers,{' '}
                        <Link href="mailto:info@hkweb.nl" name="info@hkweb.nl" />
                    </Text>
                </Stack>

                <Stack as="section" gap="m" mt="m" lang="en" aria-labelledby="section06">
                    <Heading level={2} id="section06">
                        English summary
                    </Heading>
                    <Text>
                        &ldquo;HKweb rclone backups&rdquo; is an internal OAuth client used only by
                        the HKweb administrator to store server backups in HKweb&apos;s own Google
                        Drive via rclone. No data from other users is collected. Data accessed
                        through Google APIs is not shared, sold or used for any purpose other than
                        backups, and its use complies with the Google API Services User Data Policy,
                        including the Limited Use requirements. Contact: info@hkweb.nl.
                    </Text>
                </Stack>
            </Flex>
        </Layout>
    );
};

// Static content, no interactivity: ship zero client-side JavaScript.
export const config: PageConfig = { unstable_runtimeJS: false };

/** @component */
export default PrivacyBackups;
