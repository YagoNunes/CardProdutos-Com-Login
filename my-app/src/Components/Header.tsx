import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  quantidade: number;
}

export default function Header({ quantidade }: HeaderProps) {
  return (
    <Container>
      <h2>Minha Loja</h2>

      <nav>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho ({quantidade})</Link>
      </nav>
    </Container>
  );
}

/* ---------------- Styled ---------------- */

const Container = styled.header`
  background: #111827;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
