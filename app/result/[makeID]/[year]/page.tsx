import { fetchCarMakes, fetchCars } from '@/utils'
import React from 'react'
import { getYears } from '@/utils'
import CarCard from '@/app/components/cars/CarCard'

async function generateStaticParams() {
    const years = getYears()
    const cars = await fetchCarMakes()
    return cars.map((car) => ({
      makeID: car.MakeId,
      year: years
    }))
  }

const Result = async ({ params }: { params: { makeID: string, year: number} }) => {

    const entries = await fetchCars(params)
    return (
      <div className="pt-10 mx-auto max-w-[1000px] mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {entries ? entries.map((entry) => (
            <CarCard makeName={entry["Make_Name"]} modelName={entry["Model_Name"]} />
        ))
        : <div>No results found</div>}
      </div>  
      )
}

export default Result