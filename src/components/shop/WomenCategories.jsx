import CatgoryCard from "../Card/CatgoryCard"
import TitleCard from "../Card/TitleCard"
import { products } from "../../data/data"
import { logToBugfender } from "../../utils/Bugfender"


const WomenCategories = () => {
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

  logToBugfender('NewArrivals Component', 'Unique products:', {
    uniqueWomencategoriesCount: uniqueWomencategories.length,
  });

  
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="Categories For Women" />
      <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
        {uniqueWomencategories?.map((cat) => (
          <main key={cat.id}>
            <CatgoryCard img={cat.img} title={cat.tag} category={category} />
          </main>
        ))}
      </section>
    </section>
  )
}

export default WomenCategories