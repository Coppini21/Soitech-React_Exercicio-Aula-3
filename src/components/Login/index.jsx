import React, { useState, useContext } from "react";
import MyContext from "../../context/MyContext";

import { Container } from "./style";

export default function Login(props){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { showPage, setShowPage } = useContext(MyContext)

    function enviandoInfoLogin(e){   
        if(email === localStorage.getItem("email")){
            if(senha === localStorage.getItem("senha")){
                localStorage.setItem("autorizacao", "liberado")
                window.location.reload()
            }else{
                alert("Error: senha incorreta!")
            }
        }else{
            alert("Error: email incorreto!")
        }

        e.preventDefault()
    }

    function mudandoParaSignUp(){
        setShowPage("Sign Up")
    }

    return(
        <Container>
            <form onSubmit={enviandoInfoLogin}>
                <br/><br/><br/><br/>
                <label>Log in</label><br/><br/>
                <label htmlFor="emailLogin">Email</label><br/>
                <input type="email" name="emailLogin" id="emailLogin" value={email} placeholder="Enter Your Email Address" onChange={(e) => setEmail(e.target.value)} /><br/><br></br>
                <label htmlFor="senhaLogin">Senha</label><br/>
                <input type="password" name="senhaLogin" id="senhaLogin" value={senha} placeholder="Enter Your Password" onChange={(e) => setSenha(e.target.value)} /><br/><br/>
                <input type="checkbox" name="salvarDados" id="salvarDados" />
                <label htmlFor="salvarDados" id="labelRemember">Remember Me</label><br/>
                <button type="submit" id="btnLogin">Log in</button>
                <div id="linha" />
                <p>Don't have an account?</p>
                <a onClick={mudandoParaSignUp}>Sign up</a>
            </form>
        </Container>
    );
}