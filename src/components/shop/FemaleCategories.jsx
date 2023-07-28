
import CatgoryCard from "../Card/CatgoryCard"
import TitleCard from "../Card/TitleCard"
import { products } from "../../data/data"


const FemaleCategories = () => {
  const category = 'women'
 
  const womencategories = products.filter((cat) => cat.category === category)

  const uniqueTags = new Set()

  const uniqueWomencategories = womencategories.filter((cat) => {
    if(uniqueTags.has(cat.tag)) {
      return false
    } 
      uniqueTags.add(cat.tag)
      return true
  })

  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="Categories For Female" />
      <section className="w-full h-full flex items-center justify-center sm:justify-between overflow-x-scroll gap-10">
        {uniqueWomencategories?.map((cat) => (
          <main key={cat.id}>
            <CatgoryCard img={cat.img} title={cat.tag} />
          </main>
        ))}
      </section>
    </section>
  )
}

export default FemaleCategories