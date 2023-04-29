import banner from '../assets/home-bg-banner.jpg';

function Home() {
  return (
    <div>
      <div
        className="hero h-[calc(100vh-5rem)]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content text-center text-neutral-content grid items-center">
          <h1 className="text-5xl font-bold mb-4">British vs American</h1>
          <p className="text-xl">
            A website that explores the nuances of the English language
          </p>
        </div>
        <div className="hero-overlay bg-opacity-65" />
      </div>
    </div>
  );
}

export default Home;
