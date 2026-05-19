import Banner from "@/components/Banner";
import Adoption from "@/components/Adoption";
import Petcare from "@/components/Petcare";
import SuccessStories from "@/components/Success";
import Patnest from "@/components/Patnest";
import CallToAction from "@/components/CallToAction";
import SimplePetFeature from "@/components/SimplePetFeature";
import Tabs from "@/components/Tabs";
export default function Home() {
  return (
    <div className=" text-slate-300 py-16 px-4 md:px-8 font-sans">
      <Banner />
      <Tabs />
      <Petcare />
      <Adoption />
      <Patnest />
      <SuccessStories />
      <SimplePetFeature />
      <CallToAction />
    </div>
  );
}
