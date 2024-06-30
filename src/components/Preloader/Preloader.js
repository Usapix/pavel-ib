import { useEffect, useRef } from "react";

function Preloader(props) {
  const wrapper = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    if (!wrapper) return;

    wrapper.current.addEventListener("animationstart", () => {
      document.body.classList.add("off-scroll");
    });

    wrapper.current.addEventListener("animationend", () => {
      document.body.classList.remove("off-scroll");
    });
  }, []);

  return (
    <div className="preloader preloader" ref={wrapper}>
      <p className="preloader__text">
        <span
          className="preloader__text-inner preloader__text-inner--show"
          ref={text}
        >
          Pavel | IB
        </span>
      </p>
    </div>
  );
}

export default Preloader;
