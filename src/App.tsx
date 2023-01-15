import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
