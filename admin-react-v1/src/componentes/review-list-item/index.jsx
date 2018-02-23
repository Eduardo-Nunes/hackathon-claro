import React from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";
import { withRouter } from "react-router";

class ReviewListItem extends React.Component {
    handleToch(e) {
        // debugger
        this.props.router.push(`reviews/${e}`)
    }

    render() {
        let {review} = this.props;
        console.log(review);
        return (<TableRow>
                <TableRowColumn>{review.packageName}</TableRowColumn>
                <TableRowColumn>{review.appVersionCode}</TableRowColumn>
                <TableRowColumn>{review.appVersionName}</TableRowColumn>
                <TableRowColumn>{review.starRating}</TableRowColumn>
                <TableRowColumn>{review.reviewText}</TableRowColumn>
                <TableRowColumn>{review.categoryName}</TableRowColumn>

                <RaisedButton label="Visualizar" primary={true}
                              onTouchTap={()=>this.handleToch(review._id)}/>
            </TableRow>
        );
    }
}

export default withRouter(ReviewListItem);