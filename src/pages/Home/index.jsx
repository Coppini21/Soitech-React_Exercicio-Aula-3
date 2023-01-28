import React from "react";
import { useContext } from "react";
import logo from "../../assets/image 2.svg";

import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import MyContext from "../../context/MyContext";

import { Container, ContainerRegistration } from "./style";

export default function Home() {
  const { showPage, setShowPage } = useContext(MyContext);

  return (
    <>
      {showPage === "Login" ? (
        <Container>
          <div className="divTitulo-img">
            <img className="imgLogo" src={logo} alt="logo" />
            <span>
              Já tem login? <br />
              Entre
            </span>
          </div>
          <div className="divLogin">
            <Login />
          </div>
        </Container>
      ) : (
        <ContainerRegistration>
          <div className="divTitulo-img">
            <img className="imgLogo" src={logo} alt="logo" />
            <span>
              Não tem <br />
              Login? <br />
              Cadastre-se
            </span>
          </div>
          <div className="divSignUp">
            <SignUp />
          </div>
        </ContainerRegistration>
      )}
    </>
  );
}

