import Header from "../Components/Header";

export default function Carrinho() {
  return (
    <>
      <Header quantidade={0} />
      <h1 style={{ padding: "20px" }}>Seu Carrinho</h1>
      <p style={{ padding: "20px" }}>Em breve: lista de produtos adicionados.</p>
    </>
  );
}
