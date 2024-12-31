import { Header } from "../../components/header";
import { BandSection } from "./components/band-section";
import { MusicSection } from "./components/music-section";
import { NewRepertoireBanner } from "./components/new-repetoire-banner";
import { RecentlyPlayed } from "./components/recently-played";
import { RepertoireSection } from "./components/repertoire-section";

export const Home = () => {
  return (
    <div className="bg-primary-bg min-h-screen">
      <Header />
      <BandSection />
      <NewRepertoireBanner />
      <RepertoireSection />
      <MusicSection />
      <RecentlyPlayed />
    </div>
  );
};
