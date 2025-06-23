// utils/calculateTotalInvested.js
export const calculateTotalInvested = (assets) => {
    return assets.reduce((total, asset) => {
      return total + (asset.quantity * asset.coin.current_price);
    }, 0);
  };
  