import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="flex md:mt-16 mt-8  flex-col  gap-2 mdnorm:flex-row items-center justify-center flex-wrap  ">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories