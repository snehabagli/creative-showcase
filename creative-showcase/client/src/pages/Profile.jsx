import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid";

function Profile() {
  const { username } = useParams();

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <h2>{username}'s Creative Showcase</h2>
        <p>Public gallery of shared artwork</p>
      </div>

      <ImageGrid />
    </div>
  );
}

export default Profile;