import { useState } from "react";

export const PenimbanganPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTimbang = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(true); // aktifkan input setelah klik Timbang
  };
  return (
    <div className="px-24">
      <div className="max-w-5xl p-6 bg-white rounded-lg shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <div className="max-w-xl px-40 py-25  bg-black">
            <h2 className="mb-2 text-5xl font-bold text-gray-white flex justify-between">
              2455 kg
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Form */}
          <div>
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <select
                    disabled={!isEditing}
                    id="first_name"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-full 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:border-gray-600 dark:placeholder-gray-400  
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="Normal"
                  >
                    <option value="normal">Normal</option>
                    <option value="reflaksipersen">Reflaksi %</option>
                    <option value="hargasatuan">Harga Satuan</option>
                    <option value="reflaksikg">Reflaksi kg</option>
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    id="record"
                    className=" border-gray-300 text-gray-900 text-sm rounded-full 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
                dark:border-gray-600 dark:placeholder-gray-400  
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No Record '0001'"
                    disabled // tetap disable
                    required
                  />
                  <a href="#" className="text-xs text-gray-500">
                    Reset
                  </a>
                </div>
              </div>

              {/* No Kendaraan */}
              <div className="mt-3">
                <label
                  htmlFor="no_kendaraan"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  No. Kendaraan
                </label>
                <input
                  type="text"
                  id="no_kendaraan"
                  disabled={!isEditing}
                  className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="B1234YN"
                  required
                />
              </div>

              {/* Nama Barang */}
              <div className="mt-3">
                <label
                  htmlFor="nama_barang"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nama Barang
                </label>
                <select
                  id="product"
                  disabled={!isEditing}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="Barang"
                >
                  <option value="normal">Product 1</option>
                  <option value="reflaksipersen">Product 2</option>
                  <option value="hargasatuan">Product 3</option>
                  <option value="reflaksikg">Product 4</option>
                </select>
              </div>

              {/* Nama Customer */}
              <div className="mt-3">
                <label
                  htmlFor="no_record"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nama Customer
                </label>
                <select
                  id="customer"
                  disabled={!isEditing}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="Customer"
                >
                  <option value="normal">Customer 1</option>
                  <option value="reflaksipersen">Customer 2</option>
                  <option value="hargasatuan">Customer 3</option>
                  <option value="reflaksikg">Customer 4</option>
                </select>
              </div>

              {/* Transporter */}
              <div className="mt-3">
                <label
                  htmlFor="transporter"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Transporter
                </label>
                <select
                  id="transporter"
                  disabled={!isEditing}
                  className=" border border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="Transporter"
                >
                  <option value="normal">Transporter 1</option>
                  <option value="reflaksipersen">Transporter 2</option>
                  <option value="hargasatuan">Transporter 3</option>
                  <option value="reflaksikg">Transporter 4</option>
                </select>
              </div>

              {/* No DO/PO */}
              <div className="mt-3">
                <label
                  htmlFor="no_dopo"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  No. DO/PO
                </label>
                <input
                  type="text"
                  id="no_dopo"
                  disabled={!isEditing}
                  className=" border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/* Tombol */}
              <div>
                <button
                  type="submit"
                  disabled={!isEditing}
                  className="mt-8 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
              disabled:opacity-50"
                >
                  Ganti Operator
                </button>
                <button
                  onClick={handleTimbang}
                  className="ml-3 mt-8 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Timbang
                </button>
                <button
                  type="submit"
                  disabled={!isEditing}
                  className="ml-3 mt-8 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
              rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
              disabled:opacity-50"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>

          {/* Table */}
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Tanggal & Jam
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Penimbangan
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-200 ">
                      Berat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-300 border-gray-200">
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      04/09/2025 14:30
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Timbang I
                    </th>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      3455 kg
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-300 border-gray-200">
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      04/09/2025 16:30
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Timbang II
                    </th>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      2455 kg
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-300 border-gray-200">
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap"></td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Netto
                    </th>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      1000 kg
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
