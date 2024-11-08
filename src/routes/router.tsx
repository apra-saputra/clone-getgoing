import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/features/shared/components/layout/Mainlayout";
import {
  ComingSoonPage,
  GetCity,
  Home,
  NotFoundPage,
  ProfileGetGuide,
} from "./lazy";
import { comingSoonPath } from "./data";

const listComingSoon = comingSoonPath.map((path) => ({
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
