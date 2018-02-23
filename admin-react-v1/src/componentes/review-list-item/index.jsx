import React from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";
import { withRouter } from "react-router";

class ReviewListItem extends React.Component {
    handleToch(review) {
        localStorage.setItem(review._id,  JSON.stringify(review));
        this.props.router.push(`reviews/${review._id}`)
    }

    render() {
        let {review} = this.props;
        console.log(review);
        return (<TableRow>
                <TableRowColumn>{review.starRating}</TableRowColumn>
                <TableRowColumn>{review.reviewText}</TableRowColumn>
                <TableRowColumn>{review.developerReplyText}</TableRowColumn>
                <TableRowColumn>{review.categoryName}</TableRowColumn>

                <RaisedButton label="Visualizar" primary={true}
                              onTouchTap={()=>this.handleToch(review)}/>
            </TableRow>
        );
    }
}

export default withRouter(ReviewListItem);