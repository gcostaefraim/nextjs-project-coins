import { Coin } from "@/types";

interface CoinProps {
  coin: Coin;
  onViewDetails: (coinId: string) => void;
}

const CoinListItem: React.FC<CoinProps> = ({ coin, onViewDetails }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold text-gray-700">{coin.name}</p>
      <p className="text-gray-500">{coin.symbol}</p>
      <button
        onClick={() => onViewDetails(coin.id)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Ver Detalhes
      </button>
    </div>
  );
};

export default CoinListItem;
