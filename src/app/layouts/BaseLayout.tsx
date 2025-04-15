import {Outlet} from "react-router-dom";
import './BaseLayout.scss'
import {Header} from "@/widgets/header";

function BaseLayout() {

    return (
        <div className="base-layout">
            <Header/>
            <div className="base-layout__wrapper wrapper">
                <Outlet/>

            </div>
        </div>
    )
}

export default BaseLayout
