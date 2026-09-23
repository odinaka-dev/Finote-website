import { FinoteImages } from "../constants/image";

const DownloadButtonComp = () => {
  return (
    <div className="flex items-center gap-2 mt-8">
      {[FinoteImages.downloadApple, FinoteImages.downloadPlaystore].map(
        (items, index) => (
          <div className="" key={index}>
            <button className="cursor-pointer">
              <img
                src={items}
                alt="download_buttons"
                className="w-full max-w-xl object-fit h-auto"
              />
            </button>
          </div>
        ),
      )}
    </div>
  );
};

export default DownloadButtonComp;
