import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
     
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header/>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="martillo.webp"
              description="Martillos de ebanista Bellota 8005"
              price="8.000"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="destornillador.jpg"
              description="Destornillador Pro STANLEY No.2 6 PULG 69180B"
              price="4.500"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="martillo1.png"
              description="Martillo para carpintería Alyco Orange HR"
              price="12.000"
              inventory="50"
            />
            {/* Card */}
            <Card
              img="taladro.jpg"
              description="TALADRO DE ROTACION INAL 3/8 12V 2 BAT STANLEY SCD121S2K-B3"
              price="25.000"
              inventory="12"
            />
            {/* Card */}
            <Card
              img="pala.jpg"
              description="Pala Redonda No. 2 Excavación 5560 Bellota"
              price="70.000"
              inventory="10"
            />
            {/* Card */}
            <Card
              img="pala1.webp"
              description="Pala Cuadrada Pequeña Tramontina, Mango De 45 Cm | Bonaparte"
              price="40.000"
              inventory="17"
              
            />
            {/* Card */}
            <Card
              img="clavo1.jpeg"
              description="Caja de puntillas con Cabeza 2pg 500g"
              price="10.200"
              inventory="30"
            />
            {/* Card */}
            <Card
              img="clavo.jpg"
              description="Caja de puntillas de acero liso libra camejia"
              price="15.300"
              inventory="80"
            />
            {/* Card */}
            <Card
              img="bota.jpeg"
              description="Bota Plástica Vereda Talla 40"
              price="28.500"
              inventory="35"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
