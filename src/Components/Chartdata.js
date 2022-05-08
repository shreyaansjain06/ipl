import React from 'react'
import {useEffect} from 'react'
import * as d3 from 'd3';
import data from './matches.csv'
import {Bar} from 'react-chartjs-2'
const Chartdata = () => {
    useEffect(() =>{
        d3.csv(data).then(data=>{
            console.log(data)
            // const Labels=data.keys()
            // console.log(Labels)
        })
    },[])
  return (
    <>
    <Bar
    data={{ labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],}}
    width={100}
    height={300}
    options={{maintainAspectRatio:false}}
    
    />
    </>
  )
}

export default Chartdata