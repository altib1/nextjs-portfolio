'use client';

import { useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC<{ cvButton?: string }> = ({ cvButton }) => {
    const router = useRouter();

    const changeLanguage = (language: string) => {
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(Boolean);

        if (pathSegments.length > 0 && pathSegments[0].length === 2) {
            pathSegments[0] = language;
        } else {
            pathSegments.unshift(language);
        }

        const newPath = `/${pathSegments.join('/')}`;
        router.push(newPath);
    };

    return (
        <div className="absolute right-4 z-10 top-20 flex space-x-2">
            <button 
                className="flex items-center p-2 rounded transition-colors hover:text-sky-300"
                onClick={() => changeLanguage('en')}
            >
                <span role="img" aria-label="English" className="mr-2 text-xl">🇬🇧</span>
                <p className='hidden sm:flex'>English</p>
            </button>
            <button 
                className="flex items-center p-2 rounded transition-colors hover:text-sky-300"
                onClick={() => changeLanguage('fr')}
            >
                <span role="img" aria-label="Français" className="mr-2 text-xl">🇫🇷</span>
                <p className='hidden sm:flex'>Français</p>
            </button>
           {/* <button 
                className="flex items-center p-2 rounded transition-colors hover:text-sky-300"
                onClick={() => changeLanguage('al')}
            >
                <span role="img" aria-label="Albanian" className="mr-2 text-xl">🇦🇱</span>
                <p className='hidden sm:flex'>Albanian</p>
            </button>*/}
            <a 
                href="/cvalti.pdf" 
                download 
                className="flex items-center p-2 rounded transition-colors hover:text-sky-300"
            >
                <span role="img" aria-label="Download CV" className="mr-2 text-xl">📄</span>
                <p className='hidden sm:flex'>{ cvButton }</p>
            </a>
        </div>
    );
};

export default LanguageSwitcher;
