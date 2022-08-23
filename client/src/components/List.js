import React from 'react'

export default function List() {
  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 font-bold text-xl">

        </h1>
    </div>
  )
}



function Transaction({trans_cat}){
    if(!trans_cat) return null;
    return(
        <div className="item flex justify-center bg-gray">
            <ul>
                <li>{trans_cat}</li>
            </ul>
        </div>       
    )
}