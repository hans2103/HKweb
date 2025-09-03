import Link from 'next/link';
import SocialProof from '@/components/SocialProof';

const Footer = () => {
    return (
        <footer className={'footer layout:content stack'}>
            <div className={'width:page cluster cluster--justify-between'}>
                <div className={'stack'}>
                    <p>&copy; <a href={"https://hkweb.nl"}>HKweb.nl</a></p>
                    <SocialProof/>
                </div>
                <p><Link href={'/algemene-voorwaarden'}>Algemene voorwaarden</Link></p>
            </div>
        </footer>
    )
}

export default Footer;
