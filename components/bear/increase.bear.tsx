"use client";

import { useBearsStore } from "@/store/bear.store"

const IncreaseBear = () => {

    const increasePopulation = useBearsStore((state) => state.increasePopulation);

  return (
    <button
    
        onClick={increasePopulation}
        className='bg-black text-white px-4 py-2 rounded'
    >
      IncreaseBear
    </button>
  );
}

export default IncreaseBear;
