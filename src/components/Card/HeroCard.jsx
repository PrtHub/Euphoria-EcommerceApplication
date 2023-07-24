import { Banner } from "../../assets"
import Lazy from "../LazyLoading/Lazy"


const HeroCard = () => {
  return (
    <div className="w-full h-full relative">
       <Lazy img={Banner} alt="" className="w-[1920px] h-[800px] object-cover object-center"/>
      </div>
  )
}

export default HeroCard