import styled from "styled-components";
import {AiOutlineEllipsis} from 'react-icons/ai';

export const ProductWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: ${(props) => props.theme.fonts.primary_font};
`

export const Image = styled.img`
    width: 100%;
    max-height: 250px;
    object-fit: contain;
    overflow: hidden;
`

export const ProductBlock = styled.div`
   margin-top: 10px;
`

export const Name = styled.h4`
    font-size: 1.2em;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 5px;
`

export const Description = styled.p`
    font-size: 12px;
`

export const ProductDetail = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const Price = styled.span`
    font-size: 1.5em;
`

export const Date = styled.span`
    font-size: 1em;
`

export const DeleteButton = styled.button`
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 60px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primary_color};
    color: ${(props) => props.theme.colors.white_color};
    cursor: pointer;
`

export const EditButton = styled(AiOutlineEllipsis)`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5em;
    cursor: pointer;
`