import React from 'react';
import globalStyles from '../../../styles/global';

class DashboardPage extends React.Component {
    render()
    {return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
                <div className="row">
                    <h3>Dashboard</h3>
                </div>
            </div>
        )
    }
}

export default DashboardPage;