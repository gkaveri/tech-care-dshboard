import { IoMdDownload } from "react-icons/io";
import './index.css'

function LabResults({ results = [] }) {
  return (
    <div className="bg-white rounded-2xl h-[250px] overflow-y-auto w-full text-left p-3">
      <h2 className="text-xl font-bold title">
        Lab Results
      </h2>

      {results.length === 0 ? (
        <p className="text-sm text-gray-500">No lab results available.</p>
      ) : (
        <div className="space-y-3">
          {results.map((result, index) => {
            const label =
              typeof result === "string"
                ? result
                : result.name || result.test || "Lab Result";
            const subtitle =
              typeof result === "string"
                ? ""
                : result.value || result.status || result.result || "";

            return (
              <div
                key={index}
                className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg title cursor-pointer"
              >
                <div>
                  <div className="font-medium">{label}</div>
                  {subtitle ? (
                    <div className="text-sm text-gray-500">{subtitle}</div>
                  ) : null}
                </div>

                <span className="text-lg"><IoMdDownload /></span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LabResults;
