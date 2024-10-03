import Button from "./button";

export default function ButtonContainer({oncount}){
    return(
    <div className="button-container">
       <Button type = "minus" oncount ={oncount}/>
       <Button type = "plus" oncount ={oncount}/>
    </div>
    );
 
}