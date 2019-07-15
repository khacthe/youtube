import React from 'react';
import styled from 'styled-components';

const Wrap = styled.header`
	height: 56px;
	display: flex;
`;

const Logo = styled.div`
`;

const Search = styled.form``;

const SignIn = styled.a`

`;

const Header = () => (
  <Wrap>
  	<Logo>

  	</Logo>
  	<Search>
		<div>
			<input />
			<button>
			</button>
		</div>
  	</Search>

  </Wrap>
);

export default Header;
