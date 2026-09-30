import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo-area">
          <div className="logo-image">
            <img
              src="/logo.png"
              alt="عدسة"
            />
          </div>

          <div className="logo-text">
            <span>عدسة</span>
            <small>عالم التصوير الفوتوغرافي</small>
          </div>
        </Link>

        <div className="desktop-menu">
          <div className="nav-links">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              من نحن
            </NavLink>

          </div>
        </div>

        <div className="desktop-actions">

          <Link to="/blog" className="search-button">
            ⌕
          </Link>

          <Link to="/blog" className="start-button">
            ابدأ القراءة
          </Link>

        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {menuOpen && (
        <div className="mobile-menu">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
          >
            المدونة
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
          >
            من نحن
          </NavLink>

          <Link
            to="/blog"
            className="start-button mobile-start"
            onClick={() => setMenuOpen(false)}
          >
            ابدأ القراءة
          </Link>

        </div>
      )}
    </nav>
  )
}

export default Navbar