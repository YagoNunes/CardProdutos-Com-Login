import CardProduto from "../Components/CardProduto";

import { useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";

interface Produto {
  id: number;
  nome: string;
  preco: string;
}

export default function Produtos() {
  const [carrinho, setCarrinho] = useState<number[]>([]);

  const produtos: Produto[] = [
    { id: 1, nome: "Tênis Esportivo", preco: "R$ 199,90" },
    { id: 2, nome: "Camisa Premium", preco: "R$ 79,90" },
    { id: 3, nome: "Relógio Smart", preco: "R$ 249,90" },
    { id: 4, nome: "Boné Adidas", preco: "R$ 89,90" },
  ];

  function adicionarAoCarrinho(produtoId: number) {
    if (!carrinho.includes(produtoId)) {
      setCarrinho([...carrinho, produtoId]);
    }
  }

  return (
    <>
      <Header quantidade={carrinho.length} />

      <Grid>
        {produtos.map((p) => (
          <CardProduto
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            adicionado={carrinho.includes(p.id)}
            onAdd={() => adicionarAoCarrinho(p.id)}
          />
        ))}
      </Grid>
    </>
  );
}

/* ---------------- Styled ---------------- */

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
  padding: 20px;
`;

