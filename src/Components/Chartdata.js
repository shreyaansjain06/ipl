import React from 'react'
import {useState,useEffect} from 'react'
import * as d3 from 'd3';
import data from './matches.csv'
import Chart from "react-apexcharts";
import "./Chartdata.css"
const Chartdata = () => {
  const [runs,setRuns]=useState([])
  const [wickets,setWickets]=useState([])
  const [category,setCategory]=useState([])
  const [matches,setMatches]=useState([])
  const [toss,setToss]=useState([])
    useEffect(() =>{
      const runScored=[]
      const wicket=[]
      const matchesWon=[]
      let tossWin=[0,0]
        d3.csv(data).then(data=>{
            var arr = new Array(14);
            for (var i = 0; i < 14; i++) {
              arr[i] = new Array(4); 
            }
            const categories =["Sunrisers Hyderabad",
              "Mumbai Indians",
              "Gujarat Lions",
              "Rising Pune Supergiant",
              "Royal Challengers Bangalore",
              "Kolkata Knight Riders",
              "Delhi Daredevils",
              "Kings XI Punjab",
              "Chennai Super Kings",
              "Rajasthan Royals",
              "Deccan Chargers",
              "Kochi Tuskers Kerala",
              "Pune Warriors",
              "Rising Pune Supergiants"]
          
            for( let i = 0;i<categories.length;i++){
              arr[i][0]=categories[i];
              arr[i][1]=0;
              arr[i][2]=0;
              arr[i][3]=0;
            }
            for(let i=0; i<data.length; i++){
           let index= categories.indexOf(data[i].winner); 
           if(data[i].toss_decision==="bat"){
            tossWin[0]++;
           }
           else
              tossWin[1]++;
              if(index>-1){
                arr[index][1]=Math.max(arr[index][1],data[i].win_by_runs)
                arr[index][2]=Math.max(arr[index][2],data[i].win_by_wickets)
                arr[index][3]++;
              }
            }
            for(let i=0; i<categories.length; i++){
              runScored.push(arr[i][1]);
              wicket.push(arr[i][2]);
              matchesWon.push(arr[i][3]);
            }
            setRuns(runScored);
            setWickets(wicket);
            setMatches(matchesWon);
            setCategory(categories);
            setToss(tossWin);
        })
    },[])
  return (
    <>
    <div className="chart">
   <Chart
   type="bar"
   width={1100}
   height={500}

   series={ [
    {
      name: "Biggest wins by runs",
      data: runs
    }
  ]}
  options={{
    title:{
      text: "Wins by runs"
    },
    xaxis:{
      tickPlacement:"on",
      categories:category
    }
  }}

   />
   <Chart
   type="bar"
   width={1100}
   height={500}

   series={ [
    {
      name: "Biggest wins by wickets",
      data: wickets
    }
  ]}
  options={{
    title:{
      text: "Wins by wickets"
    },
    xaxis:{
      tickPlacement:"on",
      categories:category
    }
  }}
   />
   <Chart
   type="bar"
   width={1100}
   height={500}

   series={ [
    {
      name: "Total matches Won",
      data: matches
    }
  ]}
  options={{
    title:{
      text: "Matches Wins"
    },
    xaxis:{
      tickPlacement:"on",
      categories:category
    }
  }}
   />
   <Chart
   type="bar"
   width={300}
   height={700}

   series={ [
    {
      name: "Total Tosses Won",
      data: toss
    }
  ]}
  options={{
    title:{
      text: "Tosses Wins"
    },
    xaxis:{
      tickPlacement:"on",
      categories:["bat","field"]
    }
  }}
   />
   </div>
    </>
  )
}

export default Chartdata