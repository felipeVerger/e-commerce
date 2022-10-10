import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

export const Image = styled.img`
    width: 100vw;
    height: 450px;
    object-fit: cover;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    }
`

export const ButtonPrev = styled.button`
    position: absolute;
    top: 50%;
    left: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 4em;
    &:hover {
        color: ${props => props.theme.colors.primary_color};
    }
`

export const ButtonNext = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 4em;
    &:hover {
        color: ${props => props.theme.colors.primary_color};
    }
`