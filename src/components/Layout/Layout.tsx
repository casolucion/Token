import React, {Fragment} from 'react'
import NavbarUi from "../Navbar/NavbarUi";

const Layout =({children}: any)=> {
  return (
    <Fragment>
      <NavbarUi />
      {children}
    </Fragment>
  )
}

export default Layout
