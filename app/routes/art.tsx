import Category from "~/atomic/organisms/category";
import GoTo from "~/atomic/atoms/link";
import { Outlet } from "@remix-run/react";

export default function Art () {
    return (
        <Category>
            <Outlet />
            <GoTo url="ceramics" text="Ceramics"/>
        </Category>
    )
}