

const ContentWrapper = ({ Component }) => 
    function HOC() {
  return (
    <section className="w-full h-full px-5 sm:px-10  py-5 sm:py-10">
        <Component/>
    </section>
  )
}

export default ContentWrapper