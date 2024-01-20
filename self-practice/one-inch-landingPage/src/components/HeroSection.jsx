
import Stats from './Stats';

const HeroSection = () => {

    const containerStyle = {
        backgroundImage : 'url("/assets/bg.png")'
        };

  return (
    <>
     <div className="relative bg-cover bg-center h-[92vh] flex flex-col items-center justify-center gap-6" style={containerStyle}>

            <div className="hero-image flex flex-col justify-center items-center gap-10 relative">
                <img className="w-[400px]" src="/assets/wallet-stake.png" alt="" />
            </div>

            <div className="hero-content mt-[-80px] text-center">
              <h1 className="text-white text-[72px] font-bold">One-stop access</h1>
              <p className="text-white text-[30px]">to decentralized finance</p>
            </div>

            <div className="action-btn-container flex justify-between items-center gap-5">
              <button className="bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-full">Launch dApp</button>
              <button className="bg-gray-500 bg-opacity-15 border text-white font-medium text-sm px-4 py-2 rounded-full">Get it on Google</button>
              <button className="bg-gray-500 bg-opacity-15 border text-white font-medium text-sm px-4 py-2 rounded-full">Get it on App Store</button>
            </div>
     </div>

     <Stats/>
      
        
    </>
     
  )
}

export default HeroSection