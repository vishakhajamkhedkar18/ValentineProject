import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValentinePage from "./pages/ValentinePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/valentine/:id" element={<ValentinePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
