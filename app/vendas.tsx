import Card from "./card";

export default function Vendas() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Título da seção */}
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-[#4F39F6] after:mx-auto after:mt-5 after:rounded-sm">
        Recargas
      </h2>

      {/* Grid de cards */}
      <div className="max-w-[1200px] mb-20 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          titulo="Codigo Mensal"
          preco="20.00"
          imagem="un1tv.webp"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />

        <Card
          titulo="Codigo Trimestral"
          preco="55.00"
          imagem="un1tv.webp"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />

        <Card
          titulo="Codigo Anual"
          preco="130.00"
          imagem="un1tv.webp"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />
      </div>

      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-[#4F39F6] after:mx-auto after:mt-5 after:rounded-sm">
        Recargas
      </h2>

      <div className="max-w-[1200px] mb-20 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          titulo="Codigo Mensal"
          preco="15.00"
          imagem="alph4play.jpg"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />

        <Card
          titulo="Codigo Trimestral"
          preco="40.00"
          imagem="alph4play.jpg"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />

        <Card
          titulo="Codigo Anual"
          preco="110.00"
          imagem="alph4play.jpg"
          features={[
            "Recarga na hora",
            "Envio automático imediato",
            "2 dispositivos simultâneos",
            "Filmes e séries on demand",
            "Suporte via WhatsApp",
          ]}
        />
      </div>
    </section>
  );
}
