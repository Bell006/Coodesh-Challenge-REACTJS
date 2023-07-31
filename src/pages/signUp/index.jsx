import { Container, Form } from "./styles";
import logo_icon from '../../assets/logo_icon.svg';

import { AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiLeftArrowCircle } from "react-icons/bi";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";


export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    function handleSignUp() {
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate(-1)
        }) .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro.")
            }
        })
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
                    <span>Crie sua conta:</span>
                    <div className="signUp">
                        <Input 
                            placeholder="Nome" 
                            type="text" 
                            icon={AiOutlineUser}
                            onChange={e => setName(e.target.value)}
                        />

                        <Input 
                            placeholder="email" 
                            type="email"
                            icon={AiOutlineMail}
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
                        <Button title="Cadastrar" onClick={handleSignUp}></Button>

                        <a onClick={handleBack}>
                            <BiLeftArrowCircle/>
                            Voltar para o Login
                        </a>
                    </section>
                </Form>
        </Container>
    );
}