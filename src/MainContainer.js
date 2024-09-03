import { useState } from "react";
import { Dialpad } from "./Dialpad";
import { Displayscreen } from "./Displayscreen";
import { Topitems } from "./Topitems";

export function MainContainer({ themeValue, setThemeValue }) {
  const [output, setoutput] = useState(0);
  return (
    <div className="main-container">
      <Topitems themeValue={themeValue} setThemeValue={setThemeValue} />
      <Displayscreen output={output} themeValue={themeValue} />
      <Dialpad setoutput={setoutput} output={output} themeValue={themeValue} />
    </div>
  );
}
