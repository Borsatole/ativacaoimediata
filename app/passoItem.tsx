interface PassoItemProps {
  numero: number;
  titulo: string;
  descricao: string;
}

export default function PassoItem({ numero, titulo, descricao }: PassoItemProps) {
  return (
    <div className="text-center relative">
      <div className="w-20 h-20 bg-linear-to-r from-(--cor1) to-(--cor2) rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-5 text-white">
        {numero}
      </div>
      <h3 className="text-xl mb-4">{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}