import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";

export default function DefaultLayout() {
    return (

        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
}