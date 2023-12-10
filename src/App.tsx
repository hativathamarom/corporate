import {
  createRoutesFromElements,
  createHashRouter,
  // createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./layouts/Root";
import BalnamPage from "./pages/balnam/BalnamPage"
import './App.css'
import HomePage from "./pages/marom/HomePage";
import LotarPage from "./pages/lotar/LotarPage";

import ThnihaHatasaPage from "./pages/thniha-hatasa/ThnihaHatasaPage";
import BetSeferYeriPage from "./pages/bet-sefer-yeri/BetSeferYeriPage";
import HaspakaHatasaPage from "./pages/haspaka-hatasa/HaspakaHatasaPage";

import OketzPage from "./pages/oketz/OketzPage";
import OketzInfoPage from "./pages/oketz/info/OketzInfoPage";
import OketzVideoPage from "./pages/oketz/video/OketzVideoPage";
import OketzArticlesPage from "./pages/oketz/article/OketzArticlesPage";

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
import SideMenuContextProvider from "./contexts/SideMenuContext";
import MobileImageSlider from "./components/image-slider/MobileImageSlider";
import OketzYizkorPage from "./pages/oketz/yizkor/OketzYizkorPage";
import ThnihaHatasaYizkorPage from "./pages/thniha-hatasa/yizkor/ThnihaHatasaYizkorPage";
import LotarYizkorPage from "./pages/lotar/yizkor/LotarYizkorPage";

import BalnamYizkorPage from "./pages/balnam/yizkor/BalnamYizkorPage"
import HaspakaHatasaYizkorPage from "./pages/haspaka-hatasa/yizkor/HaspakaHatasaYizkorPage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="oketz" element={<OketzPage />}>
        <Route index element={<OketzInfoPage />} />
        <Route path="video" element={<OketzVideoPage />} />
        <Route path="articles" element={<OketzArticlesPage />} />
        <Route path="yizkor" element={<OketzYizkorPage />} />
      </Route>
      <Route path="lotar" element={<LotarPage />}>
        <Route index element={<LotarInfoPage />} />
        <Route path="video" element={<LotarVideoPage />} />
        <Route path="yizkor" element={<LotarYizkorPage />} />
      </Route>
      <Route path="balnam" element={<BalnamPage />}>
        <Route index element={<BalnamInfoPage />} />
        <Route path="video" element={<BalnamVideoPage />} />
        <Route path="yizkor" element={<BalnamYizkorPage />} />
      </Route>
      <Route path="bet-sefer-yeri" element={<BetSeferYeriPage />} >
        <Route index element={<BetSeferYeriInfoPage />} />
        <Route path="video" element={<BetSeferYeriVideoPage />} />
      </Route>
      <Route path="thniha-hatasa" element={<ThnihaHatasaPage />} >
        <Route index element={<ThnihaHatasaInfoPage />} />
        <Route path="video" element={<ThnihaHatasaVideoPage />} />
        <Route path="yizkor" element={<ThnihaHatasaYizkorPage />} />
      </Route>
      <Route path="haspaka-hatasa" element={<HaspakaHatasaPage />}>
        <Route index element={<HaspakaHatasaInfoPage />} />
        <Route path="video" element={<HaspakaHatasaVideoPage />} />
        <Route path="yizkor" element={<HaspakaHatasaYizkorPage />} />
      </Route>
      <Route path="image" element={<MobileImageSlider/>} ></Route>
    </Route>
  )
)


function App() {

  return (
    <SideMenuContextProvider>
      <RouterProvider router={router} />
    </SideMenuContextProvider>
  )
}

export default App
