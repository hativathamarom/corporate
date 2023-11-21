import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Root from "./layouts/Root";
import BalnamPage from "./pages/balnam/BalnamPage"
import './App.css'
import HomePage from "./pages/HomePage";
import LotarPage from "./pages/lotar/LotarPage";
import OketzPage from "./pages/oketz/OketzPage";
import ThnihaHatasaPage from "./pages/thniha-hatasa/ThnihaHatasaPage";
import BetSeferYeriPage from "./pages/bet-sefer-yeri/BetSeferYeriPage";
import HaspakaHatasaPage from "./pages/haspaka-hatasa/HaspakaHatasaPage";
import OketzInfoPage from "./pages/oketz/info/OketzInfoPage";
import OketzVideoPage from "./pages/oketz/video/OketzVideoPage";
import LotarInfoPage from "./pages/lotar/info/LotarInfoPage";
import LotarVideoPage from "./pages/lotar/video/LotarVideoPage";
import BalnamInfoPage from "./pages/balnam/info/BalnamInfoPage";
import BalnamVideoPage from "./pages/balnam/video/BalnamVideoPage";
import BetSeferYeriInfoPage from "./pages/bet-sefer-yeri/info/BetSeferYeriInfoPage";
import BetSeferYeriVideoPage from "./pages/bet-sefer-yeri/video/BetSeferYeriVideoPage";
import ThnihaHatasaInfoPage from "./pages/thniha-hatasa/info/ThnihaHatasaInfoPage";
import ThnihaHatasaVideoPage from "./pages/thniha-hatasa/video/ThnihaHatasaVideoPage";
import HaspakaHatasaInfoPage from "./pages/haspaka-hatasa/info/HaspakaHatasaInfoPage";
import HaspakaHatasaVideoPage from "./pages/haspaka-hatasa/video/HaspakaHatasaVideoPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="balnam" element={<BalnamPage />}>
        <Route index element={<Navigate to="/balnam/info" />} />
        <Route path="info" element={<BalnamInfoPage />} />
        <Route path="video" element={<BalnamVideoPage />} />
      </Route>
      <Route path="lotar" element={<LotarPage />}>
        <Route index element={<Navigate to="/lotar/info" />} />
        <Route path="info" element={<LotarInfoPage />} />
        <Route path="video" element={<LotarVideoPage />} />
      </Route>
      <Route path="oketz" element={<OketzPage />}>
        <Route index element={<Navigate to="/oketz/info" />} />
        <Route path="info" element={<OketzInfoPage />} />
        <Route path="video" element={<OketzVideoPage />} />
      </Route>
      <Route path="bet-sefer-yeri" element={<BetSeferYeriPage />} >
        <Route index element={<Navigate to="/bet-sefer-yeri/info" />} />
        <Route path="info" element={<BetSeferYeriInfoPage />} />
        <Route path="video" element={<BetSeferYeriVideoPage />} />
      </Route>
      <Route path="thniha-hatasa" element={<ThnihaHatasaPage />} >
        <Route index element={<Navigate to="/thniha-hatasa/info" />} />
        <Route path="info" element={<ThnihaHatasaInfoPage />} />
        <Route path="video" element={<ThnihaHatasaVideoPage />} />
      </Route>
      <Route path="haspaka-hatasa" element={<HaspakaHatasaPage />}>
        <Route index element={<Navigate to="/haspaka-hatasa/info" />} />
        <Route path="info" element={<HaspakaHatasaInfoPage />} />
        <Route path="video" element={<HaspakaHatasaVideoPage />} />
      </Route>
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
