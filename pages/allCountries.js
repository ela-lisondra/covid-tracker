import {Fragment} from 'react'
import {ListGroup} from 'react-bootstrap'
import Link from 'next/link'

export default function allCountries({data}){
    console.log(data)

    const countriesList = data.countries_stat.map(country => {
        return (

            <ListGroup.Item key={country.country_name}>
                <Link href={`/${country.country_name}`}>
                    <a>{country.country_name}</a>                
                </Link>
            </ListGroup.Item>

        )
    })
    return (
        <Fragment>
            <h1>Infected Countries</h1>
            <ListGroup>
                {countriesList}
            </ListGroup>
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
      return {
        props: {
           data
        }
    }
}