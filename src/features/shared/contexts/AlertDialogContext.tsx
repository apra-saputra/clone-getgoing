import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

interface AlertDialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Mendefinisikan AlertDialogContext dengan tipe atau undefined
const AlertDialogContext = createContext<AlertDialogContextType | undefined>(
  undefined
);

interface AlertDialogProviderProps {
  children: ReactNode;
}

// AlertDialogProvider menggunakan tipe FC dan mengembalikan children
export const AlertDialogProvider: FC<AlertDialogProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// Custom hook untuk menggunakan AlertDialogContext
export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error("useAlertDialog harus digunakan dalam AlertDialogProvider");
  }
  return context;
};
