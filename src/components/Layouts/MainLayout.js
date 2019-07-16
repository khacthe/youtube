// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Sidebar, Header, Footer } from '.';

const Body = styled.div`
  background: #fafafa;
`;

const  MainLayout = (props) => {
  const { children } = props;
    return (
      <Body>
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </Body>
    );
  }



export default MainLayout;
