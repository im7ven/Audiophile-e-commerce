import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { EarphonePage } from "./pages/EarphonePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "speakers", element: <SpeakerPage /> },
      { path: "earphones", element: <EarphonePage /> },
    ],
  },
]);

export default router;
