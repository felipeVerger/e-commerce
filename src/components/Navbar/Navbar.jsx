import React, { useState } from 'react';
import {Logo, NavContainer, Input, UserContainer, UserBlock, UserInfo, SearchButton, LogoutButton, LoginButton, UserName, ButtonAuth, LogoBlock} from './NavStyles';
import { Link } from 'react-router-dom';
import {FcMoneyTransfer} from 'react-icons/fc';
import Avatar from 'react-avatar';


const Navbar = () => {
  const [user, setUser] = useState(false);

  return (
    <NavContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <LogoBlock>
          <FcMoneyTransfer fontSize='2.5em'/>
          <Logo>MyBills</Logo>
        </LogoBlock>
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
            <LogoutButton onClick={() => setUser(!user)}>Logout</LogoutButton>
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