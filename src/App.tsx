import { router } from "./pages/routes";
import { RouterProvider } from "react-router-dom";
import { AlertDialogProvider } from "./contexts/AlertDialogContext";

function App() {
  return (
    <AlertDialogProvider>
      <RouterProvider router={router} />
    </AlertDialogProvider>
  );
}

export default App;
