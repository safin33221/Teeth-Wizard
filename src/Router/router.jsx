import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Routes/Home";
import AllTreatments from "../Routes/AllTreatments";
import Myappoinments from "../Routes/Myappoinments";
import Profie from "../Routes/Profie";
import Details from "../Routes/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch('/service.json')
                    const services = await servicesRes.json()


                    const feedBackRes = await fetch('/happyClients.json')
                    const FeedBack = await feedBackRes.json()

                    return { services, FeedBack }


                }
            },
            {
                path: '/AllTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/Myappoinments',
                element: <Myappoinments></Myappoinments>,

            },
            {
                path: '/Profie',
                element: <Profie></Profie>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    const dataRes = await fetch('/service.json')
                    const data = await dataRes.json()


                    const singleData = data.find(d => d.id == params.id)
                    
                    return singleData

                }
            }

        ]
    },
])

export default router;