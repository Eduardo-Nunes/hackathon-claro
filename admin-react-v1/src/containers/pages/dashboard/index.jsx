import React from 'react';
import { HorizontalBar, Doughnut } from 'react-chartjs-2';
import globalStyles from '../../../styles/global';

const dataHorizontalBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const dataDoughnut = {
    labels: ['*', '* *', '* * *', '* * * *', '* * * * *'],
    datasets: [{
        fill: false,
        lineTension: 0.1,
        backgroundColor: ['#900C3F', '#C70039', '#FF5733', '#FFC300', '#DAF7A6'
        ],
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 20, 30, 5, 2]
    }]
};

class DashboardPage extends React.Component {
    render() {
        return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
                <div className="chart-wrapper" style={{ height: 350, width: '70%', float: 'left' }}>
                    <HorizontalBar data={dataHorizontalBar}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            }
                        }}
                    />

                </div>

                <div style={{ width: '30%',  float: 'right' }}>
                    <Doughnut data={dataDoughnut}
                        options={{
                            maintainAspectRatio: true,
                            legend: {
                                display: true
                            },
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default DashboardPage;