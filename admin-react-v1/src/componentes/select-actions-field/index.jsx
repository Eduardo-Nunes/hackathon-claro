import React,  { PropTypes } from 'react';
import {Component} from "react/lib/ReactBaseClasses";
import {MenuItem, SelectField} from "material-ui";

class SelectActionsField extends Component {
    menuItems(values){
        return values.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }
    render() {
        let {values} = this.props;
        return (
            <SelectField
                multiple={false}
                hintText="Select a action"
                value={values}
                onChange={this.props.handleChange()}
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
};

export default SelectActionsField