import Logo from '@/components/Logo';
import ThemeSelector from '@/components/ThemeSelector';
import SocialProof from '@/components/SocialProof';

export default function Header() {
    return (
        <header className="header layout:content">
            <div className={'width:page'}>
                <div className={'cluster cluster--justify-stretch'}>
                    <Logo />
                    <div className={'header__utilities cluster cluster--justify-end'}>
                        <ThemeSelector />
                        <SocialProof />
                    </div>
                </div>

            </div>
        </header>
    );
}
