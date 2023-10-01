import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = media =>{
        media()
        .then(res=>{
            toast.success('log in successful');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=> handleSocialLogin(googleLogin)} className="btn btn-primary btn-circle btn-outline">google</button>
            </div>
        </>
    );
};

export default SocialLogin;