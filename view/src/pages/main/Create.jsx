import Header from '../../components/Header.jsx'

export default function Create() {
    return(
        <div className="bg-slate-100">
            <Header />
            <div className="p-5 grid gap-[10px]">
                <div className="border-slate-400 rounded-xl [box-shadow:0px_0px_5px_orange] h-[200px] flex justify-center items-center">Create Announcement</div>
                <div className="border-blue-400 rounded-xl [box-shadow:0px_0px_5px_blue] h-[200px] flex justify-center items-center">Create Meeting</div>
            </div>
        </div>
    )
}