export const CustomerPage = () => {
  return (
    <div className="container">
      <div className="p-6 bg-white shadow-sm rounded-lg">

        {/* Header */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Daftar Customer / Supplier
          </h2>
        </div>

        {/* Form */}
        <div className="my-6">
          <form className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="kode_customer"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kode
              </label>
              <input
                type="text"
                id="kode_customer"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="0001"
                maxLength={4}
                required
              />
            </div>
            <div>
              <label
                htmlFor="nama_customer"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Customer / Supplier
              </label>
              <input
                type="text"
                id="nama_customer"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="Boiler Farm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="Jalan Industri Desa"
                required
              />
            </div>
            <div>
              <label
                htmlFor="kota"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kota
              </label>
              <input
                type="text"
                id="kota"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="Bekasi"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telepon"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Telepon
              </label>
              <input
                type="text"
                id="telepon"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="0211234567"
                required
              />
            </div>
            <div>
              <label
                htmlFor="facsimile"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Facsimile
              </label>
              <input
                type="text"
                id="facsimile"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="Facsimile"
              />
            </div>
            <div>
              <label
                htmlFor="pic"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                P.I.C
              </label>
              <input
                type="text"
                id="pic"
                className="border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border"
                placeholder="PIC"
              />
            </div>
          </form>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm px-5 py-2.5 text-center"
          >
            Simpan
          </button>
          <button
            type="button"
            className="text-white bg-gray-500 hover:bg-gray-600 
              focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium 
              rounded-full text-sm px-5 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>

        {/* Table */}
        <div className="container max-h-46 md:max-h-96 my-8 overflow-x-scroll overflow-y-scroll text-gray-700 bg-white shadow-md rounded-lg">
          <table className="text-left table-auto border-collapse">
            <thead className="sticky top-0 bg-slate-50 z-10">
              <tr className="text-slate-500 border-b border-slate-300">
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">
                    Customer/Supplier
                  </p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">Kode</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">Telepon</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">Alamat</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">Kota</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">FAX</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">PIC</p>
                </th>
                <th className="p-4">
                  <p className="text-sm leading-none font-normal">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50 border-b border-slate-200"
                >
                  <td className="p-4">
                    <p className="text-sm font-bold">
                      Project {String.fromCharCode(65 + i)}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">0{i + 1}/01/2024</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">+62-21-555-000{i}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">
                      Jl. Sudirman No. sad Jl. Sudirman No. sad Jl. Sudirman No.
                      sad Jl. Sudirman No. sad {i + 1}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">Jakarta</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">021-555-000{i}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">PIC {i + 1}</p>
                  </td>
                  <td className="p-4">
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
  );
};
