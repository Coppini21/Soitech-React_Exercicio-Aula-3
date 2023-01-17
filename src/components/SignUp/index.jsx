import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./style";

export default function SignUp(){
    const [nome, setNome] = useState('')
    const [emailCadastro, setEmailCadastro] = useState('')
    const [senhaCadastro, setSenhaCadastro] = useState('')

    return(
        <Container>
            <form onSubmit={() => {}}>
                <br/>
                <label>Cadastre-se</label><br/><br/>
                <label>Nome</label><br/>
                <input type="text" name="nomeSignUp" id="nomeSignUp" value={nome} placeholder="Enter Your Full Name" onChange={(e) => setNome(e.target.value)} /><br/><br/>
                <label htmlFor="emailSignUp">Email</label><br/>
                <input type="email" name="emailSignUp" id="emailSignUp" value={emailCadastro} placeholder="Enter Your Email Address" onChange={(e) => setEmailCadastro(e.target.value)} /><br/><br></br>
                <label htmlFor="senhaSignUp">Senha</label><br/>
                <input type="text" name="senhaSignUp" id="senhaSignUp" value={senhaCadastro} placeholder="Enter Your Password" onChange={(e) => setSenhaCadastro(e.target.value)} /><br/><br/>
                <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
                <label htmlFor="aceitarTermos" id="labelTermos">I agree with <a className="palavraChave">Terms</a> and <a className="palavraChave">Privacy</a></label><br/>
                <button type="submit" id="btnSignUp">Sign up</button>
                <div id="linha" />
                <p>Already have an account?</p>
                <Link to='/'>Log in</Link>
            </form>
        </Container>
    );
}