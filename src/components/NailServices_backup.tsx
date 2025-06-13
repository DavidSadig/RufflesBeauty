import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import nailData from "../data/nailServices";

console.log("🚀 RUFFLES NAIL UNIVERSE IS LIVE");

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const NailServices: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const calculateOrbitPositions = (radius: number, count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * 2 * Math.PI) / count;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  };

  const orbitRadius = 800;
  const orbitPositions = calculateOrbitPositions(orbitRadius, nailData.length);

  return (
    <div className="relative w-full h-[1600px] flex items-center justify-center overflow-hidden">
      <div className="relative w-[1400px] h-[1400px]">
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 w-[8px] h-[8px] bg-yellow-400 rounded-full z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Orbital layout (phase 1) */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}>
          {nailData.map((service: Service, index: number) => {
            const { x, y } = orbitPositions[index];
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 transition-all duration-1000"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  width: "264px",
                  height: "320px",
                  margin: "8px", // gives visual spacing between cards
                }}
              >
                <ServiceCard
                  title={service.name}
                  price={String(service.price)}
                  description={service.description}
                  image={service.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Final grid layout (phase 2) */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto transition-all duration-1000 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}>
        {nailData.map((service: Service, index: number) => (
          <div
            key={index}
            className="relative"
            style={{
              width: "264px",
              height: "320px",
            }}
          >
            <ServiceCard
              title={service.name}
              price={String(service.price)}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NailServices;
