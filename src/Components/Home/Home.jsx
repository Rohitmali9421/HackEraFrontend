import { useEffect } from "react";
import Baner from "./Baner";
import NewLaunches from "./NewLaunches/NewLaunches";
import Category from "./Category";
import Trending from "./Trending/Trending";
import Featured from "../Featured/Featured";

function Home() {
    
    useEffect(()=>{document.title = "BeatMart: Home";})
    return (

        <main>
            <Baner/>
            <NewLaunches/>
            <Featured/>
            <Category/>
            <Trending/>
          

           
            

        </main>
    )
}

export default Home;
