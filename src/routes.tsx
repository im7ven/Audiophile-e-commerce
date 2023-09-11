import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { EarphonePage } from "./pages/EarphonePage";
import { HeadphonePage } from "./pages/HeadphonePage";
import { Yx1Earphone } from "./pages/Yx1Earphone";
import { Xx99MarkIHeadphone } from "./pages/Xx99MarkIHeadphone";
import { Xx99MarkIIHeadphone } from "./pages/Xx99MarkIIHeadphone";
import { Xx59Headphone } from "./pages/Xx59Headphone";
import { Zx9Speaker } from "./pages/Zx9Speaker";
import { Zx7Speaker } from "./pages/Zx7Speaker";
import { CartContextProvider } from "./context/CartContext";
import { CheckOutPage } from "./pages/CheckOutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartContextProvider>
        <Layout />
      </CartContextProvider>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "speakers", element: <SpeakerPage /> },
      { path: "earphones", element: <EarphonePage /> },
      { path: "headphones", element: <HeadphonePage /> },
      { path: "checkout", element: <CheckOutPage /> },
      { path: "earphones/yx1wireless", element: <Yx1Earphone /> },
      { path: "headphones/xx99markI", element: <Xx99MarkIHeadphone /> },
      { path: "headphones/xx99markII", element: <Xx99MarkIIHeadphone /> },
      { path: "headphones/xx59", element: <Xx59Headphone /> },
      { path: "speakers/zx9", element: <Zx9Speaker /> },
      { path: "speakers/zx7", element: <Zx7Speaker /> },
      { path: "/yx1", element: <Yx1Earphone /> },
      { path: "/xx99markII", element: <Xx99MarkIIHeadphone /> },
      { path: "/xx99markI", element: <Xx99MarkIHeadphone /> },
      { path: "/xx59", element: <Xx59Headphone /> },
      { path: "/zx9", element: <Zx9Speaker /> },
      { path: "/zx7", element: <Zx7Speaker /> },
    ],
  },
]);

export default router;
