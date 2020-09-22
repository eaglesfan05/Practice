import React from "react";
import HeroBackground from "../nav/styling/background";
import Photo from "../nav/styling/images/barbershop.jpg"


function NavBar(props) {
    return (
        <>
       
            <nav className="navbar" style={{height: "200px", display: "block"}}>
                <div className ="card" style={{height: "100%", backroundImage: `url("../nav/styling/images/barbershop.jpg")`}}>
            {/* <HeroBackground backgroundImage={Photo} >
                <a className="navbar-brand" href="#">Navbar</a>
                </HeroBackground> */}
                {/* <img src="../barbershop.jpg" alt="barbeshop"/> */}
                </div>
            </nav>
          
              

       
       
         {/* </HeroBackground> */}
   
 

            
        </>
    )
}

export default NavBar;