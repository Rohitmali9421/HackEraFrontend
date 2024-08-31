import { useEffect } from "react";
import Baner from "./Baner";
import Trending from "./Trending";
import Category from "./Category";
import Landingpage from "./Landingpage";
function Home() {
    
    useEffect(()=>{document.title = "BeatMart: Home";})
    return (

        <main>
            <Baner/>
            <Landingpage/>

          <Trending/>
          

           
            

        </main>
    )
}

export default Home;
