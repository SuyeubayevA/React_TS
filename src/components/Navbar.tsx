import React,{Fragment} from 'react'
import {Dropdown} from './Dropdown';
import {Link} from 'react-router-dom';

export const Navbar: React.FC = () => {

    return (
        <Fragment>
            <div className="nav-wrapper">
                <div className="navbar-ava"></div>
                <div className="navbar-main_block">
                    <div className="navbar-text">My Account</div>
                    <nav 
                        className="navbar navbar-expand-md navbar-light bg-light rounded" 
                        >
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Главная
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/">Главная</Link>
                                        <Link className="dropdown-item" to="/about">О нас</Link>
                                        <Link className="dropdown-item" to="/map">Карта</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">О нас</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/#" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Счета
                                    </Link>
                                    <Dropdown/>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/#" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Платежи
                                    </Link>
                                    <Dropdown/>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/#" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Переводы
                                    </Link>
                                    <Dropdown/>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/#" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Купля/ продажа валюты
                                    </Link>
                                    <Dropdown/>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link" 
                                        to="/#" id="navbarDropdown" 
                                        role="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        Заявки
                                    </Link>
                                    <Dropdown/>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/map">Наши контакты</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </Fragment>     
    )
}