import React from "react";

export default function CtaFinal() {
  const phone = "5514998409433";
  const message = "Olá, vim do site Ativacao Imediata e gostaria de saber mais sobre revenda!";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 px-[5%] bg-(--cor1) text-center text-white relative overflow-hidden">
      {/* Fundo com brilho */}
      <div className="absolute inset-0 bg-[url('/bg-cta.svg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-md">
          Pronto Para Começar?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed">
          Junte-se a milhares de assinantes satisfeitos e descubra o melhor do
          entretenimento digital com a <strong>Ativação Imediata</strong>.
        </p>

        {/* Botões principais */}
        
        <div className=" flex flex-col md:flex-row justify-center gap-6 mt-6">

          <a href="https://conectfacil.playnetapp.com/" title="Assine agora" target="_blank">
          <button className="cursor-pointer bg-white text-(--cor1) py-4 px-12 rounded-[30px] text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]">
            ASSINAR AGORA
          </button>
          </a>

          <a href={whatsappUrl} title="seja um revendedor unitv" target="_blank">
            <button className="cursor-pointer bg-transparent border-2 border-white text-white py-4 px-12 rounded-[30px] text-lg font-bold transition-all duration-300 hover:bg-white hover:text-(--cor1) hover:scale-110">
            SEJA UM REVENDEDOR
          </button>
          </a>
        </div>

        {/* Texto extra com SEO */}
        <p className="text-sm text-gray-300 mt-10 max-w-[700px] mx-auto">
          Seja um <strong>revendedor</strong> e comece a lucrar oferecendo
          o melhor serviço de <strong>recargas no Brasil</strong>. Ganhe comissões,
          tenha suporte exclusivo e cresça com uma plataforma confiável e de
          alta performance.
        </p>

        
      </div>
    </section>
  );
}