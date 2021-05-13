import {Fragment} from 'react'
import {Jumbotron} from 'react-bootstrap'

//component
import DoughnutChart from '../components/DoughnutChart'
import toNum from '../helpers/toNum'

//helpers
// import toNum from '../helpers/toNum'

export default function country({country}){ //{country} is the receive to show the detail when you console it
    console.log(country)

    //creating deconsrtucted props 
    const stats = {

        criticals: toNum(country.serious_critical),
        recovered: toNum(country.total_recovered),
        deaths: toNum(country.deaths),
        cases: toNum(country.cases)
    }

    return (

        <Fragment>
            <Jumbotron>
            <h1 className="text-center">{country.country_name}</h1>
            <h3 className="text-center">Total Cases: {country.cases}</h3>
            <h3 className="text-center">Deaths: {country.deaths}</h3>
            <h3 className="text-center">Recovered: {country.total_recovered}</h3>
            </Jumbotron>
            <DoughnutChart stats={stats}/>
        </Fragment>

    )
}
/*
getStaticPaths is a unique NextJS function. It is used in conjunction with getStaticProps. getStaticPaths creates dynamic routes for dynamically created pages.
*/

export async function getStaticPaths(){
    const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
        }
    })
    const data = await res.json()

      //we're going to create paths for each countries in the countries_stat array
    const paths = data.countries_stat.map(country => {
        return ({
            params:{id: country.country_name}
        })
    })
    // console.log(paths) //defined paths
    return {paths, fallback:false}
    /*
    paths contain all the defined paths to the dynamically created pages:
    /USA - you will be able to find a page for USA but not for: /Iloilo or /antipolo -will result to 404

    Fallback is the page that nextjs will redirect the user if they try to go to path that is undefined or unspecified in the paths

    fallback: false - nextjs will show the default 404 page
    fallback: true - nextjs will show your custom 404 page
    */

}

export async function getStaticProps({params}){
    console.log(params)
    const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',{

        "method": "GET",
        "headers": {

          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"

        }
    })
    const data = await res.json()
    
    const country = data.countries_stat.find(country => country.country_name === params.id)
    console.log(country)

    return {
        props: {
            country
        }
    }
}
