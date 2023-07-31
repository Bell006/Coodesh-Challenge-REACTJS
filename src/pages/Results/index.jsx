import { Container } from "./styles";
import logo_icon from '../../assets/logo_icon.svg';

import { TbDoorExit } from "react-icons/tb";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Transactions } from "../../components/Transactions";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';

export function Results() {

  const { signOut } = useAuth();

    const [transactions, setTransactions] = useState([]);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    function handleTotal() {
        let total = transactions.reduce((acc, transaction) => {
          const value = parseInt(transaction.value);
          if (transaction.type == 3) {
            return acc;
          } else {
            return acc + value; 
          }
        }, 0);

        total = total/100;
      
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const total = handleTotal();

    function handleSignOut() {
      signOut();
      navigate(-1);
    };



    
    useEffect(() => {
      async function fetchTransactions() {
        try {
            const response = await api.get("/transactions");
            setTransactions(response.data);
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível buscar as informações.");
          }
        }
      }
      
      fetchTransactions()
    }, [])

    return(
        <Container>
                <header>
                    <img src={logo_icon} alt="Logo icon" />
                </header>

                <main>

                    <h1>
                        Resultados:

                        <button className="exit" onClick={handleSignOut}>
                            <TbDoorExit/> Sair
                        </button>
                    </h1>

                    <div className="results">
                        <Transactions transactions={transactions}/>
                    </div>
                </main>
                
                <section>
                    <div className="total">
                        <p>{`Total: ${(total)}`}</p>
                    </div>
                    <Button title="Novo cadastro" onClick={handleBack}></Button>
                </section>
        </Container>
    );
}