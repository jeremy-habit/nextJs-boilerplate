import React, {useState} from 'react';
import {i18n} from '#config/i18n';

export const Header = () => {
    const [lngActive, setLngActive] = useState({fr: i18n.language === 'fr-FR', en: i18n.language === 'en-EN'});
    return (<header>
        <div>
            <button onClick={() => {
                setLngActive({en: true, fr: false});
                i18n.changeLanguage('en-US');
            }}>en-US
            </button>
            <button onClick={() => {
                setLngActive({en: true, fr: false});
                i18n.changeLanguage('en-GB');
            }}>en-GB
            </button>
            <button onClick={() => {
                setLngActive({en: false, fr: true});
                i18n.changeLanguage('fr-FR');
            }}>fr-FR</button>
        </div>
    </header>);
};
