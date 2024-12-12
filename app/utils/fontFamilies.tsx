import localfont from "next/font/local";

export const spaceBold = localfont({
    src: [
      {
        path: "../fonts/SpaceGrotesk-Bold.otf",
        style: "normal",
      },
    ],
    variable: "--space-Bold",
  });

  export const spaceLight = localfont({
    src: [
      {
        path: "../fonts/SpaceGrotesk-Light.otf",
        style: "normal",
      },
    ],
    variable: "--font-proxima",
  });