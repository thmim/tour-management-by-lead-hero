import Banner from "@/HomePageComponents/Banner";
import CounterSection from "@/HomePageComponents/CounterSection";
import DestinationCard from "@/HomePageComponents/DestinationCard";
import FAQ from "@/HomePageComponents/Faq";
import JoinUs from "@/HomePageComponents/JoinUs";
import ReviewSection from "@/HomePageComponents/ReviewSection";
import StepProcess from "@/HomePageComponents/Step";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-11/12 mx-auto">
        <DestinationCard />
        <CounterSection />
        <JoinUs />
        <StepProcess/>
        <ReviewSection/>
        <FAQ />
      </div>
    </div>
  );
}
 