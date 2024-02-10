import { useState, useEffect } from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 640);
    };

    window.addEventListener("scroll", handleScroll);

    // Inisialisasi react-scroll untuk memungkinkan pengawasan aktif
    scrollSpy.update();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div>
      <nav className={`container px-4 md:p-2 flex justify-between items-center ${isScrolled ? "bg-[rgba(0,0,0,0.2)]" : "bg-transparent"} `}>
        <a href="#" className="flex items-center gap-3">
          <img src={Logo} alt="logo-brand" className="w-[100%] md:w-[12%]" />
          <span className={`text-md text-white z-50 `}>SMP MITRA BINTARO ISLAMIC SCHOOL</span>
        </a>
        <div className="flex items-center gap-3">
          <ul
            className={`flex text-white text-md md:text-lg gap-4 md:gap-8 p-4 justify-center`}
          >
            <ScrollLink
              to="home"
              smooth
              spy
              offset={-70}
              duration={500}
              className={`hover:text-red-600 cursor-pointer ${activeSection === "home" ? "text-red-600" : ""}`}
              onSetActive={() => handleSetActive("home")}
            >
              Beranda
            </ScrollLink>
            <ScrollLink
              to="profile"
              smooth
              spy
              offset={50}
              duration={500}
              className={`hover:text-red-600 cursor-pointer ${activeSection === "profile" ? "text-red-600" : ""}`}
              onSetActive={() => handleSetActive("profile")}
            >
              Profil
            </ScrollLink>
            <ScrollLink
              to="information"
              smooth
              spy
              offset={50}
              duration={500}
              className={`hover:text-red-600 cursor-pointer ${activeSection === "information" ? "text-red-600" : ""}`}
              onSetActive={() => handleSetActive("information")}
            >
              Informasi
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              spy
              offset={-100}
              duration={500}
              className={`hover:text-red-600 cursor-pointer ${activeSection === "contact" ? "text-red-600" : ""}`}
              onSetActive={() => handleSetActive("contact")}
            >
              Kontak
            </ScrollLink>
          </ul>
          <a href="#" className="mr-6 px-8 py-2 bg-red-600 text-white rounded-lg cursor-pointer" >Daftar</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
