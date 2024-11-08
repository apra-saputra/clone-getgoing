import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { AlertDialogProvider } from "./features/shared/contexts/AlertDialogContext";

function App() {
  return (
    <AlertDialogProvider>
      <RouterProvider router={router} />
    </AlertDialogProvider>
  );
}

export default App;
