import { useState, useEffect } from "react";

function Example () {
    const [count, setCount] = useState(0);

    useEffect (() =>{
        document.title = `Conteggio: ${count}`;
    }, [count]);
   // const handleClick = () => {
    //    setCount(count + 1);
     //   document.title = `Conteggio: ${count}`;
   // };

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}  

export default Example