function DiagnosticList({ diagnostics = [] }) {
  return (
    <div className="bg-white rounded-2xl p-6 mt-6 w-full h-[300px] overflow-y-auto text-left">
      <h2 className="text-xl font-bold mb-5 title">Diagnostic List</h2>

      {diagnostics.length === 0 ? (
        <p className="text-sm text-gray-500">No diagnostic history available.</p>
      ) : (
        <div className="overflow-x-auto title">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="bg-[#fcfaf2] rounded-full">
                <th className="text-left p-4">Problem/Diagnosis</th>
                <th className="text-left p-4">Description</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {diagnostics.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-0">
                  <td className="p-4 align-top">{item.name}</td>
                  <td className="p-4 align-top">{item.description}</td>
                  <td className="p-4 align-top">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DiagnosticList;