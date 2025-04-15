import {createRoot} from 'react-dom/client'
import appRouter from "./AppRouter.tsx";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "@/app/AppStore.ts";
import '@/shared/styles/index.scss'
import '@/shared/styles/global.scss'

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <Provider store={appStore}>
        <RouterProvider router={appRouter}>
        </RouterProvider>
    </Provider>
    // </StrictMode>,
)
