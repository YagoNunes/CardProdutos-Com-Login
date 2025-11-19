import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: #111827;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 12px;

  h2 {
    margin: 0 auto;
    font-size: 1.5rem;
    font-wigth: bold;
  }
  input{
    padding: 10px;
    font-size: 16px;
  }
  button{
    padding: 12px;
    background: #198754;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #157347;
    }
  }
`;

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const URL = "https://crudcrud.com/api/4168be2080814b7c922775d723178c2d/usuarios";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novoUsuario = { email, senha };

    try {
      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
      });

      setMsg("Usuário cadastrado com sucesso!");
      setTimeout(() => navigate("/"), 1500);

    } catch (error) {
      setMsg("Erro ao cadastrar.");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Form>

      {msg && <p>{msg}</p>}
    </Container>
  );
}
