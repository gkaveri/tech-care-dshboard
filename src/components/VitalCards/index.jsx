const vitals = (latest) => [
  {
    bg: "bg-[#E0F3FA]",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevPoEhJVQGwoiTNHJAqWcnTnABArvHG3j35l5XvabfA&s=10",
    alt: "Respiratory",
    label: "Respiratory Rate",
    value: `${latest.respiratory_rate.value} bpm`,
    level: latest.respiratory_rate.levels,
  },
  {
    bg: "bg-[#FFE6E9]",
    img: "https://assets-v2.lottiefiles.com/a/e6ca3c2c-1153-11ee-80fb-db258b61eff1/OyheVCF5q8.png",
    alt: "Temperature",
    label: "Temperature",
    value: `${latest.temperature.value}°F`,
    level: latest.temperature.levels,
  },
  {
    bg: "bg-[#E0F3FA]",
    img: "https://img.freepik.com/premium-psd/3d-red-heart-with-cardio-line-symbol-icon-aid-donation-medical-healthcare-laboratory-logo-concept_81863-11676.jpg",
    alt: "Heart Rate",
    label: "Heart Rate",
    value: `${latest.heart_rate.value} bpm`,
    level: latest.heart_rate.levels,
  },
];

function VitalCards({ latest }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {vitals(latest).map(({ bg, img, alt, label, value, level }) => (
        <div key={label} className={`${bg} rounded-2xl p-4 text-left`}>
          <div className="flex justify-start mb-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <img src={img} alt={alt} className="w-8 h-8 object-contain" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600">{label}</h3>
          <p className="text-xl font-bold mt-2">{value}</p>
          <p className="text-sm mt-2 text-gray-500">{level}</p>
        </div>
      ))}
    </div>
  );
}

export default VitalCards;