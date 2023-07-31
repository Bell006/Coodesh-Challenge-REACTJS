import { Container, Form, UploadField } from "./styles";
import logo_icon from '../../assets/logo_icon.svg';

import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbDoorExit } from "react-icons/tb";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Upload() {

    const { signOut } = useAuth();

    const [transactions, setTransactions] = useState([]);
    const [labelText, setLabelText] = useState(null);

    const navigate = useNavigate();

    function handleFileUpload(event) {
        const file = event.target.files[0];
        setLabelText(file ? file.name : null);

        if (file) {
            const reader = new FileReader();
            reader.onload = handleFileRead;
            reader.readAsText(file);
        }
    }

    //File data processing
    function handleFileRead(event) {
        const content = event.target.result;
        const tempTransactions = [];
    
        const lines = content.split('\n');
        lines.forEach((line) => {
          const type = line.slice(0, 1);
          const date = line.slice(1, 26);
          const product = line.slice(26, 56).trim();
          const value = line.slice(56, 66);
          const client = line.slice(66).trim();
    
          tempTransactions.push({
            type,
            date,
            product,
            value,
            client
          });
        });
    
        setTransactions(tempTransactions);
    };

    //Uploading data
    async function handleTransaction() {
        try {
            await api.post("/transactions", { transactions });
            navigate("/Results");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer upload do arquivo.");
            }
        }
    }

    function handleSignOut() {
        signOut();
        navigate(-1);
    };

    return(
        <Container>
                <header>
                    <div className="imgContainer">
                        <img src={logo_icon} alt="Logo icon" />
                    </div>

                    <h1>
                        Arquivo de transações e produtos vendidos
                    </h1>
                    <span>(Formato .txt)</span>
                </header>
                <Form>
                    <UploadField>
                        <label>
                            <AiOutlineCloudUpload/>
                            <span className="label-text">
                                {labelText ? labelText : 'Fazer upload'}
                            </span>
                            <input
                                id='img'
                                type='file'
                                onChange={(e) => handleFileUpload(e)}
                            />
                        </label>
                    </UploadField> 

                    <section>
                        <Button title="Enviar" onClick={handleTransaction}></Button>

                        <button className="exit" onClick={handleSignOut}>
                            <TbDoorExit/> Sair
                        </button>
                    </section>
                </Form>
        </Container>
    );
}