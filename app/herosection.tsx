import Image from 'next/image'
import { HiOutlineUser } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="bg-[#F3F4F6] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
        {/* Texto */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Pague online e receba na hora com segurança
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
            Compre seu código de recarga pela nossa plataforma ou, se preferir, pelo WhatsApp.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <a
              href="https://conectfacil.playnetapp.com/" title='Area Do Cliente' target='blank'
              className="bg-(--cor1) hover:bg-(--cor2) flex items-center justify-center text-white font-medium 
              px-6 py-4 rounded-xl shadow-md transition-all duration-300 focus:ring-4 focus:ring-(--cor2) 
              w-full sm:w-auto sm:min-w-[220px]"
            >
              <HiOutlineUser className="mr-2 text-lg" />
              Área do Cliente
            </a>

           
          </div>
        </div>


        {/* Imagem */}
        <div className="mt-10 lg:mt-0 lg:col-span-6 flex justify-center">
          <Image
            src="/Plataforma.png"
            title="Logotipo Recarga Imediata"
            alt="Plataforma de recarga"
            width={500}
            height={500}
            unoptimized
            className="w-full max-w-[420px] h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
