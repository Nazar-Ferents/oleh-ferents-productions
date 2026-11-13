import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const MainLayout = () => {
    return (
        <div className={'flex flex-col min-h-screen bg-surface'}>
            <Header/>
            <main>

            <Outlet/>
            </main>
            <Footer/>

        </div>
    );
};

export default MainLayout;