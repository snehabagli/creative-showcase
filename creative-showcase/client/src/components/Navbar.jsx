import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Creative Showcase</h2>

      <div>
        {!token && (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <button onClick={logout} style={styles.logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "linear-gradient(to right, #000, #222)",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  link: {
    marginRight: "20px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  logout: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Navbar;
