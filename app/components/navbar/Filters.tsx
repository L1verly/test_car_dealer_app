'use client'
import Link from 'next/link'
import { useState } from 'react'




const Filters = ({years, carMakes}) => {
    const [makeId, setMakeId] = useState('')
    const [year, setYear] = useState(2015)
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    const handleMakeIdChange = (e) => {
        const value = e.target.value;
        setMakeId(value);
    };
    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        console.log("Year changed")
    };
    return (
        <div className="flex flex-col gap-5">
            <div className='h-[64px] flex flex-row items-center border rounded-full'>
                <form onSubmit={handleSubmit}>
                    <select 
                        value={makeId} 
                        onChange={handleMakeIdChange}
                        className='h-[64px] w-[200px] rounded-full px-8 hover:bg-gray-100 text-sm'
                    >
                        {carMakes.map((car) => (
                            <option key={car.MakeId} value={car.MakeId} className='text-sm'>
                                {car.MakeName}
                            </option>

                        ))}
                    </select>
                    <select 
                        value={year} 
                        onChange={handleYearChange}
                        className='h-[64px] rounded-full px-8 hover:bg-gray-100'
                    >
                        {years.map((yr, i) => (
                            <option key={i} value={yr}>{yr}</option>
                        ))}
                    </select>
                </form>
            </div>
            <Link href={`/result/${makeId}/${year}`} className="w-full mb-6 py-6 text-center bg-red-400 text-white rounded-xl transition active:scale-95">
                Next
            </Link>
        </div>
    )
}

export default Filters;