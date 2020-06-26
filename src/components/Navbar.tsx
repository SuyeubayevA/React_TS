import React,{Fragment} from 'react'

export const Navbar: React.FC = () => {

    return (
        <Fragment>
            <div className="nav-wrapper">
                <div className="navbar-ava">My Account</div>
                <nav className="navbar navbar-expand navbar-light bg-light" style={{width:'1050px'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/"
                                id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">Главная </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/about">О нас</a>
                                <a className="dropdown-item" href="/map">Контакты</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Счета</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/map">Платежи</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Переводы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Купля/продажа валюты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Заявки</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/map">Наши контакты</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
        
    )
}