// @flow
import * as React from 'react';
import { Sidebar, Header, Footer } from '.';


const  MainLayout = (props) => {
  const { children } = props;
    return (
      <main>
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </main>
    );
  }



export default MainLayout;
