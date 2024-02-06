import CoinList from "@/components/CoinList";

export default function CoinListPage() {
  const coins = [
    { id: "1", name: "Bitcoin", symbol: "BTC" },
    { id: "2", name: "Ethereum", symbol: "ETH" },
    { id: "3", name: "Litecoin", symbol: "LTC" },
  ];

  return (
    <div className="App">
      <CoinList coins={coins} />
    </div>
  );
}
