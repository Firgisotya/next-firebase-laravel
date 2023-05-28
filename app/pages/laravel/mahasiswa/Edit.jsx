import React from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const EditMahasiswaLaravel = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setNama] = React.useState('');
    const [nim, setNim] = React.useState("");
    const [alamat, setAlamat] = React.useState("");
    const [no_hp, setNo_hp] = React.useState("");
    const [jurusan_id, setJurusan_id] = React.useState("");
    const [kelas_id, setKelas_id] = React.useState("");
  
    const [jurusan, setJurusan] = React.useState([]);
    const [kelas, setKelas] = React.useState([]);

    React.useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/mahasiswa/${id}`);
            setNama(response.data.name);
            setNim(response.data.nim);
            setAlamat(response.data.alamat);
            setNo_hp(response.data.no_hp);
            setJurusan_id(response.data.jurusan_id);
            setKelas_id(response.data.kelas_id);
        };
        const fetchKelas = async () => {
            const response = await axios.get("http://localhost:8000/api/kelas");
            setKelas(response.data);
            }
        const fetchJurusan = async () => {
            const response = await axios.get("http://localhost:8000/api/jurusan");
            setJurusan(response.data);
            }
        fetchData();
        fetchKelas();
        fetchJurusan();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            nim: nim,
            alamat: alamat,
            no_hp: no_hp,
            jurusan_id: jurusan_id,
            kelas_id: kelas_id,
        };
        axios.put(`http://localhost:8000/api/mahasiswa/${id}`, data).then(response => {
            MySwal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: response.data.message,
            });
            navigate('/mahasiswaLaravel');
        });
    };

  return (
    <div className="m-10">
      <div className="py-4">
        <Link
          to="/mahasiswaLaravel"
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
            Nama Mahasiswa
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
            htmlFor="nim"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nim Mahasiswa
          </label>
          <input
            type="text"
            id="nim"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="alamat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Alamat Mahasiswa
          </label>
          <textarea
            type="text"
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="noHp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            NoHp Mahasiswa
          </label>
          <input
            type="text"
            id="noHp"
            value={no_hp}
            onChange={(e) => setNo_hp(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="kelas"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Kelas Mahasiswa
          </label>
          <select
            id="kelas"
            value={kelas_id}
        onChange={(e) => setKelas_id(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Pilih Kelas</option>
            {kelas.map((item) => (
            <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="jurusan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jurusan Mahasiswa
          </label>
          <select
            id="jurusan"
            value={jurusan_id}
        onChange={(e) => setJurusan_id(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Pilih Jurusan</option>
            {jurusan.map((item) => (
            <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Data
        </button>
      </form>
    </div>
  )
}

export default EditMahasiswaLaravel
