import styled from "styled-components";


export const Container = styled.div`
    width: calc(100% - 550px);
    height: auto;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px){
        max-width: 600px;
        width: 100%;
        margin: 30px auto;
        align-items: center;
    }
`

export const Card = styled.div`
    width: 100%;
    height: auto;
    margin: 40px 40px;
    padding: 30px 30px;
    border-radius: 12px;
    background: ${ props => props.theme === "dark" ? 'var(--dark)' : 'var(--white)'};

    

`

export const Title = styled.h1`
    color: ${ props => props.theme === "light" ? 'var(--dark)' : 'var(--white-smoke)'};
    font-size: 24px;

`

export const Description = styled.p`
    font-size: 16px;
    color: ${ props => props.theme === "light" ? 'var(--dark)' : 'var(--white-smoke)'};
    margin: 20px;
    line-height: 25px;
`

export const TechsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

export const Tech = styled.div`
    width: 120px;
    height: 120px;
    margin: 20px;
    background: ${ props => props.theme === "dark" ? 'var(--light-dark)' : 'var(--light-gray)'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    transition: all 300ms ease-in-out;
    cursor: pointer;


    &:hover{
        transform: scale(1.2);
        box-shadow: 0 0 12px ${ props => props.theme === "dark" ? 'var(--light-purple)' : 'var(--primary)'};
    }

    
`