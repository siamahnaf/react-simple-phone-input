import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SelectCountry from "@/components/SelectCountry";

const Page = () => {
  return (
    <div className="xl:container xl:mx-auto py-10">
      <Header />
      <SelectCountry />
      <Footer />
    </div>
  );
};

export default Page;