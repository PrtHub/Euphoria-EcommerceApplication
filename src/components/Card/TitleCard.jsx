/* eslint-disable react/prop-types */

const TitleCard = ({ title }) => {
  return (
    <main className="w-full h-full flex items-center gap-4 mb-10">
      <div className="w-1 h-6 rounded text-dark-violet bg-dark-violet" />
      <h1 className="text-black-100 font-semibold text-2xl md:text-3xl">
        {title}
      </h1>
    </main>
  );
};

export default TitleCard;