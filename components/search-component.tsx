"use client"
import React from 'react'
import SearchForm from './searchForm'

const SearchComponent = () => {
  return (
    <div className='flex flex-col -mt-16 mx-auto w-full p-4 py-10 lg:ml-5 item-start px-auto gap-x-2 rounded-2xl bg-gray-50  ring-1 ring-inset ring-gray-900/5'>
        <SearchForm />
    </div>
  )
}

export default SearchComponent