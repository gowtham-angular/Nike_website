import Button from "../components/Button";
import {shoe8} from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <span className="text-coral-red mt-3 inline-block mr-5"> Super</span>
          <span className="text-coral-red mt-3 inline-block mr-5">
            {" "}
            Quality
          </span>
          Shoes
        </h2>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Ensuring premius comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          qulaity, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Our dedication to detail and excellence ensure your satisfaction.</p>

       <div className="mt-11">
       <Button label="View Details" iconURL="" />
       </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />

      </div>
    </section>
  );
};

export default SuperQuality;
