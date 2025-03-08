import { DivideIcon } from "@heroicons/react/24/solid";
import SideNavigation from "../_components/SideNavigation";

export default function Layout({children}) {
    return (
        <div className="grid grid-cols-[12rem_1fr] h-full gap-12 ">
            <SideNavigation />
            <div>{children}</div>
        </div>
    )
}