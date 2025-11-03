import PassoItem from './passoItem';

export default function ComoFuncionaSection() {
  const passos = [
    {
      numero: 1,
      titulo: "Escolha o Plano",
      descricao: "Selecione o plano que melhor se encaixa nas suas necessidades."
    },
    {
      numero: 2,
      titulo: "Faça o Pagamento",
      descricao: "Pague de forma segura com PIX."
    },
    {
      numero: 3,
      titulo: "Receba Seu Código",
      descricao: "Após o pagamento você receberá o seu código de recarga."
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-(--cinza)">
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-(--cor1) after:mx-auto after:mt-5 after:rounded-sm">
        Como Funciona?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {passos.map((passo, index) => (
          <PassoItem 
            key={index}
            numero={passo.numero}
            titulo={passo.titulo}
            descricao={passo.descricao}
          />
        ))}
      </div>
    </section>
  );
}