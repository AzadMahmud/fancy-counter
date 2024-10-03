import { ResetIcon } from '@radix-ui/react-icons'
export default function Reset ({oncount}) {
  const onHandle = (event) => {
    oncount(0);
    event.currentTarget.blur();
  };
 
  return (
    <button 
    onClick={onHandle}
     className="reset-btn"><ResetIcon className='reset-btn-icon' /></button>
  )
}
