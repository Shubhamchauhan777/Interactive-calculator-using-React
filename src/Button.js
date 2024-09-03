import { Parser } from "expr-eval";

export function Button({ cname, children, setoutput }) {
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
