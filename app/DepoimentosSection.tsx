import DepoimentoCard from './DepoimentoCard';

export default function DepoimentosSection() {
  const depoimentos = [
    {
      texto: "Plataforma muito facil de usar, recomendo para quem precisa comprar codigos de recarga rápido.",
      autor: "Mariana Ribeiro",
      estrelas: 5
    },
    {
      texto: "Qualidade excelente e preço justo. O suporte é muito atencioso, nossa experiencia foi excelente.",
      autor: "João Paulo G",
      estrelas: 5
    },
    {
      texto: "Já é a melhor plataforma que encontrei, recomendo para quem precisa comprar codigos de recarga rápido.",
      autor: "Ana Lima da Costa",
      estrelas: 5
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-white">
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-(--cor1) after:mx-auto after:mt-5 after:rounded-sm">
        O Que Nossos Clientes Dizem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {depoimentos.map((depoimento, index) => (
          <DepoimentoCard 
            key={index}
            texto={depoimento.texto}
            autor={depoimento.autor}
            estrelas={depoimento.estrelas}
          />
        ))}
      </div>
    </section>
  );
}