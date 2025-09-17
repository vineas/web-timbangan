import { useEffect, useState } from "react";
import type { Barang } from "../../types";
import supabase from "../../lib/db";

export const PenimbanganPage = () => {
  // Timbang function
  const [isEditing, setIsEditing] = useState(false);
  const handleTimbang = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(true); // aktifkan input setelah klik Timbang
  };

  // Get data barang from supabase
  const [barangs, setBarangs] = useState<Barang[]>([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    const fetchBarang = async () => {
      const { data, error } = await supabase.from("barang").select("*");

      if (error) console.error("error: ", error);
      else setBarangs(data);
    };

    fetchBarang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 w-full">
        <div className="flex items-center justify-center">
          <div className="max-w-xl px-13 py-15 md:px-33 md:py-25 bg-black">
            <h2 className="text-5xl font-bold text-white flex justify-between">
              2455 kg
            </h2>
          </div>
        </div>

        <div className="gap-4">
          {/* Form */}
          <div>
            <form>
              {/* Button Timbang */}
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                <button
                  onClick={handleTimbang}
                  className="mt-8 md:ml-3 w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white
         bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
         rounded-full text-center 
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Timbang
                </button>
              </div>

              {/* Sopir & Operator */}
              <div className="px-6">
                <div className="mt-4 grid grid-cols-2">
                  <h3 className="text-sm text-center font-bold text-gray-900">
                    Operator
                  </h3>
                  <h3 className="text-sm font-bold text-center text-gray-900">
                    Sopir
                  </h3>
                </div>
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center justify-center">
                    <input
                      placeholder="Nama Operator"
                      id="operator"
                      required
                      type="text"
                      disabled={!isEditing}
                      className="text-sm hover:bg-gray-100  text-gray-900 border border-gray-300 rounded-2xl p-1 w-1/2"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      placeholder="Nama Sopir"
                      id="sopir"
                      required
                      type="text"
                      disabled={!isEditing}
                      className="text-sm hover:bg-gray-100  text-gray-900 border border-gray-300 rounded-2xl p-1 w-1/2"
                    />
                  </div>
                  {/* <h5 className="text-sm text-center text-gray-900">Admin</h5> */}
                </div>
              </div>

              {/* Input Fields */}
              {/* Tipe Penimbangan, No Record, No Kendaraan */}
              <div className="grid gap-3 md:gap-6 mb-6 md:grid-cols-5 mt-5">
                <div></div>
                {/* Tipe Penimbangan */}
                <div>
                  <label
                    htmlFor="tipe_penimbangan"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tipe Penimbangan
                  </label>
                  <select
                    title="tipe_penimbangan"
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
                {/* No Record */}
                <div>
                  <label
                    htmlFor="no_record"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    No. Record
                  </label>
                  <input
                    type="number"
                    id="record"
                    className="rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0001"
                    disabled
                    required
                  />
                  <a href="#" className="text-xs text-gray-500">
                    Reset
                  </a>
                </div>
                {/* No Kendaraan */}
                <div className="">
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
              </div>

              {/* Nama Barang, Nama Customer, Transporter */}
              <div className="grid gap-3 md:gap-6 mb-6 md:grid-cols-1">
                {/* Nama Barang */}
                <div className="mt-3">
                  <label
                    htmlFor="nama_barang"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nama Barang
                  </label>

                  <select
                    title="nama_barang"
                    id="product"
                    disabled={!isEditing}
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-full 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="Barang"
                  >
                    {/* <option value="">-- Pilih Barang --</option> */}
                    {barangs.map((barang) => (
                      <option key={barang.id} value={barang.id}>
                        {barang.nama_barang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid gap-3 md:gap-6 mb-6 md:grid-cols-2">
                {/* Nama Customer */}
                <div className="mt-3">
                  <label
                    htmlFor="no_record"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nama Customer
                  </label>
                  <select
                    title="customer"
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

              {/* Simpan Button */}
              <div>
                <button
                  type="submit"
                  disabled={!isEditing}
                  className="mt-4 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold 
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
          <div className="mt-6 w-full text-left table-auto border-collapse">
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
