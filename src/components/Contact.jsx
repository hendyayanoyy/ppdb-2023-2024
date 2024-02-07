import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";

function Contact() {
  return (
    <div className="mb-20">
      <hr className="border-b-2 border-red-500 my-1" />
      <h2 className="font-bold text-3xl bg-black text-white py-2">
        HUBUNGI KAMI
      </h2>
      <hr className="border-b-2 border-red-500 my-1" />

      <h3 className="text-4xl font-semibold pt-10">
        SMP Mitra Bintaro Islamic School
      </h3>
      <hr className="border-b-2 border-red-600 my-4 mx-auto w-20 mb-10" />
      <p className="text-md font-semibold px-10 md:px-0 lg:px-0 md:text-2xl lg:text-2xl text-center max-w-xl mx-auto">
        Jl. Japos Raya Pondok Jati No.45B, Jurang Mangu Barat, Kec. Pd. Aren,
        Kota Tangerang Selatan, Banten 15233
      </p>

      <div className="flex font-semibold text-sm md:text-xl lg:text-xl gap-10 lg:flex-col flex-col max-w-xl mx-auto mt-10">
        <div className="icon flex flex-col md:flex-row  gap-4 font-bold items-center lg:mb-0 mb-6">
          <img src={phone} className="w-10 h-10" alt=""  />
          <div className="mt-2">
            <a
              href="https://wa.me/6282169462242"
              className="hover:text-red-500"
            >
              082169462242{" "}
            </a>
            <span>/ </span>
            <a
              href="https://wa.me/6287809270299"
              className="hover:text-red-500"
            >
              087809270299{" "}
            </a>
            <span>/ </span>
            <a
              href="https://wa.me/6289513606272"
              className="hover:text-red-500"
            >
              089513606272
            </a>
          </div>
        </div>
        <div className="icon flex flex-col md:flex-row gap-4 font-bold items-center">
          <img src={mail} className="w-10 h-10" alt="" />
          <a className="mt-2 hover:text-red-500 cursor-pointer text-md">
            smp.mitrabintaroislamicschool@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
