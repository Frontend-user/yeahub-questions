import {createBrowserRouter, RouteObject,} from "react-router-dom";
import QuestionsPage from "../pages/QuestionsPage.tsx";
import App from "../App.tsx";

// type RouteDefinition = {
//     path: string;
//     element: JSX.Element;
//     children?: RouteDefinition[];
// }
const routes: RouteObject[] = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/questions",
                element: <QuestionsPage/>
            }
        ]
    }
]
const router = createBrowserRouter(routes)

export default router;