import React from 'react';
import {i18n} from '#config/i18n';

export const Header = () => {
    return (<header>
        <div>
            <button onClick={() => {
                i18n.changeLanguage('en-US');
            }}>en-US
            </button>
            <button onClick={() => {
                i18n.changeLanguage('en-GB');
            }}>en-GB
            </button>
            <button onClick={() => {
                i18n.changeLanguage('coucou');
            }}>fr-FR</button>
        </div>
    </header>);
};
