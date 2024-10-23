import BestSellingProducts from "./components/home/best-selling-products";
import BrowseByCategory from "./components/home/browse-by-category";
import ExploreProducts from "./components/home/explore-products";
import FlashSales from "./components/home/flash-sales";
import JBLSpeakerPromo from "./components/home/jbl-speaker-promo";
import NewArrivalSection from "./components/home/new-arrival-section";
import PromoBanner from "./components/home/promo-banner";


export default function Home() {
  return (
    <div className="">
      <PromoBanner />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <JBLSpeakerPromo/>
      <ExploreProducts/>
      <NewArrivalSection/>
    </div>
  );
}
