import logo from "../assets/logo.png";

function Profile() {
  return (
    <div className="p-6 h-[100%] flex flex-col justify-between">
      <div>
        <img src={logo} alt="" className="logo-profile w-32 mx-auto my-4 " />
        <h1 className="text-3xl font-semibold">
          SMP MITRA BINTARO ISLAMIC SCHOOL
        </h1>
        <p className="text-[18px] mt-3 leading-1 font-normal text-gray-600 mb-4 max-w-2xl text-center mx-auto">
          merupakan lembaga pendidikan yang berada
          di bawah Yayasan Mahkota Wisata berkomitmen untuk memberikan pendidikan
          berkualitas dengan landasan nilai-nilai Islam. Kami menawarkan program
          pendidikan yang terbaik untuk membentuk karakter dan kepribadian siswa.
          Menjadi lembaga pendidikan unggulan yang menghasilkan generasi muslim
          yang berkualitas, cerdas, dan berakhlak mulia.
        </p>
      </div>
      <div className="flex flex-row w-[100%] gap-12">
        <div className="shadow-md border mx-auto rounded-lg mt-5 px-12 py-8">
          <h2 className="text-sm md:text-2xl lg:text-2xl font-bold mb-2">
            Visi
          </h2>
          <ul className="text-sm md:text-lg lg:text-lg font-normal list-decimal text-justify mx-auto inline-block text-gray-600">
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
        <div className="shadow-md border mx-auto rounded-lg mt-5 px-12 py-8">
          <h2 className="text-sm md:text-2xl lg:text-2xl font-bold mb-2">
            Misi
          </h2>
          <ul className="text-sm md:text-lg lg:text-lg font-normal list-decimal text-justify mx-auto inline-block text-gray-600">
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
      </div>
    </div>
  );
}

export default Profile;
