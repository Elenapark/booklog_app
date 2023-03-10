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
import NewBookLogForm from "./pages/NewBookLogForm";
import EditBookLogForm from "./pages/EditBookLogForm";
import ProtectedRoute from "./pages/ProtectedRoute";

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
        path: "/books/recommended/:bookTitle",
        element: <RecommendedDetail />,
      },
      {
        path: "/books/wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booklog",
        element: (
          <ProtectedRoute>
            <BookLog />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booklog/:logId",
        element: (
          <ProtectedRoute>
            <BookLogDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booklog/new",
        element: <NewBookLog />,
      },
      {
        path: "/booklog/new/:logId",
        element: (
          <ProtectedRoute>
            <NewBookLogForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booklog/edit/:logId",
        element: (
          <ProtectedRoute>
            <EditBookLogForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </>
);
