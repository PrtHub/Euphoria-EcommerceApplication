import { deal1, deal2 } from "../../assets";
import Lazy from "../LazyLoading/Lazy";

const Deals = () => {
  return (
    <section className="w-full h-full flex flex-wrap items-center justify-between gap-5 px-5 xl:px-10 py-5">
      <div className="w-[550px] h-full relative">
        <Lazy
          img={deal1}
          className="w-[550px] h-full object-cover object-center"
        />
        <article className="absolute top-20 left-20 flex flex-col gap-10 items-start justify-start text-white">
          <p className="text-2xl font-semibold ">Low Price</p>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="text-4xl font-bold">High Coziness</h1>
            <p className="text-lg">UPTO 50% OFF</p>
          </div>
          <p className="text-2xl font-semibold underline">Explore Items</p>
        </article>
      </div>
      <div className="w-[550px] h-full relative">
        <Lazy
          img={deal2}
          className="w-[550px] h-full object-cover object-center"
        />
        <article className="absolute top-20 left-20 flex flex-col gap-10 items-start justify-start text-white">
          <p className="text-2xl font-semibold ">Beyoung Presents</p>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="text-4xl font-bold">Breezy Summer <br /> Style</h1>
            <p className="text-lg">UPTO 50% OFF</p>
          </div>
          <p className="text-2xl font-semibold underline">Explore Items</p>
        </article>
      </div>
    </section>
  );
};

export default Deals;
