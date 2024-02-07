import { useState, useEffect } from "react";
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
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
      <nav className="container">
        <ul
          className={`flex z-50 text-white text-lg md:text-xl gap-4 md:gap-8 p-4 fixed top-0 right-0 left-8 md:right-8 justify-end ${
            isScrolled ? "bg-black bg-opacity-75" : ""
          }`}
        >
          <ScrollLink
            to="home"
            smooth
            spy
            offset={-70}
            duration={500}
            className={`hover:underline cursor-pointer ${activeSection === "home" ? "underline" : ""}`}
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
            className={`hover:underline cursor-pointer ${activeSection === "profile" ? "underline" : ""}`}
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
            className={`hover:underline cursor-pointer ${activeSection === "information" ? "underline" : ""}`}
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
            className={`hover:underline cursor-pointer ${activeSection === "contact" ? "underline" : ""}`}
            onSetActive={() => handleSetActive("contact")}
          >
            Kontak
          </ScrollLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
