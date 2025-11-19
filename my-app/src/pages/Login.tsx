import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const URL = "https://crudcrud.com/api/4168be2080814b7c922775d723178c2d/usuarios";

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const resposta = await fetch(URL);
      const usuarios = await resposta.json();

      const encontrado = usuarios.find(
        (u: any) => u.email === user && u.senha === senha
      );

      if (encontrado) {
        navigate("/produtos");
      } else {
        setErro("Usuário ou senha incorretos!");
      }
    } catch (error) {
      setErro("Erro ao conectar com o servidor!");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <Error>{erro}</Error>}

        <button type="submit">Entrar</button>

        <CadastroText>
          Não tem conta? <Link to="/cadastro">Criar conta</Link>
        </CadastroText>
      </Form>
    </Container>
  );
}

/* ---------------- Styled ---------------- */

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
    font-weight: bold;
  }
  input {
    padding: 12px;
    border-radius: 6px;
    border: none;
  }

  button {
    padding: 12px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 17px;
    transition: .2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Error = styled.span`
  color: #dc3545;
  text-align: center;
`;

const CadastroText = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;
