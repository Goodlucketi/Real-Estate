const Testimonial = ({clientImg, clientName, testimonial}) => {
    return ( 
        <main className="shadow-lg mb-2 p-2 md:p-4">
            <div className="p-2 md:p-4 testimonial relative">
                <img src={clientImg} alt="Client Image" className="rounded-full w-[15%] h-10 object-cover object-top" />
                <p className="font-bold clientname">{clientName}</p>
                <p className="text-lg">{testimonial}</p>
            </div>
        </main>
     );
}
 
export default Testimonial;