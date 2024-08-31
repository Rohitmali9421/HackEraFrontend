import { useEffect } from "react";
import Baner from "./Baner";
import Tranding from "./Trending";
import Category from "./Category";

function Home() {
    
    useEffect(()=>{document.title = "BitKart: Home";})
    return (

        <main>
            <Baner/>
            <Tranding/>
            <Category/>

        </main>
    )
}

export default Home;
