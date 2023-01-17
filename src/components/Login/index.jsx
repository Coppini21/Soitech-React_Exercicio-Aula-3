import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./style";

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <Container>
            <form onSubmit={() => {}}>
                <br/><br/><br/><br/>
                <label>Log in</label><br/><br/>
                <label htmlFor="emailLogin">Email</label><br/>
                <input type="email" name="emailLogin" id="emailLogin" value={email} placeholder="Enter Your Email Address" onChange={(e) => setEmail(e.target.value)} /><br/><br></br>
                <label htmlFor="senhaLogin">Senha</label><br/>
                <input type="text" name="senhaLogin" id="senhaLogin" value={senha} placeholder="Enter Your Password" onChange={(e) => setSenha(e.target.value)} /><br/><br/>
                <input type="checkbox" name="salvarDados" id="salvarDados" />
                <label htmlFor="salvarDados" id="labelRemember">Remember Me</label><br/>
                <button type="submit" id="btnLogin">Log in</button>
                <div id="linha" />
                <p>Don't have an account?</p>
                <Link to='/registration'>Sign up</Link>
            </form>
        </Container>
    );
}