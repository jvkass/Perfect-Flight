import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { Game } from "pages/Game";

import './styles/global.scss'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
