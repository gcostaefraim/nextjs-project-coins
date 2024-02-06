import { CoinDetails } from "@/types";
import Image from "next/image";
import React from "react";

function CoinDetails({
  id,
  name,
  symbol,
  image,
  current_price_usd,
}: CoinDetails) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">{name} Details</h1>
      <div className="w-400px bg-gray-100 p-4 rounded-lg text-gray-500">
        <Image src={image.large} alt={name} className="w-50px h-50px" />
        <div className="p-4">
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Symbol:</strong> {symbol}
          </p>
          <p>
            <strong>Current USD:</strong> ${current_price_usd}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
