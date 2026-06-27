import TileCard from "@/components/shared/TileCard";
import Banner from "@/components/homepage/Banner";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto space-y-10 mb-20">
      <Banner />
      <Marquee pauseOnHover speed={80} className="hover:cursor-pointer text-xl">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      <TileCard></TileCard>
    </div>
  );
}
