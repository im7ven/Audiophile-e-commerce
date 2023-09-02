import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { EarphonePage } from "./pages/EarphonePage";
import { HeadphonePage } from "./pages/HeadphonePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "speakers", element: <SpeakerPage /> },
      { path: "earphones", element: <EarphonePage /> },
      { path: "headphones", element: <HeadphonePage /> },
    ],
  },
]);

export default router;
