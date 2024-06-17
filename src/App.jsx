import { useState } from 'react'

function App() {

  return (
    <article className='bg-white md:w-1/2 md:mt-24 md:rounded-[24px] md:mx-auto md:mb-20'>
      <div className='md:p-9'>
        <img src="./image-omelette.jpeg" alt="omelette Photo" className='md:rounded-[12px]' />
      </div>
      <main className='py-8 px-7 md:py-1 md:px-9'>
        <section>
          <h1 className='font-YoungSerif text-xl md:text-4xl'>Simple Omelette Recipe</h1>
          <p className='font-Outfit text-gray-500 mt-3 md:text-lg'>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className='bg-[#FFF7FC] p-5 my-7'>
          <h2 className='text-lg text-[#673048] font-Outfit font-bold'>Preparation time</h2>
          <ul className='list-disc list-outside mt-2 ml-5 text-[#673048]'>
            <li className='pl-3 md:mt-2'><span className='text-gray-700'><b>Total:</b> Approximately 10 minutes</span></li>
            <li className='pl-3 md:mt-2'><span className='text-gray-700'><b>Preparation:</b> 5 minutes</span></li>
            <li className='pl-3 md:mt-2'><span className='text-gray-700'><b>Cooking:</b> 5 minutes</span></li>
          </ul>
        </section>

        <section>
          <h2 className='text-[#7A432F] font-YoungSerif text-xl md:text-2xl'>Ingredients</h2>
          <ul className='list-disc list-outside mt-4 mb-7 ml-5'>
            <li className='text-[#7A432F] pl-3 mt-2'><span className=' text-gray-500 md:text-gray-600 md:font-semibold'>2-3 large eggs</span></li>
            <li className='text-[#7A432F] pl-3 mt-2'><span className=' text-gray-500 md:text-gray-600 md:font-semibold'>Salt, to taste</span></li>
            <li className='text-[#7A432F] pl-3 mt-2'><span className=' text-gray-500 md:text-gray-600 md:font-semibold'>Pepper, to taste</span></li>
            <li className='text-[#7A432F] pl-3 mt-2'><span className=' text-gray-500 md:text-gray-600 md:font-semibold'>1 tablespoon of butter or oil</span></li>
            <li className='text-[#7A432F] pl-3 mt-2'><span className=' text-gray-500 md:text-gray-600 md:font-semibold'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
          </ul>
        </section>

        <hr />

        <section className='mt-5'>
          <h2 className='text-[#7A432F] font-YoungSerif text-xl md:text-2xl'>Instructions</h2>
          <ol className='list-decimal list-outside mt-3 ml-5'>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal '><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until well mixed.</span></li>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal'><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal'><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal'><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal'><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
            <li className='text-[#7A432F] font-bold mt-2 pl-5'><span className='text-gray-600 font-normal'><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</span></li>
          </ol>
        </section>

        <hr className='my-7' />

        <section className='md:mb-8'>
          <h2 className='text-[#7A432F] font-YoungSerif text-xl md:text-2xl'>Nutrition</h2>

          <p className='text-gray-500 mt-3'>The table below shows nutritional values per serving without the additional fillings.</p>

          <table className='text-center w-full mt-3 md:text-left m'>
            <tr className='border-b-2'>
              <td className='py-2'>Calories</td>
              <td className='py-2 text-[#7A432F] font-bold'>277kcal</td>
            </tr>
            <tr className='border-b-2'>
              <td className='py-2'>Carbs</td>
              <td className='py-2 text-[#7A432F] font-bold'>0g</td>
            </tr>
            <tr className='border-b-2'>
              <td className='py-2'>Protein</td>
              <td className='py-2 text-[#7A432F] font-bold'>20g</td>
            </tr>
            <tr>
              <td className='py-2'>Fat</td>
              <td className='py-2 text-[#7A432F] font-bold'>22g</td>
            </tr>
          </table>
        </section>


      </main>
    </article>
  )
}

export default App
