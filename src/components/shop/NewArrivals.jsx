import { Newproducts } from "../../data/data";
import { logToBugfender } from "../../utils/Bugfender";
import ArrivalCard from "../Card/ArrivalCard";
import TitleCard from "../Card/TitleCard";

const NewArrivals = () => {
  const uniqueTag = new Set();

  const uniqueproducts = Newproducts.filter((product) => {
    if (uniqueTag.has(product.tag)) {
      return false;
    }
    uniqueTag.add(product.tag);
    return true;
  });

  logToBugfender('NewArrivals Component', 'Unique products:', {
    uniqueProductCount: uniqueproducts.length,
  });

  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="New Arrival" />
      <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
        {uniqueproducts?.map((product) => (
          <main key={product.id}>
            <ArrivalCard
              img={product.img}
              title={product.subtitle}
              tag={product.tag}
              category={product.category}
            />
          </main>
        ))}
      </section>
    </section>
  );
};

export default NewArrivals;
