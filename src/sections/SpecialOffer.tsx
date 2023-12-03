import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red mt-3 inline-block mr-5">Special</span>
          <span className="mt-3 inline-block mr-5">Offers</span>
        </h2>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex gap-4 flex-wrap">
          <Button
            backgroundColor=""
            borderColor=""
            fullWidth=""
            textColor=""
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconURL=""
            fullWidth=""
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
