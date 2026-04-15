"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const CookieGate = ({ children }: { children: React.ReactNode }) => {
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const [montado, setMontado] = useState(false);
  const [modalAtivo, setModalAtivo] = useState<"termos" | "privacidade" | null>(
    null,
  );

  useEffect(() => {
    const check = localStorage.getItem("cookie_consent");
    if (check === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAcessoLiberado(true);
    }
    setMontado(true);
  }, []);

  const aceitar = () => {
    localStorage.setItem("cookie_consent", "true");
    setAcessoLiberado(true);
  };

  if (!montado) return null;

  if (!acessoLiberado) {
    return (
      <div className="fixed inset-0 z-9999 bg-white flex items-center justify-center p-6 text-black font-sans">
        <div className="max-w-md text-center flex flex-col items-center">
          <Image
            src="/icone.png"
            title="Portal de Acesso"
            alt="Security Logo"
            width={120}
            height={120}
            unoptimized
            className="object-cover mb-5 h-auto w-auto opacity-90"
            priority
          />

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-600 font-medium mb-2 border border-blue-100">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Conexão Segura
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-4 text-slate-800">
            Verificação de Segurança
          </h1>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Para garantir a integridade do seu acesso e conformidade com as
            diretrizes digitais, é necessário aceitar nossas políticas de
            navegação.
          </p>

          <button
            onClick={aceitar}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            ACEITAR E CONTINUAR
          </button>

          <div className="mt-8 flex justify-center gap-6 text-xs text-slate-400 font-medium">
            <button
              onClick={() => setModalAtivo("privacidade")}
              className="hover:text-blue-600 transition-colors"
            >
              PRIVACIDADE
            </button>
            <button
              onClick={() => setModalAtivo("termos")}
              className="hover:text-blue-600 transition-colors"
            >
              TERMOS
            </button>
            <span className="cursor-default">SEGURANÇA</span>
          </div>
        </div>

        {/* MODAL DE CONTEÚDO GENÉRICO */}
        {modalAtivo && (
          <div className="fixed inset-0 z-10000 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl p-8 max-h-[80vh] overflow-y-auto relative shadow-2xl">
              <button
                onClick={() => setModalAtivo(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-black text-xl"
              >
                ✕
              </button>

              {modalAtivo === "privacidade" ? (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Política de Privacidade
                  </h2>
                  <div className="text-sm text-slate-600 space-y-4">
                    <p>
                      Nossa plataforma preza pela segurança dos seus dados.
                      Coletamos apenas informações técnicas necessárias para a
                      validação da sua licença e segurança da transação.
                    </p>
                    <p>
                      1. <strong>Coleta de Dados:</strong> Utilizamos cookies
                      temporários para identificar sua sessão de acesso único.
                    </p>
                    <p>
                      2. <strong>Uso:</strong> Os dados são processados
                      exclusivamente para a entrega dos serviços digitais
                      solicitados.
                    </p>
                    <p>
                      3. <strong>Proteção:</strong> Implementamos criptografia
                      de ponta a ponta em todas as etapas de verificação.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold mb-4">Termos de Uso</h2>
                  <div className="text-sm text-slate-600 space-y-4">
                    <p>
                      Ao acessar este portal de serviços digitais, você concorda
                      com os seguintes termos:
                    </p>
                    <p>
                      1. <strong>Natureza do Serviço:</strong> Atuamos na
                      intermediação e ativação imediata de produtos e licenças
                      digitais.
                    </p>
                    <p>
                      2. <strong>Responsabilidade:</strong> O usuário é
                      responsável pela veracidade das informações fornecidas
                      para a entrega do código.
                    </p>
                    <p>
                      3. <strong>Entrega:</strong> A ativação ocorre de forma
                      automática após a confirmação do processamento pelo
                      sistema.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setModalAtivo(null)}
                className="mt-8 w-full bg-slate-100 py-3 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                FECHAR
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default CookieGate;
