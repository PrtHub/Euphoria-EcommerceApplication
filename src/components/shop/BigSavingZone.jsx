import TitleCard from "../Card/TitleCard"


const BigSavingZone = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10">
    <TitleCard title="Big Saving Zone"/>
    <main className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        <section className="">Hawai</section>
        <section className="">printed</section>
        <section className="">cargo</section>
        <section className="">urban</section>
        <section className="">oversized</section>
      </main>
  </section>
  )
}

export default BigSavingZone