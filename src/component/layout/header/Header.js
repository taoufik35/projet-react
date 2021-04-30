import React from 'react';
import header from './header.png'; 


function Header() {
  // Import result is the URL of your image
  return(
    <div>
   <img className="himage" src={header} alt="header" />
   </div>
  );
}

export default Header;