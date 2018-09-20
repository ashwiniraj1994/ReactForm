import React from 'react';
import '../css/formstepper1.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer footerstyle">

                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}