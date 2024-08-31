import { useEffect } from "react";
import Baner from "./Baner";
import Landingpage from "./Landingpage";
import Footer from "../Footer/Footer";
import ProductCard from "../Product/ProductCard";
import Tranding from "./Tranding";

function Home() {
    
    useEffect(()=>{document.title = "BitKart: Home";})
    return (

        <main>
            <Baner/>
            <Landingpage/>

          <Tranding/>
          

            {/* <Footer/> */}
            

        </main>
    )
}

export default Home;
