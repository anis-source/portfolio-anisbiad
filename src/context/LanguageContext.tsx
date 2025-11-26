'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { content, Language } from '@/data/content';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof content['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr'); // Default to French as per user request context

    const value = {
        language,
        setLanguage,
        t: content[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
