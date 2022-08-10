import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 350px;
    height: auto;
    padding: 30px 30px;
    background: var(--dark);
    display: flex;
    justify-content: center;
    margin: 40px 40px;
    border-radius: 12px;
    color: var(--white);

    @media screen and (max-width: 1200px){
        max-width: 600px;
        margin: 30px auto;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ImageContainer = styled.div`
    width: 158px;
    height: 158px;
    border-radius: 50%;
    border: 5px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    
    & img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: fill;
    }
`
export const SocialContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: auto;
    cursor: pointer;

    & p {
        line-height: 40px;
        margin: 10px;
    }

    & a{
        text-decoration: none;
        color: var(--white-smoke);
    }

`

export const TextName = styled.h3`
    font-size: 20px;
    margin: 30px 0 10px 0;
    color: var(--white-smoke);

`

export const TextJob = styled.small`
    font-size: 14px;
    color: var(--gray);
    

`

