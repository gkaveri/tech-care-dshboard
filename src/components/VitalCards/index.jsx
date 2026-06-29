function VitalCards({ latest }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {/* Respiratory Rate */}
      <div className="bg-[#E0F3FA] rounded-2xl p-4 text-left">
        <div className="flex justify-start mb-4">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevPoEhJVQGwoiTNHJAqWcnTnABArvHG3j35l5XvabfA&s=10"
            alt="Respiratory"
            className="w-8 h-8 object-contain"
          />
        </div>
        </div>

        <h3 className="text-sm text-gray-600">
          Respiratory Rate
        </h3>

        <p className="text-xl font-bold mt-2">
          {latest.respiratory_rate.value} bpm
        </p>

        <p className="text-sm mt-2 text-gray-500">
          {latest.respiratory_rate.levels}
        </p>
      </div>

      {/* Temperature */}
      <div className="bg-[#FFE6E9] rounded-2xl p-4 text-left">
       <div className="flex justify-start mb-4">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
          <img
            src="https://assets-v2.lottiefiles.com/a/e6ca3c2c-1153-11ee-80fb-db258b61eff1/OyheVCF5q8.png"
            alt="Temperature"
            className="w-8 h-8 object-contain vital-card-image"
          />
        </div>
        </div>

        <h3 className="text-sm text-gray-600">
          Temperature
        </h3>

        <p className="text-xl font-bold mt-2">
          {latest.temperature.value}°F
        </p>

        <p className="text-sm mt-2 text-gray-500">
          {latest.temperature.levels}
        </p>
      </div>

      {/* Heart Rate */}
      
      <div className="bg-[#E0F3FA] rounded-2xl p-4 text-left">
        <div className="flex justify-start mb-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <img
              src="https://img.freepik.com/premium-psd/3d-red-heart-with-cardio-line-symbol-icon-aid-donation-medical-healthcare-laboratory-logo-concept_81863-11676.jpg"
              alt="Respiratory"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

          <h3 className="text-sm text-gray-600">Heart Rate</h3>

          <p className="text-2xl font-bold mt-2">
            {latest.heart_rate.value} bpm
          </p>

          <p className="text-sm mt-2 text-gray-500">
            {latest.heart_rate.levels}
          </p>
      </div>
    </div>
  );
}

export default VitalCards;