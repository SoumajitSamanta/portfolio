import Image from "next/image";
import { useMobile } from "@/context/MobileContext";

const polygonClass =
  "md:w-[150px] w-[100px] md:h-[150px] h-[100px] md:m-[1.5px] m-[1px] bg-gray-800 flex justify-center items-center hover:opacity-80 transition-all duration-300";
const polygonContainerClass =
  "flex flex-inline md:mt-[-37.5px] mt-[-25px] md:ml-[-75px] ml-[-50px] even:md:ml-[1.5px] even:ml-[1px] cursor-pointer";

interface PolygonProps {
  imageUrl?: string;
  url?: string;
  tooltipText?: string; // Tooltip text to display on hover
}

export default function HexaSkills() {
  return (
    <div className="h-fit w-fit ml-[40px]">
      <div className={polygonContainerClass}>
        <Polygon
          imageUrl="./images/skills/html.svg"
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
          tooltipText="HTML"
        />
        <Polygon
          imageUrl="./images/skills/css.svg"
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
          tooltipText="CSS"
        />
        <Polygon
          imageUrl="./images/skills/javascript.svg"
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          tooltipText="JavaScript"
        />
      </div>
      <div className={polygonContainerClass}>
        <Polygon
          imageUrl="./images/skills/java.svg"
          url="https://www.java.com/en/"
          tooltipText="Java"
        />
        <Polygon
          imageUrl="./images/skills/android.svg"
          url="https://www.android.com/intl/en_in/"
          tooltipText="Android"
        />
      </div>
      <div className={polygonContainerClass}>
        <Polygon
          imageUrl="./images/skills/angular.svg"
          url="https://angular.dev/"
          tooltipText="Angular"
        />
        <Polygon
          imageUrl="./images/skills/typescriptLogoDisp.svg"
          url="https://www.typescriptlang.org/"
          tooltipText="TypeScript"
        />
       <Polygon
          imageUrl="./images/skills/react.svg"
          url="https://react.dev/"
          tooltipText="React"
        />
      </div>
      <div className={polygonContainerClass}>
      <Polygon
          imageUrl="./images/skills/github.svg"
          url="https://github.com/PaulSpaurgen"
          tooltipText="GitHub"
        />
        <Polygon
          imageUrl="./images/skills/nextjs.svg"
          url="https://nextjs.org/"
          tooltipText="Next Js"
        />
      </div>
    </div>
  );
}

function Polygon({ imageUrl, url, tooltipText }: PolygonProps) {
  const { isMobile } = useMobile();

  return (
    <div className="tooltip-container">
      <a
        className={polygonClass}
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
        href={url}
        target="_blank"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageUrl}
            width={isMobile ? 30 : 50}
            height={isMobile ? 30 : 50}
          />
        )}
      </a>
      {!isMobile && <div className="tooltip-text">{tooltipText}</div>}
    </div>
  );
}
