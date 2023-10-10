export default () => {

    return (
        <div className="bg-black w-full h-full flex">
            <div className="menu bg-blue-600 h-full w-16 flex flex-col items-end  px-2">

                <div onClick={
                    () => {
                        document.querySelector('.menu').classList.toggle('w-96')
                        document.querySelector('.menu').classList.toggle('w-16')
                    }} className="btnMenu flex flex-col w-10 h-10 cursor-pointer my-2 bg-green-300">

                    <span className=" px-4 py-1 bg-white mt-1 rounded"></span>
                    <span className=" px-4 py-1 bg-white mt-1 rounded"></span>
                    <span className=" px-4 py-1 bg-white mt-1 rounded"></span>
                </div>

                <div className="my-10 bg-yellow-500 h-full w-full flex flex-col items-start ">
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                    <button className="bg-blue-500 py-5 w-full mt-1 hover:bg-blue-600">Home</button>
                </div>

            </div>

            <div className="bg-yellow-600 h-full w-full border-2 border-green-500 flex flex-col">
                <div className="header bg-slate-600 w-full text-white py-4 px-2 flex flex-row justify-end">
                   <div className="user p-2 bg-black w-11 h-11 rounded-full border-2 border-yellow-800">

                   </div>
                </div>
                <div className="body h-full w-full bg-white border-2 border-red-600">
                    body
                </div>
                <div className="footer bg-black text-slate-300 text-center py-4">
                    <p>footer &copy; </p>
                </div>
            </div>
        </div>
    )
}