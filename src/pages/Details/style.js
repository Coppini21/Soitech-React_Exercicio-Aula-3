import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img{
        height: 300px;
        width: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

`;

export const DetalhesItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    h2{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h3{
        text-align: start;
    }

    span{
        font-weight: 400;
    }
`;