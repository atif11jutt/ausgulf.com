import React from "react"
import GoTop from "./_App/GoTop"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, classWrapper }) => {
  return (
    <div className={`page-wrapper ${classWrapper}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Footer />
    </div>
  )
}
export default Layout