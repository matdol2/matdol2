import { Routes, Route } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Member />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/:name" element={<P.MemberDetail />} />
      <Route path="/:name/insert" element={<P.Insert />} />
    </Routes>
  );
}

export default App;
