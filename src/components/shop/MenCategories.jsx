import CatgoryCard from "../Card/CatgoryCard";
import TitleCard from "../Card/TitleCard";
import { ManCategories } from "../../data/data";

const MenCategories = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-5">
      <TitleCard title="Categories For Men" />
     <section className="w-full h-full flex flex-wrap items-center justify-between overflow-hidden gap-10">
      {ManCategories?.map((cat) => (
        <main key={cat.id} className="w-[270px] h-[460px]">
          <CatgoryCard img={cat.img}  title={cat.title}/>
        </main>
      ))}
      </section>
    </section>
  );
};

export default MenCategories;
