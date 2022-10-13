import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
`

export const ProductWrapper = styled.div`
    max-width: 300px;
    max-height: 450px;
    background-color: ${(props) => props.theme.colors.white_color};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
`