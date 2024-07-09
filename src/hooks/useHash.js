import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    setHash(window.location.hash);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
};
export default useHash;
