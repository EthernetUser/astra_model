import './style.css'
import logo from '../../img/ASTRA_MODEL_LOGO.png'
import Nav from '../Nav'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__logo"><img src={logo} alt=""/></div>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header