import { hm, levi, nike, puma, usPolo } from "../../assets";
import Lazy from "../LazyLoading/Lazy";

const Brand = () => {
  return (
    <section className="w-full h-full px-5 xl:px-10 py-10">
      <main className="w-full h-fit bg-black-100 flex flex-col items-center justify-center gap-10 rounded-md px-10 py-20">
        <section className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold">Top Brands Deal</h1>
          <p className="text-base text-white font-normal">
            Up To <span className="text-[#FBD103]">60%</span> off on brands
          </p>
        </section>
        <section className="flex items-center justify-center gap-5">
          <Lazy img={nike} className="w-44 h-20 object-cover object-center"/>
          <Lazy img={hm} className="w-44 h-20 object-cover object-center"/>
          <Lazy img={levi} className="w-44 h-20 object-cover object-center"/>
          <Lazy img={usPolo} className="w-44 h-20 object-cover object-center"/>
          <Lazy img={puma} className="w-44 h-20 object-cover object-center"/>
        </section>
      </main>
    </section>
  );
};

export default Brand;
