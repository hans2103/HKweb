import '@/styles/global.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hans2103 Portfolio',
    description: 'Happy Frontend Developer Portfolio',
    other: {
        'apple-mobile-web-app-title': 'HKweb'
    }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="nl">
        <body>
        <Header />
        <main className="layout:content stack">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
};

export default RootLayout;
