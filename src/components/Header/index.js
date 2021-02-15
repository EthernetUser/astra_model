import './style.css'
import Nav from '../Nav'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__logo">ASTRA MODEL</div>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header