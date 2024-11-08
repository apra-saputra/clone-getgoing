import { lazy } from "react";

const Home = lazy(() => import("../features/home"));
const ProfileGetGuide = lazy(() => import("../features/get-guide-profile"));
const GetCity = lazy(() => import("../features/get-city"));
const NotFoundPage = lazy(() => import("../features/NotFound"));
const ComingSoonPage = lazy(() => import("../features/ComingSoonPage"));

export {Home, ProfileGetGuide, GetCity, NotFoundPage, ComingSoonPage}