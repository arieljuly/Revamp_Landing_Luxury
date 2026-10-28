import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { LogoMarquee } from "@/components/logo-marquee";
import { NavBar } from "@/components/nav-bar";
import { PhotoGallery } from "@/components/photo-gallery";
import { SearchListing } from "@/components/search-listing";
import { Service } from "@/components/service";
import { Who } from "@/components/who";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Who />
      <SearchListing />
      <PhotoGallery />
      <Service />
      <LogoMarquee />
      <CallToAction />
      <Location />
      <Footer />
    </main>
  );
}
