import type { Wallet } from '@two/api';
import { WalletType } from '@two/api';

export default function findCATWalletByAssetId(
  wallets: Wallet[],
  assetId: string,
) {
  return wallets.find(
    (wallet) =>
      wallet.type === WalletType.CAT &&
      wallet.meta?.assetId?.toLowerCase() === assetId.toLowerCase(),
  );
}
