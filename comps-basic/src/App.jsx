import Route from "./components/Route/Route";
import Sidebar from "./components/Sidebar/Sidebar";
import AccordionPage from "./pages/AccordionPage/AccordionPage";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import DropDownPage from "./pages/DropDownPage/DropDownPage";
import ModalPage from "./pages/ModalPage/ModalPage";
import TablePage from "./pages/TablePage/TablePage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/buttons">
          <ButtonPage />
        </Route>

        <Route path="/modal">
          <ModalPage />
        </Route>

        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
};
export default App;
