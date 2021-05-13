import {Fragment, useState} from 'react'
import {Jumbotron, Form, Button, Alert} from 'react-bootstrap'
import Swal from 'sweetalert2'

//component
import DoughnutChart from '../components/DoughnutChart'

//helpers
import toNum from '../helpers/toNum'

export default function searchPage({countriesStat}) {

	const [country, setCountry] = useState("")
	const [cases1, setCases] = useState(0)
	const [criticals1, setCriticals] = useState(0)
	const [recovered1, setRecovered] = useState(0)
	const [deaths1, setDeaths] = useState(0)

	let countryData;

	function findCountry(e) {
		e.preventDefault()

		countryData = countriesStat.find(data => data.country_name === country)

		console.log(countryData)

		if(countryData) {

		setCases(toNum(countryData.cases))
		setRecovered(toNum(countryData.total_recovered))
		setCriticals(toNum(countryData.serious_critical))
		setDeaths(toNum(countryData.deaths))

		} else {
			
			Swal.fire({

					icon: "error",
					title: "Search invalid",
					text: "Please enter a valid country name"
				})

		}
	}	


	console.log(cases1)
	console.log(recovered1)
	console.log(criticals1)
	console.log(deaths1)



	let forData = {
		cases: cases1,
		criticals: criticals1,
		recovered: recovered1,
		deaths: deaths1
	}

	return (
		<Fragment>
			<h1>Search Infected Country</h1>
			<Form onSubmit={e=> findCountry(e)}>
				<Form.Group>
					<Form.Label>Find Country:</Form.Label>
					<Form.Control type="text" placeholder="Enter Country" value={country} onChange={e=> setCountry(e.target.value)} />
				</Form.Group>
				<Button type="submit">Enter</Button>
			</Form>
			<Jumbotron className="text-center">
			<h1 className="text-center mb-5">{country}</h1>
				<p>Total No. of Cases: {cases1}</p>
				<p>Number of Deaths: {deaths1}</p>
				<p>Number of Recovered Patients: {recovered1}</p>
			</Jumbotron>
			<DoughnutChart stats={forData} />

		</Fragment>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {

	    "method": "GET",
	    "headers": {
	        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	        "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
	    }
	})

	const data = await res.json()

	const countriesStat = data.countries_stat

	return {
		props: {
			countriesStat
		}
	}
}