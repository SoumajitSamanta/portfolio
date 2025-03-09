import { useState, useEffect } from "react";
import ContactModal from "../Modals/ContactModal";
import { useAppContext } from "@/context/AppContext";

interface NavProps {
  activeIndex: number; // Accept activeIndex as a prop
}

export default function Nav({ activeIndex }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveIndex, swiper } = useAppContext();
  const commonClasses = "text-white nav-link text-sm md:text-md";

  const onmouseoverEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("nav-link-out");
  };

  const onmouseoutEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("nav-link-out");
  };

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    swiper?.slideTo(index);
  };

  return (
    <div className="fixed z-20 h-fit bottom-[80px] md:top-0 w-full md:bg-transparent bg-white/10">
      <nav className="absolute w-full">
        <div className="relative flex md:gap-8 gap-4 items-center p-8 justify-center">
          <div
            className={`${commonClasses} ${activeIndex === 0 ? "nav-link-active" : ""}`}
            onMouseOver={onmouseoverEvent}
            onMouseOut={onmouseoutEvent}
            onClick={() => handleNavClick(0)}
          >
            <h1>Home</h1>
          </div>

          <div
            className={`${commonClasses} ${activeIndex === 1 ? "nav-link-active" : ""}`}
            onMouseOver={onmouseoverEvent}
            onMouseOut={onmouseoutEvent}
            onClick={() => handleNavClick(1)}
          >
            <h1>Experience</h1>
          </div>

          <div
            className={`${commonClasses} ${activeIndex === 2 ? "nav-link-active" : ""}`}
            onMouseOver={onmouseoverEvent}
            onMouseOut={onmouseoutEvent}
            onClick={() => handleNavClick(2)}
          >
            <h1>Skills</h1>
          </div>

          <div
            className={`${commonClasses} ${activeIndex === 3 ? "nav-link-active" : ""} relative`}
            onMouseOver={onmouseoverEvent}
            onMouseOut={onmouseoutEvent}
            onClick={() => setIsOpen(true)}
          >
            <h1>Contact</h1>
          </div>

          <div
            className={`${commonClasses} ${activeIndex === 4 ? "nav-link-active" : ""}`}
            onMouseOver={onmouseoverEvent}
            onMouseOut={onmouseoutEvent}
          >
            <a
              href="https://drive.google.com/file/d/1CO6jzAlIMd6KZthw-Sa7Yzqd-_f9Gw_9/view?usp=drivesdk"
              target="_blank"
            >
              <h1>Resume</h1>
            </a>
          </div>

          <ContactModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
}
