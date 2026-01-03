import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("token");

  const loadImages = async () => {
    const res = await fetch("https://creative-showcase-fuw5.onrender.com/api/images", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const uploadImage = async () => {
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", file);

    await fetch("https://creative-showcase-fuw5.onrender.com/api/images/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    setFile(null);
    loadImages();
  };

  const deleteImage = async (id) => {
    await fetch(`https://creative-showcase-fuw5.onrender.com/api/images/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadImages();
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="upload-card">
          <h2>Your Creative Dashboard</h2>
          <p>Upload and manage your memories</p>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={uploadImage}>Upload Image</button>
        </div>

        <div className="image-grid">
          {images.map((img) => (
            <div key={img._id} className="img-card">
              <img src={`https://creative-showcase-fuw5.onrender.com${img.imageUrl}`} alt="" />
              <button onClick={() => deleteImage(img._id)}>Delete</button>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "40px", color: "#888" }}>
            No uploads yet. Start creating
          </p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
