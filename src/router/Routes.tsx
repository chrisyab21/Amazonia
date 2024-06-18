import { RouteObject } from "react-router-dom";
import { HomePage } from "../components/HomePage";



export const routes:RouteObject[] = [{

    path:'/',
    element: <HomePage/>,
    children: [{
        
    }]

}] 