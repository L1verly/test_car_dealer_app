import { getYears, CarMakes } from "@/utils";
import CarList from "./components/cars/CarList";
import Filters from "./components/navbar/Filters";

export default async function Home() {
  const carYears = await getYears()
  const carMakes = await CarMakes()
  return (
    <main className="max-w-[1500px] mx-auto">
      <div className='py-80'>
        <Filters years={carYears} carMakes={carMakes}/>
      </div>    
  </main>
  );
}
