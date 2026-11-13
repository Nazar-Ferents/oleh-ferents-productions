import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import GalleryPage from "../pages/GalleryPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";


export const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
    children:[
            {index:true,element:<HomePage/>},
            {path:'gallery',element:<GalleryPage/>},
            {path:'about',element:<AboutPage/>},
        {path:'*',element:<PageNotFound/>}
        ]
},

])