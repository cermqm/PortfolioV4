import React from 'react';
import styled from 'styled-components';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import { BrowserRouter, Route } from 'react-router-dom'; 


import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (

      <BrowserRouter>
      {/* Set up the Router */}
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>About</a></li>
          <li><a href="Portfolio" onClick={props.handleNavbar}>Portfolio</a></li>
          <li><a href="Contact" onClick={props.handleNavbar}>Contact</a></li>
        </NavLinks>
      </CollapseWrapper>
      </BrowserRouter>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;