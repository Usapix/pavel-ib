import React, { useState, useEffect } from "react";

document.body.classList.add("disable-transition");

setTimeout(() => {
  document.body.classList.remove("disable-transition");
}, 100);

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="themeToggle"
        className="theme-toggle-checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="themeToggle" className="theme-toggle-label">
        <div className="theme-toggle-ball">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="light"
          >
            <path
              d="M-2.2293e-07 4.89996C-2.15687e-07 5.06565 0.134315 5.19996 0.3 5.19996L3.42667 5.19996C3.4758 5.47599 3.59154 5.72896 3.75669 5.94168L1.53462 8.16374C1.41746 8.2809 1.41746 8.47085 1.53462 8.58801C1.65178 8.70517 1.84173 8.70517 1.95888 8.58801L4.20279 6.3441C4.3822 6.45584 4.58395 6.53508 4.7998 6.57358L4.7998 9.7C4.7998 9.86569 4.93412 10 5.0998 10C5.26549 10 5.3998 9.86568 5.3998 9.7L5.3998 6.57375C5.63624 6.53173 5.85577 6.44083 6.04759 6.31187L8.18218 8.44646C8.29934 8.56362 8.48928 8.56362 8.60644 8.44646C8.7236 8.3293 8.7236 8.13935 8.60644 8.0222L6.47904 5.89479C6.62548 5.69217 6.72836 5.45598 6.77393 5.19996L9.7 5.19996C9.86569 5.19996 10 5.06565 10 4.89996C10 4.73428 9.86569 4.59996 9.7 4.59996L6.77389 4.59996C6.73542 4.38396 6.65616 4.18207 6.54434 4.00255L8.60569 1.94121C8.72284 1.82405 8.72284 1.6341 8.60569 1.51694C8.48853 1.39978 8.29858 1.39978 8.18142 1.51694L6.14192 3.55644C5.92911 3.39122 5.67599 3.27544 5.3998 3.22635L5.3998 0.3C5.3998 0.134314 5.26549 -2.30162e-07 5.0998 -2.2292e-07C4.93412 -2.15677e-07 4.7998 0.134314 4.7998 0.3L4.7998 3.22653C4.54401 3.27215 4.30803 3.37498 4.10556 3.52131L1.95964 1.37539C1.84248 1.25823 1.65253 1.25823 1.53537 1.37539C1.41822 1.49255 1.41822 1.6825 1.53537 1.79966L3.68848 3.95276C3.55963 4.14442 3.46877 4.36375 3.4267 4.59996L0.3 4.59996C0.134314 4.59996 -2.30172e-07 4.73428 -2.2293e-07 4.89996Z"
              fill="#25814E"
            />
          </svg>
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark"
          >
            <path
              d="M0 13.6795C2.80878 12.7875 4.84615 10.1343 4.84615 7C4.84615 3.86565 2.80878 1.21245 0 0.320463C0.65563 0.112252 1.35329 0 2.07692 0C5.90045 0 9 3.13401 9 7C9 10.866 5.90045 14 2.07692 14C1.35329 14 0.65563 13.8877 0 13.6795Z"
              fill="#25814E"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
