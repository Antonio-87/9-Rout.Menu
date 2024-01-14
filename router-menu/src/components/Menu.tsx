import { NavLink } from "react-router-dom";

const Menu = () => {
  const isActiveItem = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "menu__item menu__item-active" : "menu__item";
  };

  return (
    <>
      <nav className="menu">
        <NavLink className={isActiveItem} to="/">
          Главная
        </NavLink>
        <NavLink className={isActiveItem} to="/drift">
          Дрифт-такси
        </NavLink>
        <NavLink className={isActiveItem} to="/timeattack">
          Time Attack
        </NavLink>
        <NavLink className={isActiveItem} to="/forza">
          Forza Karting
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
