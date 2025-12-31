function ImageGrid() {
  const images = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/500",
    "https://picsum.photos/300/350",
    "https://picsum.photos/300/450",
    "https://picsum.photos/300/380",
    "https://picsum.photos/300/520",
  ];

  return (
    <div style={styles.grid}>
      {images.map((img, index) => (
        <img key={index} src={img} alt="artwork" style={styles.image} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    columnCount: 3,
    columnGap: "15px",
    padding: "30px",
  },
  image: {
    width: "100%",
    marginBottom: "15px",
    borderRadius: "10px",
  },
};

export default ImageGrid;