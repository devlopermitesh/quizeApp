import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loadingpage from './Componets/Loadingpage.jsx';
import Errorpage from './Componets/Errorpage.jsx';
import { Provider } from 'react-redux';
const Intropage = lazy(() => import('./Componets/FirstScreen.jsx'));
const Aboutpage = lazy(() => import('./Componets/Aboutus.jsx'));
const LevelPage = lazy(() => import('./Componets/LevelScreen.jsx'));
const GameScreen = lazy(() => import('./Componets/GamScreen.jsx'));
const Results = lazy(() => import('./Componets/Results.jsx'));
import store from './Store/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router>
    <Suspense fallback={<Loadingpage />}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Intropage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="levels" element={<LevelPage />} />
          <Route path="gamescreen" element={<GameScreen />} />
          <Route path="results" element={<Results />} />
        </Route>
        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </Suspense>
  </Router>
  </Provider>
);
