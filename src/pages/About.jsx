const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <div>
          <h1 className="leading-none text-4xl font-bold tracking-tight">
            We Love
          </h1>
        </div>
        <div className="stats shadow bg-primary">
          <div className="stat">
            <div className="stat-title tracking-widest text-primary-content text-4xl font-bold">
              ZioShop
            </div>
          </div>
        </div>
      </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae vero quae maxime inventore magnam nam maiores quidem. Excepturi architecto repellat quidem adipisci consequatur assumenda voluptas? Fugiat labore doloremque quam nihil!</p>
    </>
  );
};

export default About;
