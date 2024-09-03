import { useState } from "react";
import { MainContainer } from "./MainContainer";
function App() {
  const [themeValue, setThemeValue] = useState(1);
  return (
    <div className={`App theme${themeValue}`}>
      <MainContainer themeValue={themeValue} setThemeValue={setThemeValue} />
    </div>
  );
}

export default App;
