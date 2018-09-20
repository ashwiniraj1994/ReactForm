import React from 'react';
import '../css/formstepper1.css';

export default class Header extends React.Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="" className="brand-logo logostyle">Bank Application</a>
                    <a href="" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a className="waves-effect waves-light whitebtn btn">Login</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}