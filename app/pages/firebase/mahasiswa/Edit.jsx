import React from 'react'
import { db } from '@/app/services/firebase'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [Name, setNama] = React.useState("");
    const [NIM, setNIM] = React.useState("");
    const [Kelas, setKelas] = React.useState("");
    const [Jurusan, setJurusan] = React.useState("");

    React.useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, "mahasiswa", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNama(docSnap.data().Name);
                setNIM(docSnap.data().NIM);
                setKelas(docSnap.data().Kelas);
                setJurusan(docSnap.data().Jurusan);
            } else {
                console.log("No such document!");
            }
        };
        if(id){
            fetchItem();
        }
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await updateDoc(doc(db, "mahasiswa", id), {
                Name,
                NIM,
                Kelas,
                Jurusan,
            });
            MySwal.fire({
                icon: 'success',
                title: 'Data submitted successfully',
                text: `Your data has been submitted successfully`,
            });
            navigate("/mahasiswa");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.error("Error adding document: ", e);
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            // });
        }
    };




  return (
    <div className="m-10">
        <div className="py-4">
        <Link to="/mahasiswa" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Kembali
        </Link>
        </div>
        <form>
            <div className="mb-6">
                <label
                    htmlFor="nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Nama
                </label>
                <input
                    type="text"
                    name="nama"
                    id="nama"
                    placeholder="Nama"
                    value={Name}
                    onChange={(e) => setNama(e.target.value)}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
        </div>
        <div className="mb-6">
            <label
                htmlFor="nim"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                NIM
            </label>
            <input
                type="text"
                name="nim"
                id="nim"
                placeholder="NIM"
                value={NIM}
                onChange={(e) => setNIM(e.target.value)}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="kelas"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Kelas
                </label>
                <input
                    type="text"
                    name="kelas"
                    id="kelas"
                    placeholder="Kelas"
                    value={Kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="jurusan"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Jurusan
                    </label>
                    <input
                        type="text"
                        name="jurusan"
                        id="jurusan"
                        placeholder="Jurusan"
                        value={Jurusan}
                        onChange={(e) => setJurusan(e.target.value)}
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                        >
                            Edit
                        </button>
                        </div>
                        </form>


                </div>
  )
}

export default Edit