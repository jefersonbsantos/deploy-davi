import React from "react";
import { createRoot } from "react-dom/client";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalProvider } from "../providers/GlobalContext/GlobalContext";

const serverUrl = "http://localhost:5000";
console.log(serverUrl);

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
        <Footer />
      </GlobalProvider>
    </>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
