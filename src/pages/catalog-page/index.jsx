import { useContext } from 'react';
import { CardList } from '../../components/card-list'
import { Sort } from '../../components/sort'
import { Spinner } from '../../components/spinner';

import s from './styles.module.css';
import { CardsContext } from '../../contexts/card-context';
import { ContentHeader } from '../../components/content-header';
import { TABS } from '../../utils/constants';
import Carousel from '../../components/carousel';
import { Card } from '../../components/card';

export const CatalogPage = () => {
    const { cards: goods } = useContext(CardsContext)
    return (
        <>
            
            <ContentHeader title="Каталог" textButton="Главная" to="/" />
            <Sort tabs={TABS} currentSort="discount" onChangeSort={(data) => console.log(data)} />
            <CardList goods={goods} />
            <Carousel items={goods} component={Card} perView={4} />
        </>
    )
}