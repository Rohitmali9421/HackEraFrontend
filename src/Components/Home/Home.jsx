import { useEffect } from "react";
import Baner from "./Baner";

function Home() {
    
    useEffect(()=>{document.title = "BitKart: Home";})
    return (

        <main>
            <Baner/>
        </main>
    )
}

export default Home;
