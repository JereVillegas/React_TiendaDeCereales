import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Elegí tu tipo de cereal</h3>
      <div>
        <button>Tradicionales</button>
        <button>Granola</button>
        <button>Almohaditas</button>
        <button>Integral</button>
        <button>Para niños</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
