import { Newproducts } from "../../data/data";
import ArrivalCard from "../Card/ArrivalCard";
import TitleCard from "../Card/TitleCard";

const NewArrivals = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="New Arrival" />
      <section className="w-full h-full flex items-center justify-center sm:justify-between overflow-x-scroll gap-10">
        {Newproducts?.map((product) => (
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
