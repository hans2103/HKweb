'use client';

import { JSX, useState, useEffect, useRef } from 'react';
import LightIcon from '@/icons/theme-light.svg';
import DarkIcon from '@/icons/theme-dark.svg';
import OsIcon from '@/icons/theme-os.svg';

type Theme = 'system' | 'light' | 'dark';

const themes: { value: Theme; label: string; icon: JSX.Element }[] = [
    { value: 'system', label: 'System', icon: <OsIcon className="theme-icon" /> },
    { value: 'light', label: 'Light', icon: <LightIcon className="theme-icon" /> },
    { value: 'dark', label: 'Dark', icon: <DarkIcon className="theme-icon" /> },
];

const LOCAL_STORAGE_KEY = 'theme-preference';

export default function ThemeSelector() {
    const [theme, setTheme] = useState<Theme>('system');
    const [open, setOpen] = useState(false);
    const selectorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;
        if (storedTheme && themes.some(t => t.value === storedTheme)) {
            setTheme(storedTheme);
            applyTheme(storedTheme);
        } else {
            applyTheme('system');
        }
    }, []);

    const applyTheme = (theme: Theme) => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
        applyTheme(newTheme);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selected = themes.find(t => t.value === theme)!;

    return (
        <div className="theme-selector" ref={selectorRef}>
            <button
                type="button"
                className="button button--theme-selector"
                onClick={() => setOpen(!open)}
            >
                {selected.icon}
                <span className="button__text">Theme</span>
            </button>

            {open && (
                <ul className="theme-selector__list">
                    {themes.map(option => (
                        <li key={option.value}>
                            <button
                                className={`button button--theme-selector-option${
                                    theme === option.value ? ' button--theme-selector-option--active' : ''
                                }`}
                                onClick={() => handleThemeChange(option.value)}
                            >
                                {option.icon}
                                <span className="button__text">{option.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
