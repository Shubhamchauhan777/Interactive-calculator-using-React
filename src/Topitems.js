export function Topitems({ themeValue, setThemeValue }) {
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
          <label for="range"></label>
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
