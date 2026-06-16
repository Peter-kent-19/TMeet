export default function EmailVerifivation() {
    return (
        <div className="p-4">
            <button className="h-[50px] w-[50px] flex justify-center itrms-center text-gray-500 text-5xl bg-slate-300 rounded-[50%]">
                ‹
            </button>

            <p className="py-5 text-3xl">
                Please verify your Email
            </p>
            
            <p className="text-xl text-slate-500">
                Enter the verification code sent to your email
            </p>

            <p className="text-slate-500 py-5">
                peter@gmail.com
            </p>
            
            <div className="align-center">
                <input className="w-[210px] rounded-lg text-2xl text-center py-4 [letter-spacing:20px] bg-slate-200" placeholder="------" type="number" />
            </div>

            <button className="w-full bg-slate-800 text-white p-5 rounded-lg text-2xl text-center mt-[50px]">
                Verify
            </button>
        </div>
    )
}