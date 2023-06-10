import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import MainLayout from "./layout/main.layout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
