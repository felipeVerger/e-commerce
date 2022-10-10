import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${(props) => props.theme.colors.primary_color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

export const Logo = styled.h2`
    color: ${(props) => props.theme.colors.white_color};
    font-family: ${(props) => props.theme.fonts.primary_font};
    font-size: 2em;
    text-transform: uppercase;
`


export const Input = styled.input`
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    text-indent: 10px;
`

export const SearchButton = styled.button`
    width: 70px;
    height: 40px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: ${(props) => props.theme.colors.secondary_color};
    color: ${(props) => props.theme.colors.white_color};
    font-family: ${(props) => props.theme.fonts.primary_font};
    cursor: pointer;
`

export const UserContainer = styled.div`

`

export const UserBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const UserName = styled.span`
    color: ${(props) => props.theme.colors.white_color};
    font-family: ${(props) => props.theme.fonts.primary_font};
    font-size: 1.2em;
`

export const LogoutButton = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.secondary_color};
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary_font};
    color: white;
`

export const LoginButton = styled(Link)`
    background-color: ${(props) => props.theme.colors.secondary_color};
    width: 250px;
`

export const ButtonAuth = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.secondary_color};
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary_font};
    color: white;
`