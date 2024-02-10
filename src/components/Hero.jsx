
import Navbar from "../components/NavbarResponsive";
import Gallery from "./Carousell";

function Hero() {
  return (
    <div className="relative text-center">
      <div className="relative">
        <div className="logo-ppdb absolute left-0 top-0 p-2 text-left text-lg lg:text-sm font-bold"></div>

        <div className="absolute top-0 right-0 flex justify-end md:mr-10 z-40">
          <Navbar />
        </div>
      </div>

      <div className="absolute pb-40 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-shadow px-5 md:px-0 lg:leading-2">
        <p className="text-red-600">PENERIMAAN PESERTA DIDIK BARU</p>
        <p className="text-blue-500">
          SMP MITRA BINTARO
          <br />
          ISLAMIC SCHOOL
        </p>
        <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
      </div>

      <div className="absolute w-full top-1/2 left-1/2 transform mt-5 -translate-x-1/2 text-shadow2 text-lg md:text-2xl lg:text-xl tracking-tight text-white px-5 md:px-0">
        <button className="mr-6 px-8 py-2 bg-red-600 text-white rounded-lg cursor-pointer">Daftar Sekarang</button>
      </div>

      <div className="absolute pt-24 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* <button className=" bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          DAFTAR
        </button> */}
      </div>
      <Gallery/>
    </div>
  );
}

export default Hero;
