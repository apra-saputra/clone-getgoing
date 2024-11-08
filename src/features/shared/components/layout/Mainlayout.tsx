import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import AlertDialogComponent from "../commons/AlertComponent";
import { Suspense } from "react";
import SplashScreen from "./SplashScreen";
import useAutoScrollUp from "@/features/shared/hooks/useAutoScrollUp";

const Mainlayout = () => {
  useAutoScrollUp();
  return (
    <>
      {/* <header className="w-full"> */}
      <Navbar />
      {/* </header> */}
      {/* <main className="w-full flex flex justify-center"> */}

      <Suspense fallback={<SplashScreen />}>
        <main className="w-full min-h-screen flex flex-col items-center ">
          <AlertDialogComponent />
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Mainlayout;
