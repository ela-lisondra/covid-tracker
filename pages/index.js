import {Fragment} from 'react'
import {Jumbotron} from 'react-bootstrap'
import toNum from '../helpers/toNum'

export default function Home({globalTotal}) {
  // console.log(countriesStats)
  console.log(globalTotal)

  const {cases} = globalTotal
  return (
    <Fragment>
      <Jumbotron>
       <h1 className="text-center">Coronavirus Tracker App</h1>
       <h3 className="text-center">Total Number of Cases Around the World:</h3>
       <h4 className="text-center">{cases}</h4>
      </Jumbotron>
    </Fragment>
  )
}
/*

  NextJS has unique ways to pre-render data. One of the functions, that NextJS uses is called getStaticProps. This allows to fetch data at build time (while NextJS builds the HTML with our data). getStaticProps is mostly used if the data being fetched is available at build time and is not frequently updated.

*/

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

    let total = 0 //This variable will be where our cases will be accumulated into
    countriesStats.forEach(country => {
      //cases: "20,000,000"
      /*
      After sanitizing the number ofcases. (country.cases is a string and has commas)
      We used addition assignment operator to accumulate the cases.

      This forEach's first interation:

      0 += 29744652O
      */
      total += toNum(country.cases)
    })
    console.log(total)
    const globalTotal = {
      cases: total
    }
    return {
      props: {
        globalTotal
      }
    }
}