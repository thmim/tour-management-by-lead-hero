import Banner from "@/HomePageComponents/Banner";
import CounterSection from "@/HomePageComponents/CounterSection";
import DestinationCard from "@/HomePageComponents/DestinationCard";
import FAQ from "@/HomePageComponents/Faq";
import JoinUs from "@/HomePageComponents/JoinUs";
import LatestTour from "@/HomePageComponents/LatestTour";
import ReviewSection from "@/HomePageComponents/ReviewSection";
import StepProcess from "@/HomePageComponents/Step";
import TourInsightsSection from "@/HomePageComponents/TourInsightsSection";
import Video from "@/HomePageComponents/Video";
import WhyChooseSection from "@/HomePageComponents/WhyChooseSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-11/12 mx-auto">
        <DestinationCard />
        <CounterSection />
        <JoinUs />
        <LatestTour></LatestTour>
        <WhyChooseSection></WhyChooseSection>
        <TourInsightsSection></TourInsightsSection>
        <Video></Video>
        <StepProcess/>
        <ReviewSection/>
        <FAQ />
      </div>
    </div>
  );
}
 