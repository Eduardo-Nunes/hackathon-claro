import React, { PropTypes } from 'react';
import { RaisedButton, TableRow, TableRowColumn } from "material-ui";


class ReviewListIem extends React.Component {
    handleToch (e, review) {
        console.log('ok')
    }
    render() {
        return (
            <TableRow>
                <TableRowColumn>{this.props.review}</TableRowColumn>
                <TableRowColumn>John Smith - {this.props.review}</TableRowColumn>
                <TableRowColumn>Employed - {this.props.review}</TableRowColumn>
                <RaisedButton label="Visualizar" primary={true} onTouchTap={this.handleToch.bind(this.props.review)} />
            </TableRow>
        );
    }
}

export default ReviewListIem;