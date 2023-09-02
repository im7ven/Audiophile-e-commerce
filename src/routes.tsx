import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { SpeakerPage } from "./pages/SpeakerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "speakers", element: <SpeakerPage /> },
    ],
  },
]);

export default router;
