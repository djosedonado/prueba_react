import React from "react";
import {NavLink} from 'react-router-dom'
import '../header/header.css';

function Header() {
    return (
        <div className="navbar bg-primary text-neutral-content">
            <div className="container">
                <button className="btn btn-ghost text-xl button"><NavLink to={"/"}>Frontend</NavLink></button>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/report"}>Report</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;