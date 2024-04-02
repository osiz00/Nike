import ReviewCard from "../components/Reviews"
import { reviews } from "../constants"


function CustomerReviews() {
  return (
    <section className="max-container ">
        <h3  className="font-palanquin text-center 
        text-4xl font-bold">
          What Our 
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg
        text-center">Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit. 
          amet consectetur adipisicing elit. 
           sapiente ipsum labore, optio voluptas?</p>
           <div className="mt-10 flex flex-1 
           justify-evenly items-center 
           max-lg:flex-col gap-14 ">
            {reviews.map(review => {
              return <div key={review.customerName}>
                <ReviewCard
                 {...review}
                 />
                </div>
            })}
           </div>
    </section>
  )
}

export default CustomerReviews
