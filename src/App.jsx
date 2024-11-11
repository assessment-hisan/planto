import { IoSearch, IoPlayCircleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsBag } from "react-icons/bs";

import { IoIosStar } from "react-icons/io";
import './App.css'

function App() {
  // const plants = [
  //   {
  //     id: 1,
  //     name: 'For Small Decs Ai Plat',
  //     price: 'Rs. 599/-',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     imgSrc: 'plant2.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'For Fresh Decs Ai Plat',
  //     price: 'Rs. 579/-',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     imgSrc: 'plant1.png',
  //   },
  // ];

  return (
    <>
    <div className="min-h-screen w-full bg-primary px-5 md:px-10 home-background ">
      
      {/* Navbar */}
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10 w-8 md:h-12 md:w-10" />
          <p className="font-inter text-white font-bold text-lg md:text-xl">Planto.</p>
        </div>
        <div className="hidden md:flex gap-7">
          {['Home', 'Plants Type', 'More', 'Contact'].map((item) => (
            <p key={item} className="text-gray-300 cursor-pointer">{item}</p>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <IoSearch className="text-white text-lg md:text-xl cursor-pointer" />
          <BsBag className="text-white text-lg md:text-xl cursor-pointer" />
          <HiOutlineMenuAlt3 className="text-white text-lg md:text-xl cursor-pointer" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full flex justify-center">
          <div className="space-y-3 md:space-y-0">
          <div  className="w-full flex  flex-col gap-7 lg:flex-row items-center lg:items-start  mt-8 lg:mt-12 space-y-6 lg:space-y-0 lg:space-x-40">
         {/* Left Side Text */}
           <div className="flex flex-col space-y-4 ">
          <h1 className="text-4xl md:text-6xl font-inter font-semibold text-white/80 tracking-wide md:tracking-wider">Breath Natureal</h1>
          <p className="text-white/60 font-medium text-sm md:text-base max-w-xs md:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="text-white/60 hover:text-white/90 px-4 md:px-6 py-2 ring-1 ring-white/70 hover:ring-white rounded-xl">
              Explore
            </button>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 cursor-pointer">
              <IoPlayCircleOutline className="h-9 w-9 md:h-11 md:w-11" />
              <p className="text-sm md:text-base">Live Demo...</p>
            </div>
          </div>
          </div>

        {/* Right Side Plant Card */}
          <div className="glass-morph w-52 h-72 rounded-xl p-5 flex items-end justify-center relative">
            <img src="/plant1.png" alt="Calathea plant" className="absolute w-48 md:w-56 lg:w-64 -top-16" />
            <div className="absolute bottom-5 text-center">
              <p className="text-white/70 text-xs">Trendy House Plant</p>
              <h2 className="text-white/80 font-medium text-md">Calathea plant</h2>
              <button className="text-white/70 text-xs px-4 py-1 ring-1 ring-white/70 rounded-lg mt-2">
                Buy Now
              </button>
            </div>
         
          </div>
       </div>

        {/* User Review Section */}
      <div className="hidden lg:inline-block">
        <div className="glass-morph p-5 rounded-lg flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
            <div>
              <p className="text-white text-sm">Alena Patel</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-yellow-500 w-3 h-3" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-white/60 text-xs mt-3 max-w-[200px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>
        </div>
      </div>

      {/* trendy products */}
      <div className="py-20">
        <h1 className="font-inter font-semibold tracking-wide text-white text-center text-2xl py-10 md:p-10">Our Trendy Products</h1>
        <div className="space-y-16">
           <div className="lg:relative flex flex-col gap-3 lg:flex-row-reverse justify-between items-center glass-morph w-full  rounded-3xl px-7 py-3">
          <img src="/plant2.png" className="lg:absolute left-5 -top-1/4 w-56 h-56 object-contain" alt="" />
            {/* Text Content */}
            <div className="flex flex-col justify-center ml-6 space-y-2">
              <h2 className="font-inter font-semibold text-lg  text-white/90">For Small Decs Ai Plat</h2>
              <p className="hidden sm:block text-sm text-gray-200 max-w-md ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <p className="text-lg text-white/80 font-medium">Rs. 599/-</p>
              <div className="flex gap-3">
                <button className="inline-block text-white/60 hover:text-white/90 px-4 md:px-6 py-2 ring-1 ring-white/70 hover:ring-white rounded-xl">
                  Explore
                </button>
                <div className="border-2 rounded border-white/60 pt-2 px-2 ">
                  <BsBag className="text-white h-5 w-5"/>
                </div>
              </div>
            </div>
           </div>
           {/* plaint 2  */}
           <div className="lg:relative flex flex-col gap-3 lg:flex-row justify-between items-center glass-morph w-full  rounded-3xl px-7 py-3">
          <img src="/plant3.png" className="lg:absolute right-5 -top-1/4 w-56 h-56 object-contain" alt="" />
            {/* Text Content */}
            <div className="flex flex-col ml-6 space-y-2 text-left">
              <h2 className="font-inter text-lg  text-white/90">For Small Decs Ai Plat</h2>
              <p className="hidden sm:block text-sm text-gray-200 max-w-md ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <p className="text-lg text-white/80 font-medium">Rs. 599/-</p>
              <div className="flex gap-3">
                <button className="inline-block text-white/60 hover:text-white/90 px-4 md:px-6 py-2 ring-1 ring-white/70 hover:ring-white rounded-xl">
                  Explore
                </button>
                <div className="border-2 rounded border-white/60 pt-2 px-2 ">
                  <BsBag className="text-white h-5 w-5"/>
                </div>
              </div>
            </div>
           </div>
           </div>
      </div>

      

    </div>
  </div>
</div>
  {/* top selling products */}
  <div  className="bg-primary p-5 md:px-10 md:py-10">
        <h1 className="font-inter font-semibold tracking-wide text-white/80 text-center text-2xl ">Our Top Selling</h1>
        <div className="mt-20 flex flex-wrap justify-center gap-24 md:gap-6 md:gap-y-24">
           {/* card 1 */}
        <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/plant1.png" alt="Calathea plant" className="absolute w-48 md:w-56 lg:w-64 -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
        {/* card 2 */}
        <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/plant2.png" alt="Calathea plant" className="absolute w-48 md:w-56 lg:w-64 -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
        {/* card3 */}
        <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/cactus.png" width={120} alt="Calathea plant" className="absolute -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
           {/* card 4 */}
           <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/plant5.png" alt="Calathea plant" className="absolute w-40 -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
        {/* card 5 */}
        <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/plant6.png" alt="Calathea plant" className="absolute w-40 -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
        {/* card6 */}
        <div className="glass-morph w-52 h-72 rounded-3xl p-5 flex items-end justify-center relative">
            <img src="/plant3.png" alt="Calathea plant" className="absolute w-44 -top-16" />
            <div className="absolute bottom-0">
              <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white/80 font-medium text-lg">Calathea plant</h2>
              <p className="leading-none text-xs text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex justify-between items-center px-2">
                <h1 className="text-xl text-white/80">Rs. 359/-</h1>
                <BsBag className="h-5 w-5 text-white/80"/>
              </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  {/* customer review */}
  <div  className="bg-primary p-5 md:px-10 md:py-10 ">
        <h1 className="font-inter font-semibold tracking-wide text-white/80 text-center text-2xl ">Customer Review</h1>
        <div className="flex justify-center items-center gap-5 py-5 overflow-x-auto">
          <div className="inline-flex glass-morph p-5 rounded-lg  flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <div className="space-y-1">
                <p className="text-white text-sm">Alena Patel</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-500 w-3 h-3" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80 text-xs mt-3 max-w-[170px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>
          </div>
          <div className="inline-flex glass-morph p-5 rounded-lg  flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <div className="space-y-1">
                <p className="text-white text-sm">Alena Patel</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-500 w-3 h-3" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80 text-xs mt-3 max-w-[170px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>
          </div>
          <div className="inline-flex glass-morph p-5 rounded-lg  flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <div className="space-y-1">
                <p className="text-white text-sm">Alena Patel</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-500 w-3 h-3" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80 text-xs mt-3 max-w-[170px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>
          </div>
        </div>
   </div>    

    {/* footer */}
    <div className="w-full bg-secondary">
      <div className="flex flex-wrap gap-y-5 sm:justify-around lg:justify-between items-center py-5 px-10">
        {/* logo */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-10 w-8 md:h-12 md:w-10" />
            <p className="font-inter text-white font-bold text-lg md:text-xl">Planto.</p>
          </div>
          <p className="font-inter text-white/70 text-xs max-w-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {/* quick link */}
        <div className="text-white/80">
          <p className="text-white font-semibold">Quick link</p>
          <div className="space-y-2 text-white/70 text-xs py-2">
            <p>Home</p>
            <p>Type of Plants</p>
            <p>Contact</p>
            <p>Privacy</p>
          </div>
        </div>
        {/* news letter */}
        <div className=" space-y-2 md:space-y-6 ">
          <p className="text-white  font-semibold">For Every Update.</p>
          <div className="flex  border border-white px-2 py-1 rounded">
          <input type="text"  placeholder="Enter Email" className="bg-transparent"/>
          <button className="h-full w-full bg-white font-semibold text-primary px-2 py-1 rounded-md -mr-1">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

  
    </>
  )
}

export default App
