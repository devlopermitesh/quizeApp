import { StrictMode,Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom'
import Loadingpage from './Componets/Loadingpage.jsx'

const Intropage = lazy(() => import('../src/Componets/FirstScreen.jsx'));
const Aboutpage=lazy(()=>import('../src/Componets/Aboutus.jsx'));
const LevelPage=lazy(()=>import('../src/Componets/LevelScreen.jsx'))
const GameScreen=lazy(()=>import('../src/Componets/GamScreen.jsx'))
const Results=lazy(()=>import('../src/Componets/Results.jsx'));
const route=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Suspense fallback={<Loadingpage></Loadingpage>}><Intropage/></Suspense>,

       
      }
      ,{
        path:"/about",
        element:<Suspense fallback={<Loadingpage/>}>
<Aboutpage></Aboutpage>
        </Suspense>
      },
      {
        path:"/levels",
        element:<Suspense fallback={<Loadingpage/>}>
<LevelPage></LevelPage>
        </Suspense>
      },
      {
        path:"/gamescreen",
        element:<Suspense fallback={<Loadingpage/>}>
<GameScreen></GameScreen>
        </Suspense>
      },
      {
        path:"/results",
        element:<Suspense fallback={<Loadingpage/>}>
<Results></Results>
        </Suspense>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
<RouterProvider router={route}>
</RouterProvider>
)
