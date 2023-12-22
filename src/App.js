import "./App.css";
import Form from "./components/form";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Rating from "./components/Rating";
import Culture from "./components/Culture";
import Highlights from "./components/Highlights";
import Highlights2 from "./components/Highlights2";
import Map from "./components/Map";
import Scroll from "./components/Scroll";
import Update from "./components/Update";
import Cardbutton from "./components/Cardbutton";
import Recent from "./components/Recent";
import Black from "./components/Black";
import Adventure from "./components/Adventure";
import FooterLinks from "./components/FooterLinks";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Carousel />
      <div className="row">
        <div className=" px-5 py-3 col-md-8">
          <div className="px-3">
            <Description />
          </div>
        </div>

        <div className=" p-5 col-md-4">
          <Form />
        </div>
      </div>

      <hr class="hr" />
      <div className="px-5 py-3">
        <div className="px-3">
          <Card />
          <Cardbutton />
        </div>
      </div>
      <hr class="hr" />

      <Culture />

      <hr class="hr" />

      <div className="row ">
        <div className=" px-5 py-3 col-md-7">
          <div className="px-3">
            <Highlights />
          </div>
        </div>

        <div className="  col-md-5">
          <div className="px-5 py-5">
            <Highlights2 />
          </div>
        </div>
      </div>

      {/* <div className="py-5">
        <Map />
      </div> */}
      <hr class="hr" />
      <div className="p-5">
        <Scroll />
      </div>

      <div className="pb-3 col-md-12">
        <Update />
      </div>
      <hr class="hr" />
      <div className="px-3 py-3">
        <Recent />
      </div>
      <hr class="hr" />
      <Black />
      <Adventure />
      {/* <FooterLinks  /> */}
      <FooterLinks />
    </div>
  );
}

export default App;
