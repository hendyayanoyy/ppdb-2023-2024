import React from 'react'
import logo from '../assets/logo.png';

function Profile() {
  return (
    <div className='bg-blue-800 w-full h-100% pt-32'>
        <h1 className='text-3xl font-bold'>PROFIL SMP MITRA BINTARO ISLAMIC SCHOOL</h1>
        <img src={logo} alt="" className="shadow-white w-32 mx-auto my-4" />
        <p className='text-xl font-medium'> SMP Mitra Bintaro Islamic School adalah lembaga pendidikan yang berada di bawah Yayasan Mahkota Wisata <br/>
        berkomitmen untuk memberikan pendidikan berkualitas<br/>
        dengan landasan nilai-nilai Islam.<br/>
        Kami menawarkan program pendidikan yang terbaik untuk membentuk karakter dan
        kepribadian siswa.</p>
        <p className="mb-4 font-medium text-xl">
        Menjadi lembaga pendidikan unggulan yang menghasilkan generasi muslim yang berkualitas, cerdas, dan berakhlak mulia.
      </p>
      <h2 className="text-2xl font-bold mb-2">Misi</h2>
      <ul className="text-xl font-medium list-none ml-6 mb-4 pb-32">
        <li>Mengembangkan potensi akademik dan non-akademik siswa secara optimal.</li>
        <li>Mendidik siswa dengan nilai-nilai Islam yang sesuai dengan ajaran agama.</li>
        <li>Menyediakan fasilitas dan lingkungan belajar yang kondusif.</li>
        <li>Membangun kerjasama yang baik antara sekolah, siswa, dan orang tua.</li>
      </ul>
    </div>
  )
}

export default Profile