import { BsTrophy } from "react-icons/bs";

export const Compite = () => {
  return (
    <article className="p-6 border-[1px] border-lightGrey rounded-2xl self-start">
      <h4 className="text-h4 text-orangeGrey">¡Compite con otros usuarios!</h4>
      <div className="flex items-center">
        <BsTrophy fill="#68CC58" size={40} />
        <p className="text-subP text-darkGrey ml-6">Completa 3 rutas de aprendizaje para empezar a competir</p>
      </div>
    </article>
  );
};
