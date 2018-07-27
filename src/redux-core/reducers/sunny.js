import {
  promise,
  countryList,
  radioStationList,
} from '../types';

import cacheConfig from 'root/config/cache';


const {PENDING, REJECTED, FULFILLED} = promise;
const {GET_COUNTRIES_LIST, FETCH_COUNTRIES_LIST} = countryList;
const {GET_STATIONS_BY_COUNTRY, FETCH_STATIONS_BY_COUNTRY} = radioStationList;

const initState = {
  fetchingCountryList: false,
  fetchingStations: false,
  errorCountryList: null,
  errorStations: null,
  list: {},
};

export default function sunny(state = initState, {type, payload}) {

  const onPending = key => ({
    ...state,
    [`fetching${key}`]: true,
  });

  const onRejected = (key, error) => ({
    ...state,
    [`fetching${key}`]: false,
    [`error${key}`]: error,
  });

  const setList = list => ({
    ...state,
    fetchingCountryList: false,
    list,
  });

  const setStations = stations => ({
    ...state,
    fetchingStations: false,
    list: {
      ...state.list,
      ...stations,
    },
  });

  switch (type) {
    // Create list of countries
    case GET_COUNTRIES_LIST:
      return setList(payload);

    case FETCH_COUNTRIES_LIST + PENDING:
      return onPending('CountryList', true);

    case FETCH_COUNTRIES_LIST + REJECTED:
      return onRejected('CountryList', payload);

    case FETCH_COUNTRIES_LIST + FULFILLED:
      const {key} = cacheConfig.countryList;
      localStorage.setItem(key, JSON.stringify(payload));

      return setList(payload);


    // Add radio stations to list
    case GET_STATIONS_BY_COUNTRY:
      return setStations(payload);

    case FETCH_STATIONS_BY_COUNTRY + PENDING:
      return onPending('Stations', true);

    case FETCH_STATIONS_BY_COUNTRY + REJECTED:
      return onRejected('Stations', payload);

    case FETCH_STATIONS_BY_COUNTRY + FULFILLED:
      if (payload) {
        const keyCountry = Object.keys(payload)[0];
        localStorage.setItem(keyCountry, JSON.stringify(payload));

        return setStations(payload);
      } else {
        return state
      }
  }

  return state;
};