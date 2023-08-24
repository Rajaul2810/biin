import React from "react";
import partner from "../../../public/partner.png";
import partner1 from "../../../public/partner1.png";
import partner2 from "../../../public/partner2.png";
import partner3 from "../../../public/partner3.png";
import partner4 from "../../../public/partner4.png";
import Image from "next/image";

const partners = [
    {
        id:1,
        image:partner
    },
    {
        id:2,
        image:partner1
    },
    {
        id:3,
        image:partner2
    },
    {
        id:4,
        image:partner3
    },
    {
      id:5,
      image:partner4
  },
]

const Partner = () => {
  return (
    <section className="pt-10 pb-14 bg-white">
      <h1 className=" text-2xl text-center font-bold pb-5">Our Partners</h1>
      <div>
        <div className=" flex justify-center">
          <div className=" w-11/12 md:w-3/4 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {partners.map((item) => (
              <div
                key={item.id}
                className="mt-5"
              >
                <Image src={item.image} alt="partner" height={100} width={100}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
