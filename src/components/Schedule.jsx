import Plane from "../assets/paper-plane.png";

function Schedule() {
  return (
    <div className="text-center">
      <hr className="border-b-2 border-red-500 my-1" />
      <h2 className="font-bold text-3xl bg-black text-white py-2">JADWAL</h2>
      <hr className="border-b-2 border-red-500 my-1" />

      <div className="flex flex-col items-center lg:flex-row justify-center">
        <div className="card-shadow m-4 lg:m-12 bg-gray-700 w-[300px] lg:max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5" data-aos="zoom-in" data-aos-duration="900">
          <figure className="w-24 h-24 p-2 rounded-md mx-auto">
            <img src={Plane} alt="" className="shadow-white w-full" />
          </figure>
          <h4 className="py-2 text-white font-bold">Gelombang 1</h4>
          <h3 className="text-white">Pendaftaran</h3>
          <h3 className="text-white">1 Januari 2024 s.d 25 April 2024</h3>
          <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
          <h3 className="text-white">Penyerahan Formulir</h3>
          <h3 className="text-white">27 April 2024</h3>
          <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
          <h3 className="text-white">Daftar Ulang</h3>
          <h3 className="text-white">4 Mei s.d 25 Mei 2024</h3>
        </div>

        <div className="card-shadow m-4 lg:m-12 bg-gray-700 w-[300px] lg:max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5" data-aos="zoom-in" data-aos-duration="800">
          <figure className="w-24 h-24 p-2 rounded-md mx-auto">
            <img src={Plane} alt="" className="shadow-white w-full" />
          </figure>
          <h4 className="py-2 text-white font-bold">Gelombang 2</h4>
          <h3 className="text-white">Pendaftaran</h3>
          <h3 className="text-white">1 Januari 2024 s.d 25 April 2024</h3>
          <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
          <h3 className="text-white">Penyerahan Formulir</h3>
          <h3 className="text-white">27 April 2024</h3>
          <hr className="border-b-2 border-red-600 my-4 mx-auto w-20" />
          <h3 className="text-white">Daftar Ulang</h3>
          <h3 className="text-white">4 Mei s.d 25 Mei 2024</h3>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
