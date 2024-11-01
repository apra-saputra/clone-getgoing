import React from "react";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaRegClock,
} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import mockUpApp from "@/assets/MockupApp (1).png";
import appleButton from "@/assets/app-store.png";
import googleButton from "@/assets/googleplay-badge.png";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSendEmail = () => {
    window.location.href =
      "mailto:lets@getgoing.co.id?subject=Subject%20Here&body=Isi%20pesan";
  };

  return (
    <>
      <footer className="w-full h-full relative overflow-hidden bg-primary text-foreground">
        <div className="container mx-auto pt-12 w-full grid grid-cols-4 gap-x-16 w-full ">
          <div className="space-y-6 col-span-1">
            <H4Component>Informasi kontak</H4Component>

            <ul className="space-y-2">
              <LiComponent
                icon={FaLocationDot}
                className="hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={() =>
                  handleOpenNewTab("https://maps.app.goo.gl/NejLKNbChqufMaa96")
                }
              >
                BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten
                15345
              </LiComponent>
              <LiComponent icon={FaRegClock}>24/7 - Online</LiComponent>
              <LiComponent
                icon={MdMarkEmailUnread}
                className="hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={handleSendEmail}
              >
                lets@getgoing.co.id
              </LiComponent>
              <LiComponent
                icon={FaInstagram}
                className="hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={() =>
                  handleOpenNewTab("https://www.instagram.com/getgoing.co.id")
                }
              >
                @getgoing.co.id
              </LiComponent>
              <LiComponent
                icon={FaFacebook}
                className="hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={() =>
                  handleOpenNewTab("https://www.facebook.com/getgoing.co.id")
                }
              >
                @getgoing.co.id
              </LiComponent>
            </ul>
          </div>
          <div className="space-y-6 col-span-1">
            <img src={mockUpApp} alt="mockup app" />
          </div>
          <div className="space-y-6 col-span-1">
            <H4Component>Download di</H4Component>

            <div className="flex flex-col justify-start items-start gap-y-4">
              <a href="https://apps.apple.com/us/app/getgoing/id1602015694">
                <img
                  src={appleButton}
                  alt="apple app store"
                  className="object-contain h-[3.8rem]"
                />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.getgoing.app">
                <img
                  src={googleButton}
                  alt="google play store"
                  className="object-contain h-[3.5rem]"
                />
              </a>
            </div>
          </div>
          <div className="space-y-6 col-span-1">
            <H4Component>Lainnya</H4Component>
            <ul>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/syarat-dan-ketentuan"}>Syarat dan Ketentuan</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/privasi"}>Kebijakan Privasi</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/dokumentasi"}>Dokumentasi</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/penghargaan"}>Penghargaan</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/press"}>Press</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link to={"/f-a-q"}>F.A.Q</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="w-full h-full relative overflow-hidden bg-black text-foreground">
        <div className="container mx-auto w-full h-full flex items-center justify-between py-6">
          <span>
            © 2024 - Clone website:{" "}
            <a
              href="https://getgoing.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              getgoing.co.id
            </a>
            . All rights reserved.
          </span>
          <div className="flex gap-x-2">
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LiComponent = ({
  children,
  ...props
}: {
  icon: IconType;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <li
    className={cn("flex items-start space-x-3", props.className)}
    onClick={props.onClick || props.onClick}
  >
    <props.icon className="text-xl mt-1 flex-shrink-0" />
    <span className="leading-5">{children}</span>
  </li>
);

const H4Component = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold text-lg tracking-wider uppercase">{children}</h4>
);
