import React from 'react'

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: 128 }, (_, i) => (
            <div
              className="bubble"
              key={i}
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `-${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="content">
          <div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Drupand</a>
              <a href="#">Oceash</a>
              <a href="#">Ugefe</a>
              <a href="#">Babed</a>
            </div>
          </div>
          <a
            href="https://codepen.io/z-"
            target="_blank"
            className="image"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg')",
            }}
          ></a>
          <p>©2019 Not Really</p>
        </div>
      </div>
    </div>
  );
}

export default Footer