import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ReviewDetailsPage extends React.Component {
    render() {
        this.id = this.props.params.id;
        this.review = JSON.parse(localStorage.getItem(this.id));
        return (
            <div>
                <TextField style={{marginRight: 50, width: 500}}
                           defaultValue="N/A"
                           value={this.review.categoryName}
                           floatingLabelText="Title"
                           disabled
                />
                <TextField style={{marginRight: 50}}
                           defaultValue="Fui enganado, quando liguei pra saber sobre a TV a atendente disse que me daria acesso a 4 telas, depois fiquei sabendo que o serviço nem existe em minha cidade!"
                           value={this.review.reviewText}
                           floatingLabelText="Review"
                           disabled multiLine fullWidth
                />
                <a href={this.review.reviewLink} target="_blank">
                <RaisedButton label="View Review Store"
                              style={{margin: 12}}/>
                </a>
                <TextField style={{marginRight: 50}}
                           defaultValue="Obrigado por entrar em contato com a Claro Brasil. Para concluir a analise de sua reclamação, preciamos de mais informações. Por favor, enviar um e-mail para ddd@claro.com.br com seu nome completo e CPF (xxx.xxx.xxx.xx) Agradecemos pelo seu contato. Claro Brasil"
                           value={this.review.developerReplyText}
                           floatingLabelText="Reply"
                           multiLine fullWidth
                />
                <TextField style={{marginRight: 50, width: 200}}
                           defaultValue="br.com.netcombo.now"
                           value={this.review.packageName}
                           floatingLabelText="Package Name"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 130}}
                           defaultValue="700000"
                           value={this.review.appVersionCode}
                           floatingLabelText="App Version Code"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 135}}
                           defaultValue="7.0.0"
                           value={this.review.appVersionName}
                           floatingLabelText="App Version Name"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 55}}
                           defaultValue="pt"
                           value={this.review.reviewerLanguage}
                           floatingLabelText="Language"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 90}}
                           defaultValue="1"
                           value={this.review.starRating}
                           floatingLabelText="Star Rating"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 200}}
                           defaultValue="2018-02-01T00:10:20.687Z"
                           value={this.review.reviewSubmitMillisSinceEpoch}
                           floatingLabelText="Create Date"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 200}}
                           defaultValue="2018-02-01T00:10:20.687Z"
                           value={this.review.reviewLastUpdateMillisSinceEpoch}
                           floatingLabelText="Last Update Date"
                           disabled
                />
                <TextField style={{marginRight: 50, width: 200}}
                           defaultValue="2018-02-01T00:10:20.687Z"
                           value={this.review.developerReplyMillisSinceEpoch}
                           floatingLabelText="Replay Last Date"
                           disabled
                />
                <RaisedButton label="Atualizar" fullWidth={true}/>
            </div>
        )
    }
}

export default ReviewDetailsPage;