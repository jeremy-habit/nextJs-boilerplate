import NextI18Next from 'next-i18next';
import {isSSR} from '../utils/next.utils';

export const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'fr',
    ignoreRoutes: ['/_next/', '/static/', '/public/'],
    localePath: isSSR ? 'public/locales' : 'locales',
    otherLanguages: ['en'],
    localeSubpaths: {
        fr: 'fr',
        en: 'en',
    },
});

export const {
    appWithTranslation,
    withTranslation,
    useTranslation,
    Router,
    Link,
    i18n,
    Trans,
    config,
} = NextI18NextInstance;
