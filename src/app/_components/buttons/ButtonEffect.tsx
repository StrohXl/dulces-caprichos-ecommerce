import "./css/button-effect.css";

export default function ButtonEffect({
  children,
  classBlob = "bg-pink-700",
  classButton = "bg-rose-400",
}: {
  children?: React.ReactNode;
  classBlob?: string;
  classButton?: string;
}) {
  return (
    <div className="button-effect relative overflow-hidden">
      <div className={`blob-btn font-medium font-dm-sans ${classButton} `}>
        {children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className={`blob-btn__blob ${classBlob}`}></span>
            <span className={`blob-btn__blob ${classBlob}`}></span>
            <span className={`blob-btn__blob ${classBlob}`}></span>
            <span className={`blob-btn__blob ${classBlob}`}></span>
            <span className={`blob-btn__blob ${classBlob}`}></span>
            <span className={`blob-btn__blob ${classBlob}`}></span>
          </span>
        </span>
      </div>
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
