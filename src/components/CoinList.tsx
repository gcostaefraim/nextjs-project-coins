"use client";
import { Coin } from "@/types";
import CoinListItem from "./CoinListItem";

interface CoinListProps {
  coins: Coin[];
}

const CoinList: React.FC<CoinListProps> = ({ coins }) => {
  const handleViewDetails = (coinId: string) => {
    // Lógica para ver detalhes da coin
    console.log(`Detalhes da Coin ${coinId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Lista de Coins</h1>
      <div className="grid grid-cols-3 gap-4">
        {coins.map((coin) => (
          <CoinListItem
            key={coin.id}
            coin={coin}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
