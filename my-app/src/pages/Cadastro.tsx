import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  background: #111827;
  border-radius: 10px;
  gap: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:12px
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
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
      <h2>Cadastro</h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button type="submit">Cadastrar</Button>
      </Form>

      {msg && <p>{msg}</p>}
    </Container>
  );
}
