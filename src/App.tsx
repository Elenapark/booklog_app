import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import BookListProvider from "./context/BookListContext";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto h-[100vh]">
        <BookListProvider>
          <Outlet />
        </BookListProvider>
      </main>
    </>
  );
}

export default App;
