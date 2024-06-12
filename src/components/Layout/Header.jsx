import '../../styles/Header.css'
import reactLogo from '../../assets/react.svg'

function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={reactLogo} alt="Application Logo" className='header-logo' />
                <h1 className="header-title">React CV Builder</h1>
            </div>
        </header>
    );
}

export default Header;