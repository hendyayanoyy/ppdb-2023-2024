import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";
import Logo from "../assets/logo.png";

function Contact() {
  return (
    <div className="text-white overflow-hidden">
      {/* Glassmorphism */}
      <div className="bg-curves w-full h-[56vh] "></div>
      <div className="bg-[#F33E3E] pb-10 px-4 md:px-12 flex">
        <div className="flex font-semibold text-sm md:text-xl lg:text-xl gap-4 lg:flex-col flex-col md:max-w-[50%] sm:w-full sm:h-[100vh] rounded-[12px] bg-[rgba(0,0,0,0.3)] p-4 md:p-12 relative">
          <h2 className="font-bold text-xl text-gray-400 py-2">
            HUBUNGI KAMI
          </h2>

          <img src={Logo} alt="" className="w-[20%] mx-auto" />

          <h3 className="text-3xl font-semibold">
            SMP Mitra Bintaro Islamic School
          </h3>
          <hr className="border-b-2 border-gray-400 mx-auto w-20" />
          <p className="text-md font-normal px-4 md:px-0 lg:px-0 md:text-lg lg:text-lg text-left text-gray-200">
            Jl. Japos Raya Pondok Jati No.45B, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15233
          </p>
          <div className="icon flex flex-col md:flex-row gap-4 font-normal items-center lg:mb-0 mb-6">
            <img src={phone} className="w-8 h-8" alt="" />
            <div className="flex gap-3 items-center">
              <a
                href="https://wa.me/6282169462242"
                className="hover:text-gray-400"
              >
                082169462242{" "}
              </a>
              <span>/ </span>
              <a
                href="https://wa.me/6287809270299"
                className="hover:text-gray-400"
              >
                087809270299{" "}
              </a>
              <span>/ </span>
              <a
                href="https://wa.me/6289513606272"
                className="hover:text-gray-400"
              >
                089513606272
              </a>
            </div>
          </div>
          <div className="icon flex flex-col md:flex-row gap-4 font-normal items-center">
            <img src={mail} className="w-8 h-8" alt="" />
            <a className="hover:text-gray-400 cursor-pointer text-md">
              smp.mitrabintaroislamicschool@gmail.com
            </a>
          </div>
        </div>

        <div className="maps relative md:bottom-0 pl-20 md:right-0 mt-10 w-full md:w-[50%] md:h-[78vh] overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.301577705015!2d106.7197752!3d-6.2537972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa79a7d86fe5%3A0xe3c555152ff6dcce!2sSMP%20MITRA%20BINTARO%20ISLAMIC%20SCHOOL!5e0!3m2!1sid!2sid!4v1707616604098!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
