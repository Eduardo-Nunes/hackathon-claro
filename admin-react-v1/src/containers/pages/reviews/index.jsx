import React from 'react';
import globalStyles from '../../../styles/global';
// import { RingLoader } from 'react-spinners';
import {
    CircularProgress,
    Table, TableBody, TableHeaderColumn, TableRow,
} from "material-ui";
import ReviewListItem from "../../../componentes/review-list-item";
import services from "../../../services";

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

class ReviewsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Reviews do aplicativo NOW Online",
            appReviews: null
        };
    }
    componentDidMount() {
        services.getAppReviews()
            .then(data => {
                console.log(data.data);
                this.setState({ appReviews: data.data });
            })
    }
    renderRows() {
        const rows = [];
        for (let i = 0; i < this.state.appReviews.length; i++) {
            const componentRow = (
                <ReviewListItem key={`ReviewListIem-${i}`} review={this.state.appReviews[i]}/>
            );
            rows.push(componentRow);
        }
        return rows;
    }
    render() {
        if (!this.state.appReviews) {
            return (
                <div className='sweet-loading' style={{width: '100%'}}>
                    <CircularProgress size={100} thickness={5} />
                </div>
            );
        }
        return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Tela</h3>
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                        <TableHeaderColumn>packageName</TableHeaderColumn>
                        <TableHeaderColumn>appVersionCode</TableHeaderColumn>
                        <TableHeaderColumn>appVersionName</TableHeaderColumn>
                        <TableHeaderColumn>starRating</TableHeaderColumn>
                        <TableHeaderColumn>reviewText</TableHeaderColumn>
                        <TableHeaderColumn>categoryName</TableHeaderColumn>
                        </TableRow>
                        {this.renderRows()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReviewsPage;