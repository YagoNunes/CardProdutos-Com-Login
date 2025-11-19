import styled from "styled-components";

interface CardProps {
  nome: string;
  preco: string;
  adicionado: boolean;
  onAdd: () => void;
}

export default function CardProduto({ nome, preco, adicionado, onAdd }: CardProps) {
  return (
    <Card>
      <h3>{nome}</h3>
      <p>{preco}</p>

      <Button adicionado={adicionado} onClick={onAdd}>
        {adicionado ? "Adicionado ✓" : "Adicionar"}
      </Button>
    </Card>
  );
}

/* ---------------- Styled ---------------- */

const Card = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  padding: 20px;
  border-radius: 12px;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button<{ adicionado: boolean }>`
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: .2s;
  
  background: ${({ adicionado, theme }) =>
    adicionado ? theme.colors.success : theme.colors.gray};

  &:hover {
    transform: scale(1.05);
  }
`;
