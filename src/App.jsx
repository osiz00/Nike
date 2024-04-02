import {
  CustomerReviews, Hero, Footer, PopularProducts, Servieces,
  Subscribe, SuperQuality, SpecialOffers
} from './sections'
import Nav from './components/Nav'
const App = ()  => {
  return (
      <main className="relative">
        <Nav/>
        <section className="xl:px-16
        wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding-x py-10">
          <SuperQuality/>
        </section>
        <section className="padding">
          <Servieces/>
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews/>
        </section>
        <section className="padding-x 
        sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </main>
  )
}

export default App
