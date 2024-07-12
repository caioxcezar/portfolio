import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return {
    value: theme.value,
    changeTheme: (value) => theme.changeTheme(value),
  };
};
export default useTheme;
