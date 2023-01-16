import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Recommended from "./pages/Recommended";
import RecommendedDetail from "./pages/RecommendedDetail";
import WishList from "./pages/WishList";
import BookLogDetail from "./pages/BookLogDetail";
import BookLog from "./pages/BookLog";
import NewBookLog from "./pages/NewBookLog";
import AuthProvider from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/books/recommended",
        element: <Recommended />,
      },
      {
        path: "/books/recommended/:bookId",
        element: <RecommendedDetail />,
      },
      {
        path: "/books/wishlist",
        element: <WishList />,
      },
      {
        path: "/booklog",
        element: <BookLog />,
      },
      {
        path: "/booklog/:logId",
        element: <BookLogDetail />,
      },
      {
        path: "/booklog/new",
        element: <NewBookLog />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
