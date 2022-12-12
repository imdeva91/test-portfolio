import CardImg from  "./component/card/Card";
import CenterCard from "./component/MiddimCard/CenterCard";
import CarouselImage from "./component/carousel/Carousel";
import Header from "./component/Header/Header"
function App() {
  return (
    <div className="app">
      <Header/>
      <CarouselImage/>
      <CardImg/>
      <CenterCard/>
    </div>
  );
}

export default App;
