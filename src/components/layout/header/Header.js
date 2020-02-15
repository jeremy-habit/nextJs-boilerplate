import React, {useState} from 'react';
import {i18n} from '#config/i18n';

export const Header = () => {
    const [lngActive, setLngActive] = useState({fr: i18n.language === 'fr', en: i18n.language === 'en'});
    return (<header>
        <div>
            <div onClick={() => {
                setLngActive({en: true, fr: false});
                i18n.changeLanguage('en');
            }}>en
            </div>
            <div onClick={() => {
                setLngActive({en: false, fr: true});
                i18n.changeLanguage('fr');
            }}>fr</div>
        </div>
    </header>);
};
