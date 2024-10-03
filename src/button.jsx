import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Button({type, oncount}){
    const handleClick = (event) => {
        oncount((prev) => {
            if(type === "minus"){
                const newCount = prev -1;
                if(newCount < 0) return 0;
                return newCount;
            }else{
                return prev + 1;
            }
        });
        event.currentTarget.blur();
    };
    return (<button 
        onClick={handleClick} 
        className="count-btn">
         {
            type === "minus" ? (<MinusIcon className="count-btn-icon"/>) :
            (<PlusIcon className="count-btn-icon"/>)
         }
        </button>
    );
}