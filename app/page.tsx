// IMPORT COMPONENTS
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Parallax from './components/Parallax';
import Products from './components/Products';

// UTILS IMPORT
import { getProduct } from '@/utils/fetchStripeProducts';

const Home = async () => {

  const product = await getProduct();

  return (
    <>
      <Hero />
      <Features />
      <Parallax />
      <>
        {product.map((product) => (
          <Products {...product} key={product.id} />
        ))}
      </>
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;
