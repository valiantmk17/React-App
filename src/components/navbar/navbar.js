import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <Link></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link to="/homepage" class="nav-item nav-link">Home</Link>
                    <Link to="/pageone" class="nav-item nav-link">TableSatu</Link>
                    <Link to="/pagetwo" class="nav-item nav-link">TableDua</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
<Link to="/pagetwo">TableDua</Link>