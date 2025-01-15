import scrollToView from "../functions/scrollToView";
import { Button } from "primereact/button";

export default function Hero() {
  return (
    <div className="grid grid-nogutter surface-section text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
              <span className="block text-6xl font-bold mb-1">Vital Graphics & Consultancy</span>
              <div className="text-6xl text-primary font-bold mb-3">Where Design Meets Strategy</div>
              <p className="mt-0 mb-4 text-700 line-height-3">Showcase your brand's potential with innovative designs and marketing strategies tailored to your needs.</p>

              <Button label="Explore Our Work" type="button" className="mr-3 p-button-raised" onClick={(e)=>{
                scrollToView("portfolio-section")
              }}></Button>
              <Button label="Get In Touch" type="button" className="p-button-outlined" onClick={(e)=>{
                scrollToView("contact-us-section")
              }}></Button>
          </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
          <img src="images/hero.jpg" alt="hero-1" className="md:ml-auto block" height={500} style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
      </div>
  </div>
  )
}