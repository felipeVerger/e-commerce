import React from 'react';
import {Logo, NavContainer, Input, UserContainer, UserBlock, UserInfo, SearchButton, LogoutButton, LoginButton, UserName, ButtonAuth} from './NavStyles';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const user = false;

  return (
    <NavContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo>fv-commerce</Logo>
      </Link>
      <div>
        <Input/>
        <SearchButton>Search</SearchButton>
      </div>
      <UserContainer>
        {user ? (
          <UserBlock>
            <UserInfo>
              <Avatar round size='60'/>
              <UserName>Felipe Verger</UserName>
            </UserInfo>
            <LogoutButton>Logout</LogoutButton>
          </UserBlock>
        ) : (
          <LoginButton to='/auth'>
            <ButtonAuth>Sign In</ButtonAuth>
          </LoginButton>
        )}
      </UserContainer>
    </NavContainer>
  );
}

export default Navbar