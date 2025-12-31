import Navbar from "../components/Navbar";

const images = Array.from({ length: 15 }).map(
  (_, i) => `https://picsum.photos/500/700?random=${i + Date.now()}`
);

function Landing() {
  return (
    <>
      <Navbar />

      <div className="landing">
        <h1>Showcase Your Creative Memories</h1>
        <p>Discover beautiful moments shared by creators</p>

        <div className="masonry">
          {images.map((img, i) => (
            <img key={i} src={img} alt="random" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
