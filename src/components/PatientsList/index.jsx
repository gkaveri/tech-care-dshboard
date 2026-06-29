import './index.css';

function PatientsList({
  patients = [],
  selectedPatient,
  onSelectPatient,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 h-[850px] overflow-y-auto">
   <h2 className='patient'>Patients</h2>

      <div className="space-y-4 w-full">
        {patients.map((patient) => {
          const isSelected =
            selectedPatient?.name === patient.name;

          return (
            <button
              key={patient.name}
              type="button"
              onClick={() => onSelectPatient(patient)}
              className={`w-full min-h-[70px] text-left flex items-center gap-2 py-3 rounded-xl transition-all ${
                isSelected
                  ? "bg-[#D8FCF7]"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="img w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm font-bold truncate">
                  {patient.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PatientsList;