import { SlCalender } from "react-icons/sl";
import { PiGenderFemaleBold } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineInsurance } from "react-icons/ai";
import './index.css'

const details = (patient) => [
  { icon: <SlCalender />, label: "Date Of Birth", value: patient.date_of_birth },
  { icon: <PiGenderFemaleBold />, label: "Gender", value: patient.gender },
  { icon: <MdOutlinePhone />, label: "Contact Info", value: patient.phone_number },
  { icon: <MdOutlinePhone />, label: "Emergency Contact", value: patient.emergency_contact },
  { icon: <AiOutlineInsurance />, label: "Insurance Provider", value: patient.insurance_type },
];

function PatientProfile({ patient }) {
  return (
    <div className="bg-white rounded-2xl w-[270px] h-[570px] p-6 flex flex-col">
      <div className="flex flex-col items-center">
        <img src={patient.profile_picture} alt={patient.name} className="w-30 h-30 rounded-full object-cover image" />
        <h2 className="mt-5 text-2xl font-bold text-center">{patient.name}</h2>
      </div>

      <div className="mt-10 space-y-6">
        {details(patient).map(({ icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 profile-item">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <p className="text-xs text-gray-500">{label}</p>
              <p className="text-sm font-semibold leading-5 break-words">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 button">
        <button className="w-[200px] bg-[#01F0D0] py-3 rounded-full font-semibold text-sm hover:opacity-90 transition">
          Show All Information
        </button>
      </div>
    </div>
  );
}

export default PatientProfile;