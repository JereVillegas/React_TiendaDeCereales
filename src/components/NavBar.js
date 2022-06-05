import "./styles/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <CartWidget />
      <nav>
        <button>
          <a href="#">Tradicional</a>
        </button>
        <button>
          <a href="#">Granola</a>
        </button>
        <button>
          <a href="#">Almohaditas</a>
        </button>
        <button>
          <a href="#">Integral</a>
        </button>
        <button>
          <a href="#">Niños</a>
        </button>
        <input type="search" placeholder="Buscar..." aria-label="Search" />
      </nav>
    </div>
  );
};
export default NavBar;
