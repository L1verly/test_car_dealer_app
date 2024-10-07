export async function fetchCars(params) {
    const { makeID, year } = params;

    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeID}/modelyear/${year}?format=json`,
    );
    
    const result = await response.json();
    return result["Results"];
  }

export async function fetchCarMakes() {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`,
    );
  
    const result = await response.json();
  
    return result["Results"];
}

export function getYears(){
  const years = [];
  const currentYear = new Date().getFullYear()
  let startYear = 2015
  while (startYear <= currentYear) {
      years.push(startYear++)
  }
  return years
}

export async function CarMakes() {
  const cars = await fetchCarMakes()
  return cars
}