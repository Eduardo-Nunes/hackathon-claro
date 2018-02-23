import React from 'react';
import globalStyles from '../../../styles/global';
import {
    FlatButton, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui";
import ReviewListItem from "../../../componentes/review-list-item";

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
    renderRows() {
        const rows = [];
        let reviewList = [];
        for (let i = 0; i <= 10; i++) {
            reviewList[i] ={
                "_id": "5a8f65de68a8d739fde9df6c",
                "packageName": "br.com.netcombo.now",
                "appVersionCode": "70000",
                "appVersionName": "7.0.0",
                "reviewerLanguage": "pt",
                "device": "j7velte",
                "reviewSubmitMillisSinceEpoch": "2018-02-02T19:17:59.360Z",
                "reviewLastUpdateMillisSinceEpoch": "2018-02-02T19:18:34.985Z",
                "starRating": 1,
                "reviewTitle": "",
                "reviewText": "O áudio é uma bosta",
                "developerReplyMillisSinceEpoch": "Thu Jan 01 1970 00:00:00 GMT+0000",
                "developerReplyText": "Obrigado por entrar em contato com a Claro Brasil.\n\n  Por favor, envie um e-mail para xxx@claro.com.br, com mais informações com \n  o problema identificado no NOW.\n  \n  Agradecemos pelo seu contato.\n  \n  Claro Brasil",
                "reviewLink": "https://play.google.com/apps/publish?account=6990757264476384522#ReviewDetailsPlace:p=br.com.netcombo.now&reviewid=gp:AOqpTOGOY7KZf-cEmr6ZLp21zKUFvjEA25ieNyBoHBvlxzgr1zqrkNlc8u6LF53bk-7hbtDhTWBraHdyvdgd8Nk",
                "processed": true,
                "categoryName": "Review negativo generico"
            };

            const componentRow = (
                <ReviewListItem review={reviewList[i]}/>
            );
            rows.push(componentRow);
        }

        return rows;
    }
    render() {
        return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Tela</h3>
                <Table style={{tableLayout: 'auto'}}>
                    {/*<TableHeader displaySelectAll={false} adjustForCheckbox={false}>*/}
                        {/*<TableRow>*/}
                            {/*<TableHeaderColumn>packageName</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>appVersionCode</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>appVersionName</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>starRating</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>reviewText</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>categoryName</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>action</TableHeaderColumn>*/}
                        {/*</TableRow>*/}
                    {/*</TableHeader>*/}
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