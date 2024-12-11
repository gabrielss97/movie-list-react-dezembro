import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Contato from "./pages/Contato";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contato />
  </StrictMode>
);
