import { Container, Form } from "./styles";
import logo_icon from '../../assets/logo_icon.svg';

import { AiOutlineUser, AiFillLock } from "react-icons/ai";

import { useState } from "react";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from '../../hooks/auth';



export function SignIn() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { signIn, loading } = useAuth();

    function handleSignIn(e) {
        signIn({email, password})
    }

    return(
        <Container>
                <header>
                    <div className="imgContainer">
                        <img src={logo_icon} alt="Logo icon" />
                    </div>

                    <h1>
                        Gerenciador de Arquivos de Vendas<span>__</span>
                    </h1>
                </header>
                <Form> 
                    <span>Login:</span>

                    <div id="signIn">
                        <Input 
                            placeholder="email" 
                            type="text"
                            icon={AiOutlineUser}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Input 
                            placeholder="senha" 
                            type="password"
                            icon={AiFillLock}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <section>
                    {
                        loading ? <Button title="Entrar" loading/> : <Button title="Entrar" onClick={handleSignIn}/>
                    }

                        <p>Não possui cadastro?</p>
                        <Link to={"/SignUp"}>Criar conta</Link>
                    </section>
                </Form>
        </Container>
    );
}