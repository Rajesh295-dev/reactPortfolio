

import React, { useState } from "react";
import NavTabs from "../pages/NavTabs";
import Home from "../pages/Home/Home";
//import About from "../pages/About/About";
//import Resume from "./Resume/Resume";
//import Contact from "./contact/Contact";
//import Works from "../pages/Portfolio/Works";


//this will be use for to naviagte multiple pages
/*

 if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Works") {
      return <Works />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <Contact />;
    
*/

//since we this is a single page webiste there will be home page as a current page
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.


  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div >
      <div>

        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />



        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}

      </div >

    </div >
  );
}


