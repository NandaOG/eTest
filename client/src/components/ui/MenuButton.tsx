export default function MenuButton() {
  return (
    <button 
      className="bg-[#BF4000] text-white px-5 sm:px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#002440] transition-colors duration-300 ease-in-out cursor-pointer"
    >
      <span>Menu</span>
      <div className="flex flex-col space-y-1">
        <div className="w-6 h-[3px] bg-white rounded-md"></div>
        <div className="w-4 h-[3px] bg-white rounded-md"></div>
        <div className="w-6 h-[3px] bg-white rounded-md"></div>
      </div>
    </button>
  );
}
