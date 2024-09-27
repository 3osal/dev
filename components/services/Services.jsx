import MainTitle from "../mainTitle/MainTitle";
import ServicesCard from "./ServicesCard";
import { SERVICES_DATA } from "./ServicesData";



const Services = () => {
  return (
    <section id="service" className="mt-5 ">
      <MainTitle title="my services" desc="A brief of Offerting Services" />
      <div className="container">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {SERVICES_DATA.map((item)=> (
                <ServicesCard icon ={item.icon} title={item.title} desc={item.desc} key={item.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
