import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const createBubble = (i) => ({
    '--size': `${2 + Math.random() * 4}rem`,
    '--distance': `${6 + Math.random() * 4}rem`,
    '--position': `${-5 + Math.random() * 90}%`,
    '--time': `${2 + Math.random() * 2}s`,
    '--delay': `-${2 + Math.random() * 2}s`,
  });

  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: 128 }, (_, i) => (
            <div className="bubble" key={i} style={createBubble(i)}></div>
         ) )}
        </div>
        <div className="content">
          <div>
            <div>
              <b>Eldew</b>
              <Link to="/secuce">Secuce</Link>
              <Link to="/drupand">Drupand</Link>
              <Link to="/oceash">Oceash</Link>
              <Link to="/ugefe">Ugefe</Link>
              <Link to="/babed">Babed</Link>
            </div>
          </div>
          <Link
            to="https://codepen.io/z-"
            target="_blank"
            className="image"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg')",
            }}
          ></Link>
          <p>©2019 Not Really</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
