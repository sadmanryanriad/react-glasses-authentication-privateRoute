import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const navigate = useNavigate('/');

    const {login} = useContext(AuthContext);

    const handleForm = e =>{


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        login(email,password)
        .then(()=>{
            toast.success('log in successful');
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleForm}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div type='submit' className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                                <label className="label">
                                    New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                                </label>
                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;