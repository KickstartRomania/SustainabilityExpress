import { createRoot } from "react-dom/client";
import 'react-international-phone/style.css'; // Load library CSS FIRST
import App from "./App.tsx";
import "./index.css"; // Our overrides come AFTER

createRoot(document.getElementById("root")!).render(<App />);
