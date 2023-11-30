import { Header } from "components/Header";
import { Favoritos } from "pages/Favoritos";
import { Home } from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
