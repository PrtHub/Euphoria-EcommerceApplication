import CatgoryCard from "../Card/CatgoryCard";
import TitleCard from "../Card/TitleCard";
import { Categories } from "../../data/data";

const MenCategories = () => {
  const category = 'men'

  const menCategories  = Categories.filter((cat) => cat.category === category)
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="Categories For Men" />
      <section className="w-full h-full flex items-center justify-center sm:justify-between overflow-x-scroll gap-10">
        {menCategories?.map((cat) => (
          <main key={cat.id}>
            <CatgoryCard img={cat.img} title={cat.title} />
          </main>
        ))}
      </section>
    </section>
  );
};

export default MenCategories;
