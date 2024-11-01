import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/components/layout/Mainlayout";

const Home = lazy(() => import("./home"));
const ProfileGetGuide = lazy(() => import("./get-guide-profile"));
const GetCity = lazy(() => import("./get-city"));
const NotFoundPage = lazy(() => import("./NotFound"));
const ComingSoonPage = lazy(() => import("./ComingSoonPage"));

const paths = ["/login", "/penghargaan", "/dokumentasi", "/privasi", "/syarat-dan-ketentuan"];

const listComingSoon = paths.map((path) => ({
  path: path,
  element: <ComingSoonPage />,
}));

export const router = createBrowserRouter([
  {
    Component: Mainlayout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getguide/:id",
        element: <ProfileGetGuide />,
      },
      {
        path: "/getcity/:id",
        element: <GetCity />,
      },
      ...listComingSoon,
      { element: <NotFoundPage />, path: "*" },
    ],
  },
]);
