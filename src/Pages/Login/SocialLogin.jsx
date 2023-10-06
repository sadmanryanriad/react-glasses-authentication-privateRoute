import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate('/');

    const handleSocialLogin = media =>{
        media()
        .then(res=>{
            toast.success('log in successful');
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=> handleSocialLogin(googleLogin)} className="btn btn-neutral btn-sm">google</button>
            </div>
        </>
    );
};

export default SocialLogin;