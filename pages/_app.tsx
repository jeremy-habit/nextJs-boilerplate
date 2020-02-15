import App from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '#config/theme';
import {appWithTranslation, i18n} from '#config/i18n';
import {Header} from '#components/layout/header/Header';
import '#public/css/main.scss';

class MyApp extends App {
  
  static async getInitialProps(appCtx) {
    const {ctx} = appCtx;
    const currentLanguage = ctx && ctx.req ? ctx.req.language : i18n.language;
    await i18n.changeLanguage(currentLanguage);
    const appProps = await App.getInitialProps(appCtx);
    return {...appProps}
  }
  
  render(): JSX.Element {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
