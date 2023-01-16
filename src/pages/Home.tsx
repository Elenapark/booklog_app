import Banner from "../components/Banner";
import Recommended from "./Recommended";

export default function Home() {
  return (
    <main>
      <Banner
        src="/images/banner2.jpg"
        title="banner"
        text="Write down what you read."
      />
      <Recommended />
    </main>
  );
}
