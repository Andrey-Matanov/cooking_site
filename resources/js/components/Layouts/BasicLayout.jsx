import React from "react";
import RootRouter from "../../pages/RootRouter";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header/Header";

const BasicLayout = () => {
    return (
        <>
            <main>
                <Header />
                <div className="wrapper">
                    <RootRouter />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BasicLayout;
