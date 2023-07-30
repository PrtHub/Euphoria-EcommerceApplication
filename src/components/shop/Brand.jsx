import { Link } from "react-router-dom";
import Lazy from "../LazyLoading/Lazy";
import { Brands } from "../../data/data";

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
          {Brands.map((brand) => (
            <Link to={`/products/brand/${brand.brand}`} key={brand.brand}>
            <Lazy img={brand.img} className="w-44 h-20 object-cover object-center"/>
            </Link>
          ))}
        </section>
      </main>
    </section>
  );
};

export default Brand;
