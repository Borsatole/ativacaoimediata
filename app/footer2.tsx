import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const palavrasChave = [
    "Recarga Menor Preço",
    "Recarga Menor Valor",
    "Recarga Imediata",
    "Baixar Recarga",
    "Canais ao Vivo",
    "Filmes e Séries Online",
    "Assinatura Recarga",
    "Recarga Via E-mail",
    "Teste 3 dias",
    "Revendedor",
    "Recarga Imediata",
    "Promocao Recarga",
    "Recarga Anual",
    "Recarga Mensal",
    "Recarga Trimestral",
    "Recarga Semestral",
    "Recarga Menor Preço",
    "Recarga Menor Valor",
    "Recarga Imediata",
    "Baixar Recarga",
  ];

  return (
    <footer className="bg-(--cinza) py-16 px-[5%] text-center text-(--cor1)">
      <div className="max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logotipo_roxa.png"
            title="Logotipo Recarga Imediata"
            alt="Plataforma de recarga"
            width={150}
            height={150}
            unoptimized
            className="object-cover cursor-pointer"
          />
        </div>

        {/* Links principais */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {[
            "Sobre",
            "Planos",
            "Suporte",
            "Termos de Uso",
            "Privacidade",
            "Contato",
          ].map((item, index) => (
            <a
              title={item}
              key={index}
              href="#"
              className="no-underline transition-colors duration-300 hover:text-(--cor2)"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-8 mb-8 flex-wrap">
          {/* Redes sociais */}
          <div className="flex justify-center gap-5 my-8">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-(--cor1) rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-(--cor2) hover:-translate-y-1"
                >
                  <Icon className="text-white text-lg" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bloco de SEO invisível (sem parecer spam) */}
        <div className="mt-10 text-xs text-gray-600 max-w-[900px] mx-auto leading-relaxed">
          <p>
            A Ativação Imediata oferece{" "}
            <strong>códigos de recarga com ativação imediata</strong>,
            garantindo que você tenha acesso ao seu crédito em instantes.
            Experimente a praticidade de recarregar rapidamente, com segurança e
            confiabilidade. Nossos planos incluem opções mensais e anuais,
            oferecendo excelente custo-benefício para manter suas recargas
            sempre em dia.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {palavrasChave.map((termo, index) => (
              <span
                key={index}
                className="bg-(--cor1)/10 text-gray-500 px-3 py-1 rounded-full text-xs hover:text-(--cor1) cursor-default"
              >
                {termo}
              </span>
            ))}
          </div>
          {/* Texto institucional */}
          <p className="text-gray-500 mt-6 text-sm">
            {`
          ${new Date().getFullYear()} Recarga Imediata. Todos os direitos reservados.
          `}
          </p>
        </div>
      </div>
    </footer>
  );
}
