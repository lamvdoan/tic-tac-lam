import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <Link className="header__title" to="/">
                <h1>Tic Tac Lam</h1>
            </Link>
        </div>
    </header>
);
export default Header;
