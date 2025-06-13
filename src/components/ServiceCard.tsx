import React from "react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, image }) => {
  return (
    <div
      className="rounded-md shadow-xl bg-white p-3 w-[264px] h-[320px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.05]"
      style={{
        boxShadow: "0 0 30px rgba(197, 162, 83, 0.2)",
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover rounded-sm mb-2"
      />
      <div>
        <h3 className="text-lg font-bold text-black leading-tight">{title}</h3>
        <p className="text-md font-semibold text-[#daa520]">{price}</p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;