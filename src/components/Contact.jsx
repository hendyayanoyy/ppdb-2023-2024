import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";
import Logo from "../assets/logo.png";

function Contact() {
  return (
    <div className="text-white">
      <div className="bg-curves w-full h-[56vh] "></div>
      <div className="bg-[#F33E3E] pb-12 px-12">
        <div className="flex font-semibold text-sm md:text-xl lg:text-xl gap-4 lg:flex-col flex-col max-w-[50%] rounded-[12px] bg-[rgba(0,0,0,0.3)] p-12">
          <h2 className="font-bold text-xl text-gray-400 py-2">
            HUBUNGI KAMI
          </h2>

          <img src={Logo} alt="" className="w-[20%] mx-auto" />

          <h3 className="text-3xl font-semibold">
            SMP Mitra Bintaro Islamic School
          </h3>
          <hr className="border-b-2 border-gray-400 mx-auto w-20" />
          <p className="text-md font-normal px-10 md:px-0 lg:px-0 md:text-lg lg:text-lg text-left text-gray-200">
            Jl. Japos Raya Pondok Jati No.45B, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15233
          </p>
          <div className="icon flex flex-col md:flex-row gap-4 font-normal items-center lg:mb-0 mb-6">
            <img src={phone} className="w-8 h-8" alt=""  />
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
      </div>
    </div>
  );
}

export default Contact;
