import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 520px;
    height: 670px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 32px rgba(31, 38, 135, 0.3);
    border-radius: 10px;


    label{
        width: 460px;
        height: 37.11px;
        font-family: 'Poppins', sans-serif;
        font-size: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
    }

    input{
        margin-top: 10px;
    }

    #emailLogin{
        width: 460px;
        height: 67px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        padding: 0 15px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        background:  rgba(255, 255, 255, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.5);

        &::placeholder{
            color: rgba(255, 255, 255, 0.5);
        }
    }

    #senhaLogin{
        width: 460px;
        height: 67px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        padding: 0 15px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        background:  rgba(255,255,255,0.3);
        border: 2px solid rgba(255, 255, 255, 0.5);

        &::placeholder{
            color: rgba(255, 255, 255, 0.5);
        }
    }

    #salvarDados{
        width: 15px;
        height: 15px;
        background: #F8F8F8;
        border-radius: 3px;
    }

    #labelRemember{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        margin-left: 10px;
    }

    #btnLogin{
        margin-top: 20px;
        width: 460px;
        height: 67px;
        background: rgba(187, 187, 49, 0.6);
        border-radius: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        border: none;
    }

    #linha{
        margin-top: 15px;
        border: 1px solid rgba(255, 255, 255, 0.8);
    }

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 25px;
    }

    a{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #DFDF0E;
        cursor: pointer;  
    }
`;