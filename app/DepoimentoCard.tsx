'use client';

interface DepoimentoCardProps {
  texto: string;
  autor: string;
  estrelas: number;
}

export default function DepoimentoCard({ texto, autor, estrelas }: DepoimentoCardProps) {
  return (
    <div className="bg-[#F3F4F6] p-7 rounded-xl border-l-4 border-(--cor1) transition-all duration-300 hover:translate-x-2.5 hover:bg-white">
      <div className="text-yellow-400 text-lg mb-4">
        {Array(estrelas).fill('★').join('')}
      </div>
      <p className="italic mb-5 leading-relaxed">{texto}</p>
      <p className="font-bold text-(--cor1)">— {autor}</p>
    </div>
  );
}