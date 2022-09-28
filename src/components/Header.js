import { Close, MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import './styles/Header.scss'
import { Link } from 'react-router-dom';


const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    
    return (
        <div className="header">

            <div className="header__logo">
                <h1>BOB</h1>
            </div>

            <nav className={active ? 'navbar active' : 'navbar'}>
                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div>

                    <li>
                        <Link to='/'>HOME</Link>
                    </li>

                    <li>
                        <Link to='/'>ABOUT</Link>
                    </li>

                    <li>
                        <Link to='/'>PORTFOLIO</Link>
                    </li>

                    <li>
                        <Link to='/'>PAGES</Link>
                    </li>

                    <li>
                        <Link to='/'>BLOG</Link>
                    </li>

                    <li>
                        <Link to='/'>CONTACT</Link>
                    </li>
                </ul>
            </nav>

            <div className="changer">
                <MenuOutlined className='menu' onClick={showMenu}/>
            </div>

        </div>
    )
}

export default Header