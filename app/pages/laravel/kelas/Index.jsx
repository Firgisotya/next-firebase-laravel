import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const IndexKelasLaravel = () => {

    const [kelas, setKelas] = React.useState([]);
    
    React.useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:8000/api/kelas').then(response => {
                setKelas(response.data);
            });
        };
        fetchData();
    }, []);

    console.log(kelas);

    const handleDelete = (id) => {
        const fetchData = async () => {
            await axios.delete(`http://localhost:8000/api/kelas/${id}`).then(response => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: response.data.message,
                });
                setKelas(prevKelas => prevKelas.filter(item => item.id !== id));
            });
        };
        fetchData();
    };

  return (
    <div className="relative overflow-x-auto p-5">
      <div className="p-4">

      <Link
        to="/kelasLaravel/create"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-5"
      >
        Tambah Kelas
      </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Kelas
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {kelas.map((item, index) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">
                <Link
                  to={`/kelasLaravel/edit/${item.id}`}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Edit
                </Link>
                <button 
                    onClick={() => handleDelete(item.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IndexKelasLaravel
