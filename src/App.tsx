import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JokePage from "./pages/JokePage";
import InstructionsPage from "./pages/InstructionsPage";
import BranchesPage from "./pages/BranchesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joke/:studentId" element={<JokePage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
