import appleButton from "@/assets/app-store.png";
import googleButton from "@/assets/googleplay-badge.png";

const DownloadAppButton = () => {
  return (
    <div className="w-full flex justify-center items-start p-4 gap-x-4">
      <a href="https://apps.apple.com/us/app/getgoing/id1602015694">
        <img
          src={appleButton}
          alt="apple app store"
          className="object-contain h-[3.8rem]"
          loading="lazy"
        />
      </a>

      <a href="https://play.google.com/store/apps/details?id=com.getgoing.app">
        <img
          src={googleButton}
          alt="google play store"
          className="object-contain h-[3.5rem]"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default DownloadAppButton;
