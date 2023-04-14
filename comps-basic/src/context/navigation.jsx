import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    // note - this is possible since using history.pushState() method
    // popstate event of the Window interface is fired when the active history entry changes
    // while the user navigates the session history using <-- or --> button in the browser
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = to => {
    // history.pushState() method allows you to add an entry to the web browser's session history stack
    // to navigate to a url pathname in the browser without full page reload/refresh
    window.history.pushState({}, "", to);
    // updates pathname in the browser

    // update context state on button click
    setCurrentPath(to);
  };

  return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}</NavigationContext.Provider>;
}

export { NavigationProvider };

export default NavigationContext;
