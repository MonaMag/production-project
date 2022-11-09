import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Детали статьи')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
