import Api from "../../Services/Api";
import { toast } from "react-toastify";

interface newUser{
    nickname: string|number;
    email: string|number;
    password: string|number;
}
function createAccount({nickname, email, password}:newUser){
    Api.post("profile", {nickname, email, password}).then(()=>{
        toast.success("Function ended!")
    }).catch((error)=>{
        alert(error)
    })

}


export {createAccount}