import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AppRoutes } from "../AppRoutes";
import './NavMenu.css';
import { useAuth } from './Auth';

const NavMenu = () => {
  const auth = useAuth();
  const [collapsed, setCollapsed] = useState(true);

  //actualizar con un setState que cambie su balor al apretar el boton

  const toggleNavbar = (e) => {
    setCollapsed(!collapsed)
  }

  const handelClick = () => {
    auth.setLoginTouch(!auth.loginTouch)
    auth.logout();
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <NavbarBrand tag={Link} to="/">Cadeteria</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            {AppRoutes.map((route, index) => {
              const { path, ...rest } = route;
              if (route.invisible) return null
              if (route.private && !auth.cookies.get("name")) return null;
              if (route.publicOnly && auth.cookies.get("name")) return null
              if (route.exclusive && auth.cookies.get("rol") != 'admin') return null
              return (
                <NavItem key={rest.name + index}>
                  <NavLink tag={Link} className="text-dark" to={path}>{rest.name}</NavLink>
                </NavItem>
              )
            })}
            {auth.cookies.get('name') ?
              <button type="button" onClick={handelClick} className="btn btn-outline-danger">Logout</button>
              : null
            }
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );

}

export default NavMenu;
