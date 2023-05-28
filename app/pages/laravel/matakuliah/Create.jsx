import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CreateMataKuliahLaravel = () => {

    const navigate = useNavigate();
  const [name, setNama] = React.useState("");
  const [kode, setKode] = React.useState("");
  const [sks, setSks] = React.useState("");
  const [mahasiswa_id, setMahasiswa_id] = React.useState("");

  const [mahasiswa, setMahasiswa] = React.useState([]);

  React.useEffect(() => {
    const fetchMahasiswa = async () => {
        const response = await axios.get("http://localhost:8000/api/mahasiswa");
        setMahasiswa(response.data);
        }
        fetchMahasiswa();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      kode: kode,
      sks: sks,
      mahasiswa_id: mahasiswa_id,
    };
    axios.post("http://localhost:8000/api/matakuliah", data).then((response) => {
      MySwal.fire({
        icon: "success",
        title: "Berhasil",
        text: response.data.message,
      });
      navigate("/matakuliahLaravel");
    });
  };

  return (
    <div className="m-10">
    <div className="py-4">
      <Link
        to="/matakuliahLaravel"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Kembali
      </Link>
    </div>
    <form>
      <div className="mb-6">
        <label
          htmlFor="nama"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mata Kuliah
        </label>
        <input
          type="text"
          id="nama"
          value={name}
          onChange={(e) => setNama(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="kode"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Kode
        </label>
        <input
          type="text"
          id="kode"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="sks"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          SKS
        </label>
        <input
          type="text"
          id="sks"
          value={sks}
          onChange={(e) => setSks(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="mahasiswa"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mahasiswa
        </label>
        <select
          id="mahasiswa"
          value={mahasiswa_id}
      onChange={(e) => setMahasiswa_id(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Pilih Mahasiswa</option>
          {mahasiswa.map((item) => (
          <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Tambah Data
      </button>
    </form>
  </div>
  )
}

export default CreateMataKuliahLaravel
