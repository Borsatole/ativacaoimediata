'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineUser } from 'react-icons/hi'

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        {/* Logo centralizada no mobile */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/" title="Logotipo Recarga Imediata" className="flex items-center">
            <Image
              src="/LOGOROXA.png"
              title="Logotipo Recarga Imediata"
              alt="Logo da Empresa"
              width={60}
              height={60}
              unoptimized
              className="h-15 w-auto"
            />
          </Link>
        </div>

        {/* Botão Área do Cliente (só aparece em telas grandes) */}
        <div className="hidden lg:flex">
          <Link
            href="https://conectfacil.playnetapp.com/"
            title="Área do Cliente"
            className="flex items-center justify-center bg-(--cor1) hover:bg-(--cor2) text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300"
          >
            <HiOutlineUser className="mr-2 text-lg" />
            Área do Cliente
          </Link>
        </div>
      </nav>
    </header>
  )
}
