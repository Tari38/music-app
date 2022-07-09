import logo from '../../logo.png';
import "./Header.css";

export default function Header() {
    return(
        <>
            <div className="header">
                <img className="header-img" src={logo} alt="music app logo"></img>
            </div>
        </>
    )
}