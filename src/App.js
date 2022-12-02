import { Routes, Route } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Member />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/:id" element={<P.MemberDetail />} />
    </Routes>
  );
}

export default App;
