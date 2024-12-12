import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import Testimonial from "./Testimoial";
const Testimonials = () => {
    return ( 
        <main className="testimonials my-10">
            <div className="w-11/12 mx-auto p-2 md:p-4">
                <h2 className="text-3xl font-bold mb-3 text-blue-700 text-center my-5">What Our Clients Say About Us</h2>
                <div className="testimonial p-4 grid gap-5 md:gap-10 md:grid-cols-3">
                    <Testimonial clientImg={image1} clientName="Rose Matther" testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur provident error asperiores nemo eveniet adipisci id placeat minus recusandae."/>
                    <Testimonial clientImg={image2} clientName="Peter Daniel" testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur provident error asperiores nemo eveniet adipisci id placeat minus recusandae."/>
                    <Testimonial clientImg={image3} clientName="Uche Jonah" testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur provident error asperiores nemo eveniet adipisci id placeat minus recusandae."/>
                </div>
            </div>
        </main>
     );
}
 
export default Testimonials;