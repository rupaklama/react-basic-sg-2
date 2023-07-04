import classnames from "classnames";
import useNavigation from "../../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames("text-blue-500", className, currentPath === to && activeClassName);

  const onClick = e => {
    // on cmd or ctrl key click on link -  to open a page in a new window
    // In order this to work, add href={to} in 'a' tag
    if (e.metaKey || e.ctrlKey) {
      // browser will do its default thing to open a new window
      return;
    }

    // stop page refresh on clicking link
    e.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} onClick={onClick} className={classes}>
      {children}
    </a>
  );
};
export default Link;
