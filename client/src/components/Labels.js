import React from 'react'

const obj = [
    {
        type: "savings",
        color: "#f9c74f",
        percent: 45,
    },
    {
        type: "Investments",
        color: "#f9c74f",
        percent: 20,
    },
    {
        type: "building",
        color: "#f9c74f",
        percent: 10,
    },
    {
        type: "Expenses",
        color: "#f9c74f",
        percent: 15,
    }
]


export default function Labels() {
  return (
    <>
      {obj.map((v,i) => <LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  )
}


function LabelComponent({data}){
    if (!data) return <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background: data.color ?? '#f9c74f'}}>

                </div>
                <h3>{data.type ?? 'Savings'}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 45}%</h3>
        </div>
    )
}