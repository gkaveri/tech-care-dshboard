import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineSchedule, AiOutlineTransaction } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

function Header() {
  return (
    <header className="bg-white rounded-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-[28px] font-bold text-[#072635]">Tech.Care</h2>
      </div>

      <nav className="flex items-center gap-6 text-[#072635] font-medium text-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          <IoHomeOutline size={18} />
          <span>Overview</span>
        </div>
        <div className="flex items-center gap-1 bg-[#01F0D0] px-4 py-2 rounded-full cursor-pointer">
          <MdOutlinePeopleAlt size={18} />
          <span className="font-semibold">Patients</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <AiOutlineSchedule size={18} />
          <span>Schedule</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FiMessageSquare size={18} />
          <span>Message</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <AiOutlineTransaction size={18} />
          <span>Transactions</span>
        </div>
      </nav>

      <div className="flex items-center gap-2">
        <div>
          <h4 className="text-sm font-semibold text-[#072635]">Dr. Bruce Simmons</h4>
          <p className="text-xs text-gray-500">General Practitioner</p>
        </div>
        <button className="text-xl">⚙️</button>
        <button className="text-xl">⋮</button>
      </div>
    </header>
  );
}

export default Header;