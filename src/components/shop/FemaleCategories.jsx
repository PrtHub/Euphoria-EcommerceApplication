import { Femalecategories } from "../../data/data"
import CatgoryCard from "../Card/CatgoryCard"
import TitleCard from "../Card/TitleCard"


const FemaleCategories = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10">
      <TitleCard title="Categories For Female" />
      <section className="w-full h-full flex flex-wrap items-center justify-between overflow-hidden gap-10">
        {Femalecategories?.map((cat) => (
          <main key={cat.id} className="w-[270px] h-[460px]">
            <CatgoryCard img={cat.img} title={cat.title} />
          </main>
        ))}
      </section>
    </section>
  )
}

export default FemaleCategories