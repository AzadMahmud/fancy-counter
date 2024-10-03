import { useEffect, useState } from "react";
import Counter from "./counter";
import Reset from "./reset";
import Title from "./Title";
import ButtonContainer from "./buttonContainer";


export default function Card() {
  const [count, oncount] = useState(0);
  useEffect(() => {
    const handleKey = (event) => {
      if(event.code === 'Space')
        oncount(count+1)
    };
    window.addEventListener('keydown' , handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [count]);
  return (
    <div className="card">
        <Title />
        <Counter count={count}/>
        <Reset oncount = {oncount}/>
        <ButtonContainer oncount = {oncount}/>
    </div>
  )
}
