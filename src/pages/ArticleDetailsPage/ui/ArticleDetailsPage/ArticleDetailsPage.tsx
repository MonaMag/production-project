import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
