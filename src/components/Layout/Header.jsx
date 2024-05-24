import '../../styles/Header.css'
import reactLogo from '../../assets/react.svg'

function Header() {
    return (
        <div className='header-container'>
            <img src={reactLogo} alt="Logo" className='react logo' />
            <h1 className="header">React Resume Builder</h1>
        </div>
    );
}

export default Header;