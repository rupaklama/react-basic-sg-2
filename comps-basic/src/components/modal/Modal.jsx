import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onModalBGClick, actionBar }) => {
  const [portalNode] = useState(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(portalNode);
    document.body.classList.add("overflow-hidden");

    return () => {
      portalNode.remove();
      document.body.classList.remove("overflow-hidden");
    };
  }, [portalNode]);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onModalBGClick} className="fixed inset-0 bg-gray-300 opacity-80"></div>

      <div className="fixed inset-20 p-10 bg-white min-w-min">
        <div className="flex flex-col justify-between h-full overflow-x-auto">
          {children}
          <div className="flex justify-end m-4">{actionBar}</div>
        </div>
      </div>
    </div>,

    // document.querySelector(".modal-container")
    portalNode
  );
};
export default Modal;
