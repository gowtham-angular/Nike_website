import Nav from "./components/Nav";
import {
  Footer,
  Hero,
  SuperQuality,
  Service,
  Subscribe,
  PopularProdcuts,
  SpecialOffer,
} from "./sections";
import CustomerReviews from "./sections/CustomerReviews";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProdcuts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
