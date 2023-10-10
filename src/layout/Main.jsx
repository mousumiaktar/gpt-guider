import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Main;