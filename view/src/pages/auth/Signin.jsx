import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="pt-5 text-5xl logo text-center text-blue-500">
                TMeet
            </h1>
            <p className="text-slate-400 text-center">
                Found by Peter Kent 
            </p>
            <p className="text-3xl font-extrabold text-slate-500 text-center py-5 my-5">
                Get started 
            </p>

            <div className="form p-5 mt-5 bg-gray-100 [border-radius:50px]">
                <p className="text-center text-2xl font-extrabold text-slate-500 py-5">
                    Sign in
                </p>

                <CircleCheckbox />
                
                <form>
                    <input className="my-5 border w-full rounded-lg p-3" placeholder="Fullname eg: Odo Peter Chinedu" type="text" />
                    <input className="my-5 border w-full rounded-lg p-3" placeholder="Phone eg: 07000000000" type="phone" />
                    <input className="my-5 border w-full rounded-lg p-3" placeholder="Email eg: peter@gmail.com" type="email" />
                    
                    
                    <button className="bg-slate-800 w-full p-5 mt-5 text-white rounded-lg">
                        Continue »
                    </button>
                    
                    <p className="text-blue-400 text-center py-5">
                        <Link to='/auth/'>
                            Already a member?
                            <span className="underline pl-2">
                                Login
                            </span>
                        </Link>
                    </p>
                </form>            
            </div>   
        </div>
    )
};