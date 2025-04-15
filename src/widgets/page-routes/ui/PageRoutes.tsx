import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {useLocation} from "react-router-dom";
import { ROUTE_NAMES} from "@/shared/constats/constats.ts";
import {UiRoute} from "@/shared/types/types.ts";

export const PageRoutes = () => {

    const location = useLocation()
    const definePageRoutes = () => {
        const pageRoutes: UiRoute[] = []
        const fullPathname = location.pathname
        const pathsArr = fullPathname.split('/')
        const currentPageName = pathsArr[pathsArr.length-1]
        pathsArr.forEach((pathName: string, index) => {
            let name = pathName || '/'
            pageRoutes.push({
                id: index + 1,
                to: ROUTE_NAMES[name].to,
                name: ROUTE_NAMES[name].name,
                isActive: currentPageName === name
            })
        })
        console.log(pageRoutes,'page')
        return pageRoutes
    }

    return (
        <div>
            <UiRoutes routes={definePageRoutes()}/>
        </div>
    );
};

