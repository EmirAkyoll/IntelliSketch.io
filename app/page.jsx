import { HomePageContainer } from "@/containers/home-page-container/index";
import { HomepageContextProvider } from "@/containers/home-page-container/use-homepage";

function HomePage() {
  return (
    <div>

    <HomepageContextProvider>
      <HomePageContainer />
    </HomepageContextProvider>
    </div>
  );
}

export default HomePage;