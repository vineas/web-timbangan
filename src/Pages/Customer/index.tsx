export const CustomerPage = () => {
  return (
    <div className="w-full">
      <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Daftar Customer / Supplier
          </h2>
        </div>

        {/* Form input */}
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
        <div className="">
          <table className="min-w-[1200px] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-gray-200">Nama Customer/Supplier</th>
                <th className="px-6 py-3 text-gray-200">Kode</th>
                <th className="px-6 py-3 text-gray-200">Telepon</th>
                <th className="px-6 py-3 text-gray-200">Alamat</th>
                <th className="px-6 py-3 text-gray-200">Kota</th>
                <th className="px-6 py-3 text-gray-200">Fax</th>
                <th className="px-6 py-3 text-gray-200">PIC</th>
                <th className="px-6 py-3 text-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-300 border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Beras</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">0001</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">021234234234</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">Jalan Industri Bekasi no 1</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">Bekasi</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">11001111</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">Rahmat</td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap flex gap-2">
                  <button
                    type="button"
                    className="text-white bg-yellow-700 hover:bg-yellow-800 
                    focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
                    rounded-full text-sm px-4 py-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 
                    focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
                    rounded-full text-sm px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
