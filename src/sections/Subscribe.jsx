import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="flex justify-between 
    items-center gap-10 flex-col lg:flex-row">
      <h3 className="text-[30px] lg:text-[36px]
      font-bold lg:w-[350px]">Sign Up for <span className="
      text-coral-red">Updates </span>
      & Newsletter</h3>
      <div className="border-slate-gray
       rounded-full border-[1px] flex 
       p-1 md:w-[550px] justify-between">
        <input type="email"
         placeholder="subscribe@nike.com"
         className="rounded-full pl-5 w-full" />
         <div className="w-[137px] md:w-[175px]">
         <Button label={'Sign Up'} addedStyles="max-sm:text-sm max-sm:px-4" />
         </div>
       
      </div>
    </section>
  )
}

export default Subscribe
