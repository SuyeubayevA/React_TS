import React, {Fragment} from 'react';
import { MainPageCards } from '../components/MainPageCards';
import {MainPageAdv} from '../components/MainPageAdv';
import './styles.css';

export const MainPage: React.FC  = () => {
    return(
        <Fragment>
            <div className="body-container" >
                <div className="body-container__left-sidebar" >
                    <MainPageCards titles={['Мои счета', 'Шаблоны']} row={4} />
                </div>
                <div className="body-container__right-sidebar" >
                    <MainPageAdv titles={['Курс обмена:','Кредит Auto', 'Депозиты']} />
                </div>
           </div>
        </Fragment>
    )
}