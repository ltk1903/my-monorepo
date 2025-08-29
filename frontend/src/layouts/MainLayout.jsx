import { Outlet } from "react-router-dom";
import "../assets/styles/MainLayout.css"; 

const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Parking System</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>

      {/* Nội dung chính */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Parking System</p>
      </footer>
    </div>
  );
};

export default MainLayout;
