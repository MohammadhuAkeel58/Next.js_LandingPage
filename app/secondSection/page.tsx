

'use client'

import React from "react"
import Image from "next/image"


const features = [
    {
        name: "Hand Purse",
        description:
          "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories which encompassed garments such as bracelets shoulder bags scarves and coats.",
        image: "/images/logo/img1.webp",
        alt: "",
        color: "blue"
      },
      {
        name: "Cosmetics",
        description:
          "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories, which encompassed garments such as bracelets, shoulder bags, scarves and coats.",
        image: "/images/logo/img2.jpeg",
        alt: "Customizable",
      },
      {
        name: "Perfumes",
        description:
          "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories, which encompassed garments such as bracelets, shoulder bags, scarves and coats.",
        image: "/images/logo/img3.jpeg",
        alt: "Customizable",
      },
      {
        name: "Shoes",
        description:
          "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories, which encompassed garments such as bracelets, shoulder bags, scarves and coats",
        image: "/images/logo/img4.jpeg",
        alt: "Customizable",
      },
      {
        name: "Sunglasses",
        description:
          "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories, which encompassed garments such as bracelets, shoulder bags, scarves and coats",
        image: "/images/logo/img5.jpg",
        alt: "Customizable",
      },
      {
        name: "Jackets",
        image: "/images/logo/img6.jpeg",
        description: "In 2013, the UK's Intellectual Property Office issued a ruling that Gucci had lost the rights to its GG trademark in the UK to a version of the GG logo in four categories, which encompassed garments such as bracelets, shoulder bags, scarves and coats",
        alt: "Customizable",
      },
    ]

const SecondSection = () => {
    return ( 
    <div className="">
        <div className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
        
        ">
            <div className="p-5 justify-center md:w-1/3">
                <div className="
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10
                
                ">
                    Enjoy and wear the Best things, Gucci has every type of business.

                </div>
                <div className="text-2xl mb-8">
                 Explore best products at ones

                </div>
                <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                        Explore
                </button>
                </div>
                

                <video className="rounded-xl md:w-2/5 p-4 md:p-0  "  autoPlay muted loop >
                    <source src="/content/GUCCI2.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col items-center justify-center">
                <div className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent

                
                
                ">
                        Gucci Special


                </div>

                <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
                    {features.map((feature, index) => (
                        <div
                        key={index}
                        className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
                        >
                            <div className="
                            text-gray-600 text-3xl font-bold
                            ">
                                <Image
                                src={feature.image}
                                alt={feature.alt}
                                width={300}
                                height={300}
                                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                />
                                <div>
                                    <div className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    ">{
                                    feature.name}
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                                        {feature.description}




                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>



  );
}
 
export default SecondSection;