import {Outlet} from "react-router-dom";
import './BaseLayout.scss'
import {Header} from "@/widgets/header";
import {Suspense} from "react";
import {PageLoadingSkeleton} from "@/widgets/loader/PageLoadingSkeleton";

function BaseLayout() {

    return (
        <div className="base-layout">
            <Header/>
            <div className="base-layout__wrapper wrapper">
                <Suspense fallback={<PageLoadingSkeleton/>}>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}

export default BaseLayout
