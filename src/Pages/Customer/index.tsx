export const CustomerPage = () => {
  return (
    <div className="px-55 w-full">
      <div className="w-full p-6 bg-white rounded-lg shadow-sm flex flex-col gap-4">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Daftar Customer/Suplier
          </h2>
        </div>

        <div className="justify-center">
          <div>
            <label
              htmlFor="kode_product"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kode
            </label>
            <input
              type="text"
              id="kode_product"
              className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0001"
              maxLength={4}
              required
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="nama_barang"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nama Customer/Suplier
            </label>
            <input
              type="text"
              id="nama_customer"
              className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Boiler Farm"
              required
            />
          </div>
                    <div className="mt-3">
            <label
              htmlFor="alamat"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Jalan Industri Desa"
              required
            />
          </div>
                    <div className="mt-3">
            <label
              htmlFor="Kota"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kota
            </label>
            <input
              type="text"
              id="kota"
              className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bekasi"
              required
            />
          </div>
          <button
            type="submit"
            className="ml-3 mt-8 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
              disabled:opacity-50"
          >
            Simpan
          </button>
          <button
            type="submit"
            className="ml-3 mt-8 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
              disabled:opacity-50"
          >
            Cancel
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Kode
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Nama Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-300 border-gray-200">
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      0001
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Beras
                    </th>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      <button
                        type="submit"
                        className="ml-3 mt-8 text-white bg-yellow-700 hover:bg-yellow-800 
              focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 
              disabled:opacity-50"
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        className="ml-3 mt-8 text-white bg-red-700 hover:bg-red-800 
              focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 
              disabled:opacity-50"
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
      </div>
    </div>
  );
};
