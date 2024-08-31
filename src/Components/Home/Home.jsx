import { useEffect } from "react";
import Baner from "./Baner";
import Category from "./Category";
import Landingpage from "./Landingpage";
import Trending from "./Trending";
function Home() {
    
    useEffect(()=>{document.title = "BeatMart: Home";})
    return (

        <main>
            <Baner/>
            {/* <Landingpage/> */}

          <Trending/>
          

           
            

        </main>
    )
}

export default Home;
