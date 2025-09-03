import { FaInstagram, FaLinkedin, FaGithub, FaCodepen, FaBehance } from 'react-icons/fa';

const links = [
    { href: 'https://instagram.com/hans2103', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://linkedin.com/in/hans2103', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/hans2103', icon: FaGithub, label: 'GitHub' },
    { href: 'https://codepen.io/hans2103', icon: FaCodepen, label: 'Codepen' },
    { href: 'https://www.behance.net/hans2103', icon: FaBehance, label: 'Behance' }
];

const SocialProof = () => {
    return (
        <ul className={'social cluster cluster--xs cluster--justify-start'}>
            {links.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className={"button button--social"}
                    >
                        <Icon aria-hidden={'true'} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialProof;
