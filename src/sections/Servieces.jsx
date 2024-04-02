import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
function Servieces() {
  return (
    <section className="max-container flex justify-center
    flex-wrap gap-9">
      {services.map(service => {
       return   <ServiceCard 
        key={service.label}
        {...service}
        />
      })}
    </section>
  )
}

export default Servieces
