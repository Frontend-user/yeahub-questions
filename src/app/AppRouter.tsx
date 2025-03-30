import {createBrowserRouter, RouteObject,} from "react-router-dom";
import QuestionsPage from "@/pages/QuestionsPage.tsx";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                path: "/questions",
                element: <QuestionsPage/>
            }
        ]
    }
]
const appRouter = createBrowserRouter(routes)

export default appRouter;