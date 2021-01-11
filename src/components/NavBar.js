import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aForEach = links.map( tab => (
<a key = {tab} href = {"#" + tab}>{tab}</a>   
  )
)

  return (<nav> {aForEach}</nav>)
}

export default NavBar;
