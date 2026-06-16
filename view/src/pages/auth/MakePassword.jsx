export default function MakePassword(){
    return (
        <div className="p-4">
            <button className="h-[50px] w-[50px] flex justify-center itrms-center text-gray-500 text-5xl bg-slate-300 rounded-[50%]">
                ‹
            </button>

            <p className="py-5 text-3xl">
                New Password
            </p>
            
            <p className="text-xl text-slate-500">
                Enter new Password
            </p>
            
            <div className="align-center">
                <input className="my-5 border w-full rounded-lg p-3" placeholder="New Password..." type="password" />            
                <input className="my-5 border w-full rounded-lg p-3" placeholder="Confirm Password..." type="password" />            
            </div>

            <button className="w-full bg-slate-800 text-white p-5 rounded-lg text-2xl text-center mt-[50px]">
                Finish
            </button>
        </div>
    )
}