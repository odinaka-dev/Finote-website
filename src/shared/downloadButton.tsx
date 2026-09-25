import { storeLinks } from "../constants/helpers";

const DownloadButtonComp = () => {
  return (
    <div className="flex items-center gap-2 mt-8">
      {storeLinks.map((items, index) => (
        <div className="" key={index}>
          <a
            href={items.href}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <img
              src={items.image}
              alt={items.alt}
              width={135}
              height={40}
              className="w-full max-w-xl object-fit h-auto"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default DownloadButtonComp;
