import { CoursesPages } from "./pages/CoursesPages";
import { HeaderPages } from "./pages/HeaderPages";
import { SignInPages } from "./pages/SignInPages";

export const navbar = [
  {
    path: "/courses",
    title: "Kurslar",
    id: 1,
    element: <HeaderPages/>
  },
  {
    path: "/jobs",
    title: "Kasblar",
    id: 2,
    element: <CoursesPages/>
  },
  {
    path: "/signin",
    title: "Kirish",
    id: 3,
    element: <SignInPages/>
  }
];
