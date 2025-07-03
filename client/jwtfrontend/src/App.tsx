import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import NotFound from "./UI/NotFound";
import Home from "./UI/Home";
import LoginPage from "./features/Auth/login/LoginPage";
import Registerpage from "./features/Auth/Register/Registerpage";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/account",
          children: [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <Registerpage />,
            },
            {
              path: "reset-password",
              element: <div>Reset Password</div>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
