import React from "react";
import RootRouter from "../../pages/RootRouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
