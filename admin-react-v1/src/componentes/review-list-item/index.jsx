import React from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";

class ReviewListIem extends React.Component {
    handleToch(e) {
        alert(e)
    }

    render() {
        let {review} = this.props;

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

                <RaisedButton label="Visualizar" primary={true}
                              onTouchTap={()=>this.handleToch(review.developerReplyText)}/>
            </TableRow>
        );
    }
}

export default ReviewListIem;