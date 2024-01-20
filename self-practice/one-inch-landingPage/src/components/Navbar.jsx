
const Navbar = () => {
  return (
        <>
            <div className="nav-container w-[800px] mt-5 p-2 mx-auto flex justify-center gap-10 items-center fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-20 backdrop-blur-md rounded-full">
                    <div className="logo">
                        <img src="/assets/logo.svg" alt="" />
                    </div>

                    <div className="nav-links-container">
                          <ul className="flex text-sm gap-10">
                            <li className="text-gray-400"><a href="">Products</a></li>
                            <li className="text-gray-400"><a href="">Developers</a></li>
                            <li className="text-gray-400"><a href="">Governance</a></li>
                            <li className="text-gray-400"><a href="">About</a></li>

                          </ul>
                    </div>

                    <div className="get-started-btn">
                          <button className="bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-full">Launch dApp</button>
                    </div>

            </div>
        </>
  )
}

export default Navbar