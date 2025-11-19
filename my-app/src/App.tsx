import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}
