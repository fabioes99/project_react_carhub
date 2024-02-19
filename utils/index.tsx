import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": '76c00b4de4msh0aeb542586f7a40p187b8bjsn15ae02f971ca' || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery' || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

export const translate = ( word: string) => {
  switch (word) {
    case 'fwd':
      return 'Dianteira'
    case 'rwd':
      return 'Traseira'
    case 'awd':
      return '4x4'
    case '4wd':
      return '4x4'
    case 'year':
      return 'Ano'
    case 'make':
      return 'Montadora'
    case 'model':
      return 'Modelo'
    case 'cylinders':
      return 'Cilindros'
    case 'transmission':
      return 'Transmissão'
    case 'fuel_type':
      return 'Combustivel'
    case 'city_mpg':
      return 'Consumo Cidade (km/l)'
    case 'combination_mpg':
      return 'Média de Consumo (km/l)'
    case 'highway_mpg':
      return 'Consumo Estrada (km/l)'
    case 'displacement':
      return 'Cilindradas'
    case 'drive':
      return 'Tração'
    case 'gas':
      return 'Gasolina'
    case 'electricity':
      return 'Eletricidade'

     
    
    default:
      return word;
  }

} 

export const convertKmL = ( mpg: number) => {
  return Math.floor( (mpg * 1.60934) / 3.78541 );

} 