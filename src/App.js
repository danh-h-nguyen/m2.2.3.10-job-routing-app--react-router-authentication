import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";
import { AuthProvider } from "./context/AuthContext";

// Tạo router từ routes
const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
