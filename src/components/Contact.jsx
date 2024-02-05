import React from 'react';
import phone from '../assets/phone-icon.png';
import mail from '../assets/mail-icon.png';

function Contact() {
  return (
    <div>
      <h2 className='font-bold text-3xl bg-black text-white py-10'>HUBUNGI KAMI</h2>
      <hr className='border-b-2 border-red-500 my-1' />

      <h3 className='text-4xl font-semibold pt-20'>SMP Mitra Bintaro Islamic School</h3>
      <hr className='border-b-2 border-red-600 my-4 mx-auto w-20 mb-20' />
      <p className='text-2xl text-center'>Jl. Japos Raya Pondok Jati No.45B, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15233</p>

      <div className='flex justify-center font-semibold text-xl gap-10 px-4 lg:px-24 py-10 lg:flex-row flex-col items-center'>

        <div className='icon flex flex-col font-bold items-center lg:mb-0 mb-6'>
          <img src={phone} className='w-20 h-20' alt="" />
          <div className='mt-2'>
          <a href="https://wa.me/6281234567890">082169462242 / </a>
          <a href="https://wa.me/6287809270299">087809270299 / </a>
          <a href="https://wa.me/6289513606272">089513606272</a>



          </div>
        </div>

        <div className='icon flex flex-col font-bold items-center'>
          <img src={mail} className='w-20 h-20' alt="" />
          <a className='mt-2 hover:text-red-500 cursor-pointer text-md'>smp.mitrabintaroislamicschool@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
