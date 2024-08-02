
const Navbar = () => {
    return (
      <>
        <div className="flex px-20 justify-between h-[10vh] items-center">
          <div className="text-4xl font-bold "> <span className= "text-white-500 ">C</span>alendar</div>
  
          <ul className="flex  justify-between gap-12">
            <li className="font-bold text-[20px] flex px-1 rounded-full justify-center h-[50px] items-center hover:bg-blue-400 transition-all  duration-1000 w-[80px]"><a href="">Home</a></li>
            <li className="font-bold text-[20px] flex px-1 rounded-full justify-center h-[50px] items-center hover:bg-blue-400 transition-all duration-1000 w-[80px]"><a href="">About</a></li>
            <li className="font-bold text-[20px] flex px-1 rounded-full justify-center h-[50px] items-center hover:bg-blue-400 transition-all duration-1000 w-[95px]"><a href="">Contact</a></li>
          </ul>
  
          <button className="font-bold text-[15px] h-[60px] items-center p-2 rounded-full justify-center  hover:bg-blue-400 transition-all duration-1000 w-[100px] ">
            Download More
          </button>
        </div>
      </>
    );
  };
  
  export default Navbar;
