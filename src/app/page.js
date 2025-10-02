import Banner from "@/HomePageComponents/Banner";
import CounterSection from "@/HomePageComponents/CounterSection";
import DestinationCard from "@/HomePageComponents/DestinationCard";
import FAQ from "@/HomePageComponents/Faq";
import JoinUs from "@/HomePageComponents/JoinUs";

export default function Home() {
  return (
    <div>
    <Banner></Banner>
    <DestinationCard></DestinationCard>
    <CounterSection></CounterSection>
    <JoinUs></JoinUs>
    <FAQ></FAQ>
    </div>
    
  );
}
