import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/actions/actions";

const NavLinks = ({ toggle }) => {
  const dispatch = useDispatch();
  // const toggle = () => {
  //   toggleSidebar(dispatch);
  // };
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggle}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
