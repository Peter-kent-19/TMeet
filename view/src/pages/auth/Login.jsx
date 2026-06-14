import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CircleCheckbox() {
  return (
    <div className="flex justify-center items-center min-h-[30px]">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-full accent-slate-800"
        />
        <span>I'm the Principal</span>
      </label>
    </div>
  );
}


export default function Login() {
    useEffect(() => {
        alert('hi')
    },[]);
    
    return (
        <div>
            <h1 className="pt-5 text-5xl logo text-center text-blue-500">
                TMeet
            </h1>
            <p className="text-slate-400 text-center">
                Found by Peter Kent 
            </p>
            <p className="text-3xl font-extrabold text-slate-500 text-center py-5 my-5">
                Welcome Back!
            </p>

            <div className="form p-5 mt-5 bg-gray-100 [border-radius:50px]">
                <p className="text-center text-2xl font-extrabold text-slate-500 py-5">
                    Login
                </p>

                <CircleCheckbox />
                
                <form>
                    <input className="my-5 border w-full rounded-[20px] p-3" placeholder="Email..." type="text" />
                    <input className="my-5 border w-full rounded-[20px] p-3" placeholder="Password..." type="password" />
                    
                    <p className="text-blue-400 text-center my-5">
                        <Link to='/auth/forg?'>
                            Forgot Passwords?
                        </Link>
                    </p>
                    
                    <button className="bg-slate-800 w-full p-5 mt-5 text-white rounded-[20px]">
                        Login Now
                    </button>
                    
                    <p className="text-blue-400 text-center py-5">
                        <Link to='/auth/sign'>
                            Create Account? 
                            <span className="underline pl-2">
                                Sign in
                            </span>
                        </Link>
                    </p>
                </form>            
            </div>   
        </div>
    )
};