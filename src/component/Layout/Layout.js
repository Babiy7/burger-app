import React from "react";

const Layout = props => {
  return (
    <>
      <div>Drawer, logo</div>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
