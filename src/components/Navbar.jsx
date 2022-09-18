import { Link, Outlet } from "react-router-dom";
import './stylezoo.css';


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
         <li>
            <Link to="/">Principal</Link>
          </li>
          {/* <li>
            <Link to="/home">Home</Link>
          </li> */}
          <li>
            <Link to="/animals">Galeria de Animais</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div id="box">
            <h1>Uma história para fazer parte da sua</h1>
      
            <p>O Zoo foi inaugurado em 1958. De lá para cá, nos reinventamos colocando a conservação da diversidade de vidas e o respeito por todos em primeiro lugar. Afinal, também é nosso propósito deixarmos boas pegadas na sua história.</p>

            <strong><p> POR SER UM CENTRO DE CONSERVAÇÃO DA BIODIVERSIDADE, NOSSAS AÇÕES SÃO REALIZADAS SOBRE QUATRO PILARES:</p></strong>
           <p> Pesquisa científica em diversas áreas;</p>
            <p>Educação para conservação;</p>
            <p>Conservação de espécies ameaçadas de extinção;</p>
            <p> Lazer como forma de conexão das pessoas com a natureza.</p>
            
        </div>
        </main>
      <Outlet />
      <p>Design and developed by Andressa Lira</p>
    </>
  );
}

export default Navbar;