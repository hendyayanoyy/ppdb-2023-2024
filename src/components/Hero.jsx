import { useEffect, useState } from 'react';
import Navbar from "../components/NavbarResponsive";
import Gallery from "./Carousell";
import NavbarMobile from "./NavbarMobile";
import Logo from "../assets/logo.png";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative text-center">
      <div className="relative">
        <div className="logo-ppdb absolute left-0 top-0 p-2 text-left text-lg lg:text-sm font-bold"></div>

        {/* Menampilkan Logo dan Teks di pojok kiri atas saat tampilan mobile */}
        {isMobile && (
          <div className="absolute top-0 left-0 p-2 text-left flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              <img src={Logo} alt="logo-brand" className="w-[20%] md:w-[12%]" />
              <span className={`text-md md:text-sm lg:text-md text-white z-5 `}>SMP MITRA BINTARO ISLAMIC SCHOOL</span>
            </a>
          </div>
        )}

        <div className="absolute top-0 right-0 flex justify-end md:mr-10 z-40">
          {isMobile ? (
            <NavbarMobile />
          ) : (
            <Navbar />
          )}
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

      <div className="absolute pt-24 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Tombol atau elemen lainnya yang mungkin Anda tambahkan */}
      </div>
      <Gallery/>
    </div>
  );
}

export default Hero;
