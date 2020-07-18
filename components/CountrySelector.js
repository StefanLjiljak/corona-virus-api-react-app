import React, { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const CountrySelector = () => {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('Serbia');
  if (!countries) return <p>Учитава се...</p>;
  return (
    <div>
      <section>
        <h2>
          Тренутно се приказује статистика за земљу "
          <span>{selectedCountry}</span>".
        </h2>
      </section>
      <section>
        <label>Изаберите жељену земљу за приказ: </label>
        <input
          list="countries"
          onKeyUp={(e) => {
            if (e.keyCode === 13 && e.target.value !== '') {
              setSelectedCountry(e.target.value ? e.target.value : 'Serbia');
            }
          }}
        />
        <datalist id="countries">
          {Object.entries(countries.countries).map(([code, country]) => (
            <option key={code} value={country.name}>
              {country.name}
            </option>
          ))}
        </datalist>
        {/* <select
          onChange={(e) => setSelectedCountry(e.target.value)}
          defaultValue="Serbia"
        >
          {Object.entries(countries.countries).map(([code, country]) => (
            <option key={code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select> */}
      </section>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
};

export default CountrySelector;
