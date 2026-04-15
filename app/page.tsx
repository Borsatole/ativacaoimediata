import ComoFuncionaSection from "./ComoFuncionaSection";
import DepoimentosSection from "./DepoimentosSection";
import Footer from "./footer2";
import Header from "./header";
import Hero from "./herosection";
import CookieGate from "./cokieGate";
import CtaFinal from "./Revendedor";
import Vendas from "./vendas";
import WhatsappButton from "./WhatsappButton";

export default function Home() {
  return (
    <>
      {/* <CookieGate> */}
      <WhatsappButton
        phone="5514998409433"
        message="Olá, vim do site Ativacao Imediata e gostaria de recarregar meu aplicativo!"
      />
      <Header />
      <Hero />
      <Vendas />
      <ComoFuncionaSection />
      <DepoimentosSection />
      <CtaFinal />
      <Footer />
      {/* </CookieGate> */}
    </>
  );
}
