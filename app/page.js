'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Create from './pages/firebase/mahasiswa/Create';
import Edit from './pages/firebase/mahasiswa/Edit';
import Index from './pages/firebase/mahasiswa/Index';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import IndexJurusanLaravel from './pages/laravel/jurusan/Index';
import CreateJurusanLaravel from './pages/laravel/jurusan/Create';
import EditJurusanLaravel from './pages/laravel/jurusan/Edit';
import IndexKelasLaravel from './pages/laravel/kelas/Index';
import CreateKelasLaravel from './pages/laravel/kelas/Create';
import EditKelasLaravel from './pages/laravel/kelas/Edit';
import IndexMahasiswaLaravel from './pages/laravel/mahasiswa/Index';
import CreateMahasiswaLaravel from './pages/laravel/mahasiswa/Create';
import EditMahasiswaLaravel from './pages/laravel/mahasiswa/Edit';
import IndexMataKuliahLaravel from './pages/laravel/matakuliah/Index';
import CreateMataKuliahLaravel from './pages/laravel/matakuliah/Create';
import EditMataKuliahLaravel from './pages/laravel/matakuliah/Edit';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* firebase */}
        <Route path="/mahasiswa" element={<Index/>} />
        <Route path="/mahasiswa/create" element={<Create/>} />
        <Route path="/mahasiswa/edit/:id" element={<Edit/>} />
        {/* end firebase */}

        {/* laravel */}
        <Route path="/jurusanLaravel" element={<IndexJurusanLaravel/>} />
        <Route path="/jurusanLaravel/create" element={<CreateJurusanLaravel/>} />
        <Route path="/jurusanLaravel/edit/:id" element={<EditJurusanLaravel/>} />

        <Route path="/kelasLaravel" element={<IndexKelasLaravel />} />
        <Route path="/kelasLaravel/create" element={<CreateKelasLaravel />} />
        <Route path="/kelasLaravel/edit/:id" element={<EditKelasLaravel />} />

        <Route path="/mahasiswaLaravel" element={<IndexMahasiswaLaravel />} />
        <Route path="/mahasiswaLaravel/create" element={<CreateMahasiswaLaravel />} />
        <Route path="/mahasiswaLaravel/edit/:id" element={<EditMahasiswaLaravel />} />

        <Route path="/matakuliahLaravel" element={<IndexMataKuliahLaravel />} />
        <Route path="/matakuliahLaravel/create" element={<CreateMataKuliahLaravel />} />
        <Route path="/matakuliahLaravel/edit/:id" element={<EditMataKuliahLaravel />} />
        {/* end laravel */}
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}
