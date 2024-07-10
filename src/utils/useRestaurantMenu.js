import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurnatMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fethData();
  }, []);

  const fethData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurnatMenu;
