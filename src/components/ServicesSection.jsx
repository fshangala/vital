import Section from "./Section";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon:"pi pi-image",
      title:"Graphic Design",
      description:"Our team specializes in creating visually stunning designs, including marketing materials, infographics, posters, and social media content that effectively convey your message."
    },
    {
      icon:"pi pi-chart-bar",
      title:"Marketing Campaigns",
      description:"Our marketing strategies are tailored to meet your business objectives. We help you plan and execute campaigns that drive engagement and results."
    },
    {
      icon:"pi pi-briefcase",
      title:"Social Media Management",
      description:"Boost your online visibility with our social media expertise. We create and manage content that connects with your audience and strengthens your digital presence."
    }
  ];
  return (
    <Section id="services-section" title="Services" subtitle="At Vital Graphics and Marketing Agency, we offer a diverse range of creative and strategic solutions to elevate your brand and help you connect with your audience. Our expertise spans across the following key areas:">
      <div className="grid">
        {services.map((service,index)=>(
        <div className="col-12 md:col-4">
          <ServiceCard icon={service.icon} title={service.title} description={service.description} key={index} />
        </div>
        ))}
      </div>
    </Section>
  )
}