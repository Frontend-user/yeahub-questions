import classes from "./UiRoutes.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface UiRoute {
  id: number;
  name: string;
  to: string;
  isActive: boolean;
}

interface UiRoutesProps {
  routes: UiRoute[];
}

const UiRoutes = ({ routes }: UiRoutesProps) => {
  return (
    <div className={classes.uiRoutes}>
      <div className={classes.uiRoutesList}>
        {routes.map((route) => (
          <NavLink
            to={route.to}
            key={route.id}
            className={classNames(classes.uiRoutesItem, {
              [classes.uiRouteItemActive]: route.isActive,
            })}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default UiRoutes;
