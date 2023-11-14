import React from 'react'
import './Header.css'
import LogoHeader from '../../assets/icons/Logo-header.svg'
import { Link} from 'react-router-dom'
import TopMenu from './TopMenu'
import MainMenu from './MainMenu'

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to="/"><img src={LogoHeader} alt="Crito-logo" /></Link>
                <div className="menu">
                    <TopMenu />
                    <MainMenu />
                </div>
            </div>
        </header>
    )
}

export default Header