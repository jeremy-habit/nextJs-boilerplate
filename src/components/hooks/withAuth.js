import {Router} from '#config/i18n';
import nextCookie from 'next-cookies';
import {isSSR} from '#utils/next.utils';
import {url} from '#config/url';
import {authPasswordValue, authPasswordCookieName} from '#constants/password';
import React from 'react';

export const auth = ctx => {
    // If there's no token, it means the user is not logged in.
    // verif token value
    if (!nextCookie(ctx)[authPasswordCookieName] || nextCookie(ctx)[authPasswordCookieName] !== authPasswordValue) {
        if (isSSR) {
            ctx.res.writeHead(302, {Location: url.login.express.pattern});
            ctx.res.end();
        } else {
            Router.push(url.login.express.page, url.login.express.pattern);
        }
    }

    return nextCookie(ctx)[authPasswordCookieName];
};

export const withAuthSync = WrappedComponent => {
    const Wrapper = props => {
        return <WrappedComponent {...props} />;
    };

    Wrapper.getInitialProps = async ctx => {
        const token = auth(ctx);

        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx));

        return {...componentProps, token};
    };

    return Wrapper;
};
