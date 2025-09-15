export const TransporterPage = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg ">
      <div className="max-w-7xl mx-auto">
        <div>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Daftar Transporter
            </h2>
          </div>

          {/* Form Section */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
              <div className="xl:col-start-1">
                <label
                  htmlFor="transporter"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Kode
                </label>
                <input
                  type="text"
                  id="transporter"
                  name="transporter"
                  className="border-2 border-gray-300 text-gray-900 text-sm rounded-full 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3
                    hover:border-gray-400 transition-colors duration-200"
                  placeholder="0001"
                  maxLength={4}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="nama_transporter"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama Transporter
                </label>
                <input
                  type="text"
                  id="nama_transporter"
                  name="nama_transporter"
                  className="border-2 border-gray-300 text-gray-900 text-sm rounded-full 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3
                    hover:border-gray-400 transition-colors duration-200"
                  placeholder="Cargo"
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
                  rounded-full px-8 py-3 transition-colors duration-200 
                  focus:ring-4 focus:ring-blue-300 focus:outline-none
                  shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Simpan
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium 
                  rounded-full px-8 py-3 transition-colors duration-200 
                  focus:ring-4 focus:ring-gray-300 focus:outline-none
                  shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full table-fixed border-collapse">
                  <thead className="sticky top-0 bg-slate-50 z-10">
                    <tr className="text-slate-500 border-b border-slate-300">
                      <th className="w-2/5 p-4 text-left">
                        <p className="text-sm leading-none font-normal">
                          Nama Transporter
                        </p>
                      </th>
                      <th className="w-1/5 p-4 text-left">
                        <p className="text-sm leading-none font-normal">Kode</p>
                      </th>
                      <th className="w-2/5 p-4 text-left">
                        <p className="text-sm leading-none font-normal">
                          Action
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(20)].map((_, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50 border-b border-slate-200 transition-colors duration-150"
                      >
                        <td className="w-2/5 p-4">
                          <div className="text-sm font-bold text-gray-800 break-words">
                            Transporter {String.fromCharCode(65 + i)}
                          </div>
                        </td>
                        <td className="w-1/5 p-4">
                          <div className="text-sm text-gray-600 break-words">
                            TR-{String(i + 1).padStart(3, "0")}
                          </div>
                        </td>
                        <td className="w-2/5 p-4">
                          <div className="flex items-center gap-3">
                            <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-50 transition-colors duration-150">
                              Edit
                            </button>
                            <button className="text-sm font-semibold text-red-600 hover:text-red-800 px-3 py-1 rounded hover:bg-red-50 transition-colors duration-150">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
