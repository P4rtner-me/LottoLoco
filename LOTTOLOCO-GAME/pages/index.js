import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import Projects from '@/components/DigitalAgencyPortfolio/Projects';
import Footer from "@/components/_App/Footer";

const DigitalAgencyPortfolio = () => {

    return (
        <>
            <NavbarStyleSix />
            <MainBanner />
            <Projects />
            <Footer />
        </>
    )
}

export default DigitalAgencyPortfolio;