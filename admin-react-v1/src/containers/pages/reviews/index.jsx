import React from 'react';
import globalStyles from '../../../styles/global';
import {
    FlatButton, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui";
import ReviewListIem from "../../../componentes/review-list-item";

class ReviewsPage extends React.Component {

    renderRows() {
        const rows = [];
        for (let i = 0; i <= 10; i++) {
            const componentRow = (
                <ReviewListIem key={`ReviewListIem-${i}`} review={i}/>
            );
            rows.push(componentRow);
        }

        return rows;
    }

    render() {
        return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Tela</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.renderRows()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReviewsPage;