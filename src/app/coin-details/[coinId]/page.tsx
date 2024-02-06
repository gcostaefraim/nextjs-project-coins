import CoinDetails from "@/components/CoinDetails";

export default function CoinDetailsPage() {
  return (
    <div className="App">
      <CoinDetails
        id="1"
        name="Bitcoin"
        symbol="BTC"
        image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        current_price_usd={50000}
      />
    </div>
  );
}
