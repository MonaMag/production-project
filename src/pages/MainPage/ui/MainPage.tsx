import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div style={{ color: 'blue' }}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
