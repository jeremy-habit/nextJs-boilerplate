import React from 'react';
import {withAuthSync} from '#components/hooks/withAuth';
import {useTranslation} from '#config/i18n';

const NAMESPACES_REQUIRED = ['common'];

const Index = () => {
    const {t} = useTranslation(NAMESPACES_REQUIRED);

    return (
        <div>
          Hello Cosmos
        </div>
    );
};

Index.getInitialProps = async () => ({
    namespacesRequired: NAMESPACES_REQUIRED,
});

export default withAuthSync(Index);
