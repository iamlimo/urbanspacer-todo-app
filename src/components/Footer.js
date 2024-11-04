import React from 'react'

const Footer = () => {
      const d = new Date();
      let year = d.getFullYear();
  return (
    <div>
      Made with love ❤️ <a href="https://github.com/Miyikay">Miyikay</a> and
      Limo ©️ {year}
    </div>
  );
}

export default Footer
