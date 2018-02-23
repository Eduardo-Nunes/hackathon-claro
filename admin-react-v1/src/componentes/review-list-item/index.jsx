import React,  { PropTypes } from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";

const _test = () => {console.log("clicou no ")};
const ReviewListIem = (props) => {
    let { review } = props;
    return(
        <TableRow>
            <TableRowColumn>{review}</TableRowColumn>
            <TableRowColumn>John Smith - {review}</TableRowColumn>
            <TableRowColumn>Employed - {review}</TableRowColumn>
            <RaisedButton label="Visualizar" primary={true} onClick={_test}/>
        </TableRow>
    )
};

export default ReviewListIem;