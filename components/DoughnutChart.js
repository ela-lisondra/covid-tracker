import {Doughnut} from 'react-chartjs-2'

export default function DoughnutChart({stats}){ 
    //deconstucturing
    const {criticals, deaths, recovered, cases} = stats   
    return (

        <Doughnut data={{

            datasets: [{
                data: [criticals, recovered, deaths],
                backgroundColor: ["red", "green", "black",]
            }],

            labels: [
                'Criticals',
                'Recoveries',
                'Deaths',
                // 'Total Cases'
            ]
        }}
        />
    )
}