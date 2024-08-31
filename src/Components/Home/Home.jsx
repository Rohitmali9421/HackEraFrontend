import { useEffect } from "react";
import Baner from "./Baner";
<<<<<<< HEAD
import Tranding from "./Trending";
import Category from "./Category";
=======
import Landingpage from "./Landingpage";
import Footer from "../Footer/Footer";
import ProductCard from "../Product/ProductCard";
import Tranding from "./Tranding";
>>>>>>> a1bcd33f8d16c61084c6a651147af1dfadac493d

function Home() {
    
    useEffect(()=>{document.title = "BitKart: Home";})
    return (

        <main>
            <Baner/>
<<<<<<< HEAD
            <Tranding/>
            <Category/>
=======
            <Landingpage/>

          <Tranding/>
          

            <Footer/>
            
>>>>>>> a1bcd33f8d16c61084c6a651147af1dfadac493d

        </main>
    )
}

export default Home;
