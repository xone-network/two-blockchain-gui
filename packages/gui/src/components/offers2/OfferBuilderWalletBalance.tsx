import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { WalletType } from '@two/api';
import { useGetWalletBalanceQuery } from '@two/api-react';
import {
  FormatLargeNumber,
  mojoToCATLocaleString,
  mojoToTwoLocaleString,
  useLocale,
} from '@two/core';
import { useWallet } from '@two/wallets';

export type OfferBuilderWalletBalanceProps = {
  walletId: number;
};

export default function OfferBuilderWalletBalance(
  props: OfferBuilderWalletBalanceProps,
) {
  const { walletId } = props;
  const [locale] = useLocale();
  const { data: walletBalance, isLoading: isLoadingWalletBalance } =
    useGetWalletBalanceQuery({
      walletId,
    });

  const { unit, wallet, loading } = useWallet(walletId);

  const isLoading = isLoadingWalletBalance || loading;

  const xtwoBalance = useMemo(() => {
    if (
      isLoading ||
      !wallet ||
      !walletBalance ||
      !('spendableBalance' in walletBalance)
    ) {
      return undefined;
    }

    if (wallet.type === WalletType.STANDARD_WALLET) {
      return mojoToTwoLocaleString(walletBalance.spendableBalance, locale);
    }

    if (wallet.type === WalletType.CAT) {
      return mojoToCATLocaleString(walletBalance.spendableBalance, locale);
    }

    return undefined;
  }, [
    isLoading,
    wallet,
    walletBalance,
    walletBalance?.spendableBalance,
    locale,
  ]);

  if (!isLoading && xtwoBalance === undefined) {
    return null;
  }

  return (
    <Trans>
      Spendable Balance:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {xtwoBalance}
          &nbsp;
          {unit?.toUpperCase()}
        </>
      )}
    </Trans>
  );
}
