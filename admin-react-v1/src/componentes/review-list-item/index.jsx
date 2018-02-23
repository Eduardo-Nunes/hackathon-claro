import React from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";

class ReviewListIem extends React.Component {
    handleToch(e, review) {
        console.log('ok')
    }

    render() {
        return (<TableRow>
                <TableRowColumn>{review.packageName}</TableRowColumn>
                <TableRowColumn>{review.appVersionCode}</TableRowColumn>
                <TableRowColumn>{review.appVersionName}</TableRowColumn>
                <TableRowColumn>{review.starRating}</TableRowColumn>
                <TableRowColumn>{review.reviewText}</TableRowColumn>
                <TableRowColumn>{review.categoryName}</TableRowColumn>
                <TableRowColumn>{review.action}</TableRowColumn>

                {/*<SelectActionsField*/}
                {/*values={[{value:1, name:review.developerReplyText}]}*/}
                {/*handleChange={(value) => {*/}
                {/*console.log("selecionou a action " + value)*/}
                {/*}}/>*/}

                <RaisedButton label="Visualizar" primary={true} onTouchTap={this.handleToch.bind(this.props.review)}/>
            </TableRow>
        );
    }
}

export default ReviewListIem;