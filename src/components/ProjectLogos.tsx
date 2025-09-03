import Image from '@/components/molecules/Image';

const logos = [
    { src: '/logo1.svg', alt: 'Project 1' },
    { src: '/logo2.svg', alt: 'Project 2' },
    { src: '/logo3.svg', alt: 'Project 3' }
];

export default function ProjectLogos() {
    return (
        <section className="logobar">
            {logos.map((logo) => (
                <>
                    <Image src={logo.src} alt={logo.src} key={logo.src} />
                </>
            ))}
        </section>
    );
}
