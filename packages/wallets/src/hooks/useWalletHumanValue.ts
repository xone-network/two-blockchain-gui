import { useMemo } from 'react';
import type { Wallet } from '@two/api';
import { WalletType } from '@two/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToTwoLocaleString, useLocale } from '@two/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();

  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToTwoLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
