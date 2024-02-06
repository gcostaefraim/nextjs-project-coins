/**
 * Represents a coin.
 */
export type Coin = {
  id: string;
  symbol: string;
  name: string;
};

/**
 * Represents detailed information about a coin.
 */
export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  current_price_usd: number;
  image: {
    thumb: string;
    large: string;
  };
};
