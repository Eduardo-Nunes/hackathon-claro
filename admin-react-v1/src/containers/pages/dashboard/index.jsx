import React from 'react';
import _ from 'lodash';
import { HorizontalBar, Doughnut } from 'react-chartjs-2';
import { CircularProgress } from "material-ui";
import globalStyles from '../../../styles/global';
import services from '../../../services';

const dataHorizontalBar = {
    labels: [],//'January', 'February', 'March', 'April', 'May', 'June', 'July'
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
            data: []// 65, 59, 80, 81, 56, 55, 40
        }
    ]
};

const dataDoughnut = {
    labels: ['*', '* *', '* * *', '* * * *', '* * * * *'],
    datasets: [{
        fill: false,
        lineTension: 0.1,
        backgroundColor: ['#900C3F', '#C70039', '#FF5733', '#FFC300', '#DAF7A6'],
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
        data: []// 10, 20, 30, 5, 2
    }]
};

class DashboardPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Application / Dashboard',
            appReviews: null
        };
    }
    componentDidMount() {
        services.getAppReviews()
            .then(response => {
                this.setState({
                    appReviews: response.data
                })
            });
    }
    prepareHorizontalChartData() {
        const groupedByCategory = _.groupBy(this.state.appReviews, 'categoryName');

        // Reset chart data
        dataHorizontalBar.labels = [];
        dataHorizontalBar.datasets[0].data = [];

        // Prepara horizontal chart data
        const horizontalChartData = [];
        for (const key in groupedByCategory) {
            const label = key !== 'undefined' ? key : 'Sem Categoria';
            horizontalChartData.push({
                label,
                length: groupedByCategory[key].length
            });
        }
        horizontalChartData.sort((a, b) => {
            if (a.length < b.length) {
                return 1;
            }
            if (a.length > b.length) {
                return -1;
            }
            return 0;
        });
        horizontalChartData.forEach(({ label, length }) => {
            dataHorizontalBar.labels.push(label);
            dataHorizontalBar.datasets[0].data.push(length);
        });
    }

    prepareDoughnutChartData() {
        const groupedByRating = _.groupBy(this.state.appReviews, 'starRating');

        // Reset Doughnut chart data
        dataDoughnut.labels = [];
        dataDoughnut.datasets[0].data = [];

        // Prepara horizontal chart data
        const doughnutChartData = [];
        for (const key in groupedByRating) {
            doughnutChartData.push({
                label: key,
                length: groupedByRating[key].length
            });
        }
        doughnutChartData.sort((a, b) => {
            if (a.label < b.label) {
                return -1;
            }
            if (a.label > b.label) {
                return 1;
            }
            return 0;
        });
        doughnutChartData.forEach(({ label, length }) => {
            dataDoughnut.labels.push(`${label} *`);
            dataDoughnut.datasets[0].data.push(length);
        });
    }

    render() {
        if (!this.state.appReviews) {
            return (
                <div className='sweet-loading' style={{ width: '100%' }}>
                    <CircularProgress size={100} thickness={5} />
                </div>
            );
        }
        this.prepareHorizontalChartData();
        this.prepareDoughnutChartData();
        return (
            <div>
                <h4 style={globalStyles.navigation}>Avaliações por Categoria</h4>
                <div className="chart-wrapper" style={{ height: 350, width: '70%' }}>
                    <HorizontalBar data={dataHorizontalBar}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            }
                        }}
                    />

                </div>
                
                <h3 style={globalStyles.navigation}>Avaliações por Rating</h3>
                <div style={{ width: '40%' }}>
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