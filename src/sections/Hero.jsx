import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import {arrowRight} from '../assets/icons'
import {statistics, shoes} from '../constants'
import { bigShoe1 } from "../assets/images"
import { useState } from "react"
function Hero() {
  const [currentHeroImg, setCurrentHeroImg] = useState(bigShoe1)
  return (
    <section
    id='home'
    className="w-full flex xl:flex-row flex-col gap-10
    justify-center p-2 min-h-screen gap max-container"
    >
      <div className="xl:w-2/5 flex flex-col 
      justify-center items-start w-full 
      max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat
        text-coral-red ">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin md:text-8xl
        text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap
          relative pr-10 z-1">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block
          mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray
         text-lg mt-6 mb-14 sm:max-w-sm leading-8">Discover flajfljflajflaj
           klflajflaj akfjd</p>
           <Button label="Show now"
           iconURL={arrowRight} />
           <div className="flex justify-start items-start
           flex-wrap w-full mt-20 gap-16">
              {
                statistics.map((stat)=> (
                  <div key={stat.label}>
                    <p className="text-4xl 
                    font-palanquin
                    font-bold">{stat.value}</p>
                    <p className="leading-7
                    text-slate-gray
                    font-montserrat">{stat.label}</p>
                  </div>
                ))
              }
           </div>
      </div>
      <div className="relative lg:-top-[8px] flex-1 flex
       justify-center items-center min-h-screen 
       bg-primary bg-hero bg-cover bg-center
        xl:min-h-screen">
        <img 
        src={currentHeroImg} 
        alt="shoe collection" 
        className="object-obtain w-[27rem] relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%] max-sm:px-6">
              {
                shoes.map((shoe) => {
                  return <div className=" flex
                  justify-center items-center
                   bg-card bg-cover sm:w-40 sm:h-40 rounded-xl
                  bg-center" key={shoe.thumbnail}>
                    <ShoeCard 
                    imgURL={shoe.thumbnail}
                    // changeBigShoeImage={(bigImg) => {setCurrentHeroImg(bigImg)}}
                    changeBigShowImage={setCurrentHeroImg}
                    bigShoeImg={shoe.bigShoe}
                    currentHeroImg={currentHeroImg}
                    />
                  </div>
})
              }
        </div>
      </div>
    </section>
  )
}

export default Hero
