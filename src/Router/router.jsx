import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Routes/Home";
import AllTreatments from "../Routes/AllTreatments";
import Myappoinments from "../Routes/Myappoinments";
import Profie from "../Routes/Profie";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/service.json')
            },
            {
                path:'/AllTreatments',
                element:<AllTreatments></AllTreatments>
            },
            {
                path:'/Myappoinments',
                element:<Myappoinments></Myappoinments>
            },
            {
                path:'/Profie',
                element:<Profie></Profie>
            },
        ]
    }
])

export default router;