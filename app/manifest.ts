import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Growth Edge — Insurance Advisory",
    short_name: "Growth Edge",
    description:
      "Expert insurance advisory services in India. Health, life & motor insurance plans. Free consultation.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EB",
    theme_color: "#4A5D4A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["finance", "insurance", "health"],
    lang: "en-IN",
  };
}
