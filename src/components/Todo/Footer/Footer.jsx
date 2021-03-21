import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__counter">3 item</p>
            <div className="footer__body">
                <div className="btn">All</div>
                <div className="btn">Not Completed</div>
                <div className="btn">Completed</div>
            </div>
            <div className="btn">Clear completed</div>
        </footer>
    );
}

export default Footer;
