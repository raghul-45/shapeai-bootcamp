import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>copyrights @ {currYear}</p>
      </footer>
    </div>
  );
}
export default Footer;
