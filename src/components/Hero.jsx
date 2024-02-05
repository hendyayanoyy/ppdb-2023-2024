import hero from "../assets/hero3.png";
import Navbar from "../components/NavbarResponsive";

function Hero() {
  return (
    <div className="relative text-center">
      <div className="relative">
        <div className="logo-ppdb absolute left-0 top-0 p-2 text-left text-lg lg:text-sm font-bold">
          <p className="text-white">PPDB</p>
          <p className="text-white tracking-tight">
            SMP MITRA BINTARO
            <br />
            ISLAMIC SCHOOL
          </p>
        </div>

        <div className="absolute top-0 right-0 flex justify-end md:mr-10 z-40">
          <Navbar />
        </div>
      </div>

      <div className="absolute pb-40 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-shadow">
        <p className="text-red-600">PENERIMAAN PESERTA DIDIK BARU</p>
        <p className="text-blue-500">
          SMP MITRA BINTARO
          <br />
          ISLAMIC SCHOOL
        </p>
        <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
      </div>

      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 text-shadow2 text-lg md:text-3xl lg:text-4xl tracking-tight text-white">
        <p>
          Untuk calon pendaftar masuk SMP Mitra Bintaro Islamic School tahun
          ajaran 2024/2025 bisa mendaftar lewat website ini atau langsung datang
          ke SMP Mitra Bintaro Islamic School
        </p>
      </div>

      <div className="absolute pt-24 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className=" bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          DAFTAR
        </button>
      </div>
      <img
        src={hero}
        alt=""
        className="shadow-white w-full h-screen object-cover "
      />
    </div>
  );
}

export default Hero;
