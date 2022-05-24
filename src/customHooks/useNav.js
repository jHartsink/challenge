import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../Context/NavContext";

export const UseNav = (navLinkId) => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};
