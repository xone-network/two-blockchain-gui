import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToTwoLocaleString, CardSimple, useLocale } from '@two/core';
import { useGetFarmedAmountQuery } from '@two/api-react';

export default function FarmCardTotalTwoFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalTwoFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToTwoLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple
      title={<Trans>Total Two Farmed</Trans>}
      value={totalTwoFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
