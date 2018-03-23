
import { toast } from 'react-toastify';

//Show the message using toaster.
export function messageBox(msg)
{
    if (!toast.isActive())   
    {
        return( 

            toast.update(toast(msg,{autoClose:false}), 
            {
                 position: toast.POSITION.TOP_CENTER,
                 type: toast.TYPE.SUCCESS, autoClose:false
            })
    
        );
    }
    else
    {
        return null;
    }
}