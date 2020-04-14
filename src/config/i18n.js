import NextI18Next from 'next-i18next';
import {isSSR} from '../utils/next.utils';

export const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en-US',
    ignoreRoutes: ['/_next/', '/static/', '/public/'],
    localePath: isSSR ? 'public/locales' : 'locales',
    otherLanguages: ['coucou', 'en-GB'],
    localeSubpaths: {
        "coucou": 'BROUROUROUROUlolilol',
        "en-US": 'en-US',
        "en-GB": 'en-GB'
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
