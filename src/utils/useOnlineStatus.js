import { useEffect, useState } from "react";

const useOnlineStaus = () => {
  const [onlinestatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlinestatus;
};

export default useOnlineStaus;
