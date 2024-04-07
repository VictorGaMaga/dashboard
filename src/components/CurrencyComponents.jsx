import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import australiaFlag from '../data/flags/bandeira-australia.png';
import bulgariaFlag from '../data/flags/bulgaria.png';
import brasilFlag from '../data/flags/brasil.png';
import canadaFlag from '../data/flags/canada.png';
import suicaFlag from '../data/flags/suica.png';
import chinaFlag from '../data/flags/china.png';
import czechFlag from '../data/flags/czech-republic.jpg';
import denmarkFlag from '../data/flags/denmark.jpg';
import euroFlag from '../data/flags/euro.png';
import ukFlag from '../data/flags/uk.png';
import hongFlag from '../data/flags/hongkong.jpg';
import croatiaFlag from '../data/flags/croatia.png';
import hungaryFlag from '../data/flags/hungary.png';
import indonFlag from '../data/flags/indonesya.png';
import israelFlag from '../data/flags/israel.png';
import indiaFlag from '../data/flags/india.png';
import icelandFlag from '../data/flags/iceland.png';
import japanFlag from '../data/flags/japao.png';
import koreaFlag from '../data/flags/coreia-do-sul.png';
import mexicoFlag from '../data/flags/mexico.png';
import malaysiaFlag from '../data/flags/malaysia.png';
import norwayFlag from '../data/flags/norway.png';
import newzealandFlag from '../data/flags/newzeland.png';
import philippinesFlag from '../data/flags/philippines.png';
import polandFlag from '../data/flags/poland.png';
import romaniaFlag from '../data/flags/romenia.png';
import russiaFlag from '../data/flags/russia.png';
import swedenFlag from '../data/flags/sweden.png';
import singaporeFlag from '../data/flags/cingapure.png';
import thailandFlag from '../data/flags/thailand.png';
import turkeyFlag from '../data/flags/turkey.png';
import southafricaFlag from '../data/flags/africa-do-Sul.png';
import dollarFlag from '../data/flags/us.png';

const currencyFlags = {
  AUD: australiaFlag,
  BGN: bulgariaFlag,
  BRL: brasilFlag,
  CAD: canadaFlag,
  CHF: suicaFlag,
  CNY: chinaFlag,
  CZK: czechFlag,
  DKK: denmarkFlag,
  EUR: euroFlag,
  GBP: ukFlag,
  HKD: hongFlag,
  HRK: croatiaFlag,
  HUF: hungaryFlag,
  IDR: indonFlag,
  ILS: israelFlag,
  INR: indiaFlag,
  ISK: icelandFlag,
  JPY: japanFlag,
  KRW: koreaFlag,
  MXN: mexicoFlag,
  MYR: malaysiaFlag,
  NOK: norwayFlag,
  NZD: newzealandFlag,
  PHP: philippinesFlag,
  PLN: polandFlag,
  RON: romaniaFlag,
  RUB: russiaFlag,
  SEK: swedenFlag,
  SGD: singaporeFlag,
  THB: thailandFlag,
  TRY: turkeyFlag,
  ZAR: southafricaFlag,
  USD: dollarFlag
};

export const CurrencyDropDown = ({ earningData, visibleCurrencies, setVisibleCurrencies }) => {
  const handleAddCurrency = (currencyToAdd) => {
    setVisibleCurrencies(prev => {
      if (!prev.includes(currencyToAdd) && prev.length < 4) {
        return [...prev, currencyToAdd];
      }
      return prev;
    });
  };

  const handleClearCurrencies = () => {
    setVisibleCurrencies([]);
  };

  const dropdownOptions = earningData.map(currency => ({
    text: currency.title,
    value: currency.title
  }));

  return (
    <div>
      <DropDownListComponent
        id="currency-select"
        dataSource={dropdownOptions}
        fields={{ text: 'text', value: 'value' }}
        mode="CheckBox"
        showCheckBox={true}
        change={e => handleAddCurrency(e.value)}
        placeholder="Select Currency"
        style={{ width: '100%', padding: '20px', textAlign: 'center' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handleClearCurrencies} style={{ marginRight: '10px' }}>Clear</button>
      </div>
    </div>
  );
};

export const CurrencyDisplay = ({ earningData, visibleCurrencies }) => {
  return (
    <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
      {earningData
        .filter(item => visibleCurrencies.includes(item.title))
        .map((item, index) => (
          <div key={index} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ backgroundImage: `url(${currencyFlags[item.title]})`, backgroundSize: 'cover' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            />
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
    </div>
  );
};
