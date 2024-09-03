export function Displayscreen({ output, themeValue }) {
  return (
    <div className={`screen${themeValue}`}>
      {console.log(output.length)}
      <div className="result">{`${output}`}</div>
    </div>
  );
}
