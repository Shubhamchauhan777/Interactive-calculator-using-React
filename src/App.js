import { useState } from "react";
const { Parser } = require("expr-eval");
function App() {
  const [themeValue, setThemeValue] = useState(1);
  return (
    <div className={`App theme${themeValue}`}>
      <MainContainer themeValue={themeValue} setThemeValue={setThemeValue} />
    </div>
  );
}

function MainContainer({ themeValue, setThemeValue }) {
  const [output, setoutput] = useState(0);
  return (
    <div className="main-container">
      <Topitems themeValue={themeValue} setThemeValue={setThemeValue} />
      <Displayscreen output={output} themeValue={themeValue} />
      <Dialpad setoutput={setoutput} output={output} themeValue={themeValue} />
    </div>
  );
}

function Topitems({ themeValue, setThemeValue }) {
  function handleTheme(e) {
    console.log(e.target.value);
    const newValue = Number(e.target.value);
    setThemeValue(newValue);
  }

  return (
    <div className="top-container">
      <h4>calc</h4>
      <div className="top-theme-container">
        <span>THEME</span>
        <div className="theme-options">
          <div className="slider-value">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <input
            type="range"
            className={`range-btn${themeValue}`}
            value={themeValue}
            min={1}
            max={3}
            step={1} // Step value to move between integers
            onChange={handleTheme}
          />
        </div>
      </div>
    </div>
  );
}

function Displayscreen({ output, themeValue }) {
  return (
    <div className={`screen${themeValue}`}>
      {console.log(output.length)}
      <div className="result">{`${output}`}</div>
    </div>
  );
}

function Dialpad({ setoutput, output, themeValue }) {
  return (
    <div className={`dial-pad${themeValue}`}>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        7
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        8
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        9
      </Button>
      <Button
        cname={`special-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        DEL
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        4
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        5
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        6
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        +
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        1
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        2
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        3
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        -
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        .
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        0
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        /
      </Button>
      <Button
        cname={`num-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        x
      </Button>
      <Button
        cname={`reset-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        RESET
      </Button>
      <Button
        cname={`calculate-btn${themeValue}`}
        setoutput={setoutput}
        output={output}
      >
        =
      </Button>
    </div>
  );
}

function Button({ cname, children, setoutput }) {
  function handleOutput(e) {
    const value = e.target.value;

    if (value === "=") {
      setoutput((val) => {
        try {
          let input = val;
          console.log(input);
          let result = Parser.evaluate(input.replace("x", "*"));
          return result.toString();
        } catch (e) {
          alert("Invalid input please try again");
          setoutput(0);
        }
      });
    } else if (value === "RESET") {
      setoutput(() => 0);
    } else if (value === "DEL") {
      setoutput((val) => (val.length > 0 ? val.slice(0, -1) : val));
    } else {
      setoutput((val) => (val === 0 || val === "0" ? value : val + value));
    }
  }
  return (
    <button className={cname} value={children} onClick={handleOutput}>
      {children}
    </button>
  );
}
export default App;
