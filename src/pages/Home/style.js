import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1400px) {
    margin-top: 200px;
    flex-wrap: wrap;
    height: 100%;
    gap: 50px;
    padding-bottom: 20px;
  }
 

  .divTitulo-img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    span{
      font-family: 'Poppins', sans-serif;
      font-size: normal;
      font-weight: 900;
      font-size: 96px;
      line-height: 144px;
      color: #FFFFFF;
    }
  }

  .imgLogo{
    position: absolute;
    top: 60px;
    left: 60px;
  }

  .divLogin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;