import React, {useState} from 'react';
import cookie from 'js-cookie';
import {Router} from '#config/i18n';
import {authPasswordValue, authPasswordCookieName} from '#constants/password';
import {url} from '#config/url';
import {useTranslation} from '#config/i18n';
import nextCookie from 'next-cookies';
import {isSSR} from '#utils/next.utils';

const NAMESPACES_REQUIRED = ['common', 'login'];

const Login = () => {

    const [password, setPassword] = useState(null);
    const [badPassword, setBadPassword] = useState(false);
    const [t] = useTranslation(NAMESPACES_REQUIRED);
    const isValidPassword = (e) => {
        e.preventDefault();
        if (password === authPasswordValue) {
            setBadPassword(false);
            cookie.set(authPasswordCookieName, authPasswordValue);
            Router.push(url.root.express.page, url.root.express.pattern);
        } else {
            setBadPassword(true);
        }
    };

    return (
        <div>
            <h1>{t('login:title')}</h1>
        </div>
    );
};

Login.getInitialProps = async (ctx) => {
    if (nextCookie(ctx)[authPasswordCookieName] && nextCookie(ctx)[authPasswordCookieName] === authPasswordValue) {
        if (isSSR) {
            ctx.res.writeHead(302, {Location: url.homePage.express.pattern});
            ctx.res.end();
        } else {
            Router.push(url.root.express.page, url.root.express.pattern);
        }
    }
    return {namespacesRequired: NAMESPACES_REQUIRED};
};

export default Login;
