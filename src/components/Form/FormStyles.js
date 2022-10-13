import styled from "styled-components";

export const FormContainer = styled.div`
    width: 400px;
    height: max-content;
    background-color: ${(props) => props.theme.colors.white_color};
    border-radius: 5px;
`

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`

export const Title = styled.h3`
    font-size: 1.5em;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.primary_font};
    color: ${(props) => props.theme.colors.primary_color};
`

export const FormCom = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`

export const Label = styled.label`
    width: 100%;
    font-size: 1em;
    font-family: ${(props) => props.theme.fonts.primary_font};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid ${(props) => props.theme.colors.primary_color};
    border-radius: 4px;
    outline: none;
    text-indent: 5px;
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary_color};
    color: ${(props) => props.theme.colors.white_color};
    font-family: ${(props) => props.theme.fonts.primary_font};
    font-size: 1.2em;
`