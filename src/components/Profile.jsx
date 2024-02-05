import logo from "../assets/logo.png";

function Profile() {
  return (
    <div className="bg-blue-800 w-full h-100% pt-32 text-white">
      <h1 className="text-3xl font-bold">
        PROFIL SMP MITRA BINTARO ISLAMIC SCHOOL
      </h1>
      <img src={logo} alt="" className="logo-profile w-32 mx-auto my-4 " />
      <p className="text-sm font-medium mb-4 max-w-2xl text-justify mx-auto">
        SMP Mitra Bintaro Islamic School adalah lembaga pendidikan yang berada
        di bawah Yayasan Mahkota Wisata berkomitmen untuk memberikan pendidikan
        berkualitas dengan landasan nilai-nilai Islam. Kami menawarkan program
        pendidikan yang terbaik untuk membentuk karakter dan kepribadian siswa.
        Menjadi lembaga pendidikan unggulan yang menghasilkan generasi muslim
        yang berkualitas, cerdas, dan berakhlak mulia.
      </p>
      <h2 className="text-sm md:text-2xl lg:text-2xl font-bold mb-2 mt-10">
        Misi
      </h2>
      <ul className="text-sm md:text-xl lg:text-xl font-medium list-decimal ml-6 mb-4 pb-32 max-w-2xl text-justify mx-auto inline-block">
        <li>
          Mengembangkan potensi akademik dan non-akademik siswa secara optimal.
        </li>
        <li>
          Mendidik siswa dengan nilai-nilai Islam yang sesuai dengan ajaran
          agama.
        </li>
        <li>Menyediakan fasilitas dan lingkungan belajar yang kondusif.</li>
        <li>
          Membangun kerjasama yang baik antara sekolah, siswa, dan orang tua.
        </li>
      </ul>
    </div>
  );
}

export default Profile;
