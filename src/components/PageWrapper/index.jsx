import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {Header, NavBar, Footer} from '../../layouts';

const PageWrapper = () => {
    return <main>
        <Header />
            <NavBar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/anime">Anime</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/faves">Favourites</NavLink>
            </NavBar>   
            <article>
                <Outlet />
            </article>
            <Footer />
           </main>
}

export default PageWrapper;