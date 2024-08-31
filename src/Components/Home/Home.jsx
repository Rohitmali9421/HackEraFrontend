import { useEffect } from "react";
import Baner from "./Baner";
import Tranding from "./Trending";
import Category from "./Category";
import Landingpage from "./Landingpage";
function Home() {
    
    useEffect(()=>{document.title = "BitKart: Home";})
    return (

        <main>
            <Baner/>
            <Landingpage/>

          <Tranding/>
          

           
            

        </main>
    )
}

export default Home;
