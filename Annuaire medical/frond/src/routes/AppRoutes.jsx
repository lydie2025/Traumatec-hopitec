import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from '../pages/accueil/Accueil'
import Services from '../pages/services/Services'
import Presentation from "../pages/presentation/Presentation";
import Abonnes from "../pages/espaces abonnes/Abonnes";
import Tarifs from "../pages/tarifs/Tarifs";

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/abonnes" element={<Abonnes />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tarifs" element={<Tarifs />} />
      </Routes>
    </BrowserRouter>
  );
}
