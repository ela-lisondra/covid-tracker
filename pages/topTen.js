import {Pie} from 'react-chartjs-2'
import {Fragment} from 'react'
import toNum from '../helpers/toNum'
export default function topTen({topTenCountries}){

    console.log(topTenCountries) //we can now receive an array of our top 10 countries

    return(
        <Fragment>
          <h1>Top Ten Countries Per Cases</h1>
          <Pie
            data={{
              datasets:[{
                data: [
                  toNum(topTenCountries[0].cases),
                  toNum(topTenCountries[1].cases),
                  toNum(topTenCountries[2].cases),
                  toNum(topTenCountries[3].cases),
                  toNum(topTenCountries[4].cases),
                  toNum(topTenCountries[5].cases),
                  toNum(topTenCountries[6].cases),                  
                  toNum(topTenCountries[7].cases),
                  toNum(topTenCountries[8].cases),
                  toNum(topTenCountries[9].cases)
                  
                ],
                backgroundColor: ["#000000",
                "#141414",
                "#212020",
                "#3c3b3b",
                "#555454",          
                "#686767",
                "#777575",              
                "#8a8989",
                "#a2a0a0",
                "#d7d5d5",]
              }],
                labels: [
                  topTenCountries[0].country_name,
                  topTenCountries[1].country_name,
                  topTenCountries[2].country_name,
                  topTenCountries[3].country_name,
                  topTenCountries[4].country_name,
                  topTenCountries[5].country_name,
                  topTenCountries[6].country_name,
                  topTenCountries[7].country_name,
                  topTenCountries[8].country_name,
                  topTenCountries[9].country_name
                 
                ]
            }} 
          />
        </Fragment>
    )
}
export async function getStaticProps(){
    const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
        }
      })
       //console logging within getStaticProps would show the result in the terminal.
      const data = await res.json()
      const countriesStats = data.countries_stat
      const topTenCountries = countriesStats.slice(0,10)
      console.log(topTenCountries)

    //   console.log(data)

      return {
          props: {
              topTenCountries
          }
      }
}