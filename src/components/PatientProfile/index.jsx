import { SlCalender } from "react-icons/sl";
import { PiGenderFemaleBold } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineInsurance } from "react-icons/ai";

import './index.css'

function PatientProfile({ patient }) {
  return (
    <div className="bg-white rounded-2xl w-[270px] h-[570px] p-6 flex flex-col">

      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-30 h-30 rounded-full object-cover image"
        />

        <h2 className="mt-5 text-2xl font-bold text-center">
          {patient.name}
        </h2>
      </div>

      {/* Patient Details */}
      <div className="mt-10 space-y-6">

        {/* Date of Birth */}
        <div className="flex items-center gap-4 profile-item">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <SlCalender />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Date Of Birth
            </p>

            <p className="text-sm font-semibold leading-5 break-words">
              {patient.date_of_birth}
            </p>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-4 profile-item">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <PiGenderFemaleBold />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Gender
            </p>

            <p className="text-sm font-semibold leading-5 break-words">
              {patient.gender}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 profile-item">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <MdOutlinePhone />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Contact Info
            </p>

            <p className="text-sm font-semibold leading-5 break-words">
              {patient.phone_number}
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="flex items-center gap-4 profile-item">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
           <MdOutlinePhone />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Emergency Contact
            </p>

            <p className="text-sm font-semibold leading-5 break-words">
              {patient.emergency_contact}
            </p>
          </div>
        </div>

        {/* Insurance */}
        <div className="flex items-start gap-4 profile-item">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
            <AiOutlineInsurance />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Insurance Provider
            </p>

            <p className="text-sm font-semibold leading-5 break-words">
              {patient.insurance_type}
            </p>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 button">
        <button
          className="
            w-[200px]
            bg-[#01F0D0]
            py-3
            rounded-full
            font-semibold
            text-sm
            hover:opacity-90
            transition
          "
        >
          Show All Information
        </button>
      </div>

    </div>
  );
}

export default PatientProfile;