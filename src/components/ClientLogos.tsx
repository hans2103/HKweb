import Heading from '@/components/molecules/Heading';
import Image from '@/components/molecules/Image';

const logos = [
    { src: '/logo/oeteldonk.png', alt: 'logo Oeteldonksche Club van 1882' },
    { src: '/logo/onderdelenexpert.png', alt: 'Zanden Onderdelen Service B.V.' },
    { src: '/logo/backbase.png', alt: 'Backbase' },
    { src: '/logo/npo.png', alt: 'NPO' },
    { src: '/logo/puro.png', alt: 'Puro petfood' },
    { src: '/logo/ggnet.png', alt: 'GGNet' },
    { src: '/logo/roc-nijmegen.png', alt: 'ROC Nijmegen' },
    { src: '/logo/anwb-golf.png', alt: 'ANWB Golf' },
    { src: '/logo/schoonheideersel.png', alt: 'Schoonheid Eersel' },
    { src: '/logo/leergelddenhaag.png', alt: 'Leergeld Den Haag' },
];

const ClientLogos = () => {
    return (
        <div className="width:page stack logos">
            <Heading
                level={2}
                size={'l'}
            >
                test
            </Heading>

            <ul
                className={'cluster cluster--center logos'}
            >
                {logos.map((logo) => (
                    <li key={logo.alt}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={800}
                            height={400}
                        />
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default ClientLogos;
