import { Femalecategories } from "../../data/data"
import CatgoryCard from "../Card/CatgoryCard"
import TitleCard from "../Card/TitleCard"


const FemaleCategories = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="Categories For Female" />
      <section className="w-full h-full flex items-center justify-center sm:justify-between overflow-x-scroll gap-10">
        {Femalecategories?.map((cat) => (
          <main key={cat.id}>
            <CatgoryCard img={cat.img} title={cat.title} />
          </main>
        ))}
      </section>
    </section>
  )
}

export default FemaleCategories