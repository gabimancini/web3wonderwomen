import Image from "next/image";
import callToAction from "../public/call_to_action.svg";

export const CallToAction = () => {
  return (
    <div className="container m-auto mt-20 mb-20">
      <h1 className="text-center text-darkOrange text-h1 mt-20 mb-20">¡Aprende con una metodología única!</h1>
      <div className="flex m-auto bg-gradient-to-r from-lightBeige to-beige md:max-w-[1170px] p-10">
        <Image src={callToAction} alt="Call to Action" />
        <div className="pt-4 pb-4 pl-8">
          <h3 className="text-h3 text-ocre leading-10">Adquiere conocimientos<br></br> sobre DeFi de manera interactiva</h3>
          <p className="text-p pr-8">
            Sumérgete en el emocionante mundo de las finanzas descentralizadas (DeFi) y descubre cómo la tecnología
            blockchain está transformando el panorama financiero tradicional.
          </p>
        </div>
      </div>
    </div>
  );
};
