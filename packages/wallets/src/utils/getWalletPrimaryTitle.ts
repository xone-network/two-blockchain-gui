import { WalletType } from '@two/api';
import type { Wallet } from '@two/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Two';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
