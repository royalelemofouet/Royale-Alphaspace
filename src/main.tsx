
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Apod, ErrorMain, HomeLayout, Hubble, Landing, News, SingleHubble, Spacex, Webb } from './pages';
import { NewsPageLoader } from './pages/News';
import ErrorElement from './components/ErrorElement';
import { HubblePageLoader } from './pages/Hubble';
import { ApodPageLoader } from './pages/Apod';
import { WebbPageLoader } from './pages/Webb';
import { SpacexPageLoader } from './pages/Spacex';
import { LandingPageLoader } from './pages/Landing';
import { SingleHubblePageLoader } from './pages/SingleHubble';
import { LoadingScreen } from './components';

const router = createBrowserRouter([
  {
path: "/",
    element: <HomeLayout/>,
    errorElement: <ErrorMain />,
    // REMPLACEMENT ICI
    hydrateFallbackElement: <LoadingScreen/>, 
    children: [
  {index: true, element: <Landing/>, loader: LandingPageLoader, errorElement: <ErrorElement/>},
  {path: "news", element:<News/>, loader: NewsPageLoader, errorElement: <ErrorElement/> },

  {path: "webb", element:<Webb/>, loader: WebbPageLoader, errorElement: <ErrorElement/>},

  {path: "spacex",
     element:<Spacex/>, 
     loader: SpacexPageLoader, 
     errorElement: <ErrorElement/>},

  {path: "hubble", 
    element:<Hubble/>,
    loader: HubblePageLoader, 
    errorElement: <ErrorElement/>},

  {path: "apod", element:<Apod/>,  loader: ApodPageLoader, errorElement: <ErrorElement/>},
{
  path: "hubble/:id",
  element: <SingleHubble />,
  loader: SingleHubblePageLoader,
  errorElement: <ErrorElement />,
},
],
},
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>);
 