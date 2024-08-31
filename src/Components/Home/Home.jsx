import { useEffect } from "react";
import Baner from "./Baner";
import NewLaunches from "./NewLaunches/NewLaunches";
import Category from "./Category";
import Trending from "./Trending/Trending";

function Home() {
    
    useEffect(()=>{document.title = "BeatMart: Home";})
    return (

        <main>
            <Baner/>
            <NewLaunches/>
            <Category/>
            <Trending/>
          

           
            

        </main>
    )
}

export default Home;
