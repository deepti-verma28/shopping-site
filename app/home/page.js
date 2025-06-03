import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
