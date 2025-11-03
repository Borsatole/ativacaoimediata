'use client';

import Image from "next/image";

interface PlanoCardProps {
  titulo: string;
  imagem?: string;
  preco: string;
  features: string[];
}

export default function PlanoCard({ titulo, preco, features, imagem }: PlanoCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl text-center transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl group">
      
      {/* Accent bar no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#4F39F6] to-[#6C55FF]"></div>
      
      {/* Título */}
      <h3 className="text-xl font-bold mb-6 text-gray-900 uppercase tracking-wide">{titulo}</h3>

      {/* Imagem */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-lg">
          <Image
            title={`Recarga Imediata - ${titulo}`}
            src={imagem || ""}
            alt="Plataforma de recarga"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Preço */}
      <div className="mb-8">
        <div className="text-4xl font-bold text-gray-900 mb-1">
          {Number(preco).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <p className="text-sm text-gray-500">pagamento único</p>
      </div>
      
      {/* Features */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <ul className="list-none space-y-3 text-left">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm"
            >
              <svg className="w-5 h-5 text-[#4F39F6] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Botões */}
      <div className="space-y-3">
        <a href="https://conectfacil.playnetapp.com/" target="_blank" rel="noopener noreferrer" title="Comprar Online" className="block">
          <button className="bg-[#4F39F6] text-white py-3.5 px-6 rounded-lg font-semibold cursor-pointer transition-all duration-300 w-full hover:bg-[#6C55FF] hover:shadow-lg text-sm uppercase tracking-wide">
            Comprar Online
          </button>
        </a>
        
        <a href="https://api.whatsapp.com/send?phone=5514998409433&text=Ol%C3%A1%2C%20gostaria%20de%20recarregar%20meu%20UniTv!" target="_blank" title="Comprar no WhatsApp" rel="noopener noreferrer" className="block">
          <button className="bg-white text-[#4F39F6] py-3.5 px-6 rounded-lg font-semibold cursor-pointer transition-all duration-300 w-full border-2 border-[#4F39F6] hover:bg-[#4F39F6] hover:text-white text-sm uppercase tracking-wide">
            Comprar no WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}