import Image from "next/image"
import MainTitle from "../mainTitle/MainTitle"
import { PORTOFOLIO_DATA } from "./PortofolioData"
import PortofolioCard from "./PortofolioCard"

const Portofolio = () => {
  return (
    <section id="portofolio">
        <MainTitle title='portofolio' desc='awesome work' />
        <div className="container">
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                {PORTOFOLIO_DATA.map((item)=> (
                    <PortofolioCard key={item.id} image={item.image} desc={item.desc} languages={item.languages} demo={item.demo} code={item.code} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portofolio