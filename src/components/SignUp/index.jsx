import React, { useState, useContext } from "react";

import MyContext from "../../context/MyContext";

import { Container } from "./style";

export default function SignUp(props) {
  const [nome, setNome] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const { showPage, setShowPage } = useContext(MyContext)

  function enviarCadastro(event) {
    
    console.log("entrou")

    if (nome && emailCadastro && senhaCadastro) {
        localStorage.clear()
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", emailCadastro);
        localStorage.setItem("senha", senhaCadastro);
        localStorage.setItem("autorizacao", "liberado");
        window.location.reload();

    } else {
      alert("Error: Preencha os campos corretamente!");
    }

    event.preventDefault()
  }

  function mudandoParaLogIn(){
    setShowPage("Login")
  }

  return (
    <Container>
      <form onSubmit={enviarCadastro}>
        <br />
        <label>Cadastre-se</label>
        <br />
        <br />
        <label>Nome</label>
        <br />
        <input
          type="text"
          name="nomeSignUp"
          id="nomeSignUp"
          value={nome}
          placeholder="Enter Your Full Name"
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="emailSignUp">Email</label>
        <br />
        <input
          type="email"
          name="emailSignUp"
          id="emailSignUp"
          value={emailCadastro}
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmailCadastro(e.target.value)}
        />
        <br />
        <br></br>
        <label htmlFor="senhaSignUp">Senha</label>
        <br />
        <input
          type="password"
          name="senhaSignUp"
          id="senhaSignUp"
          value={senhaCadastro}
          placeholder="Enter Your Password"
          onChange={(e) => setSenhaCadastro(e.target.value)}
        />
        <br />
        <br />
        <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
        <label htmlFor="aceitarTermos" id="labelTermos">
          I agree with <a className="palavraChave">Terms</a> and{" "}
          <a className="palavraChave">Privacy</a>
        </label>
        <br />
        <button type="submit" id="btnSignUp">
          Sign up
        </button>
        <div id="linha" />
        <p>Already have an account?</p>
        <a onClick={mudandoParaLogIn}>Log in</a>
      </form>
    </Container>
  );
}
