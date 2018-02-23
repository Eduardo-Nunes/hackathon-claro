import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ReviewDetailsPage extends React.Component {
  render() {
    return (
      <div>
        <TextField style={{ marginRight: 50, width: 500 }}
          defaultValue="N/A"
          floatingLabelText="Title"
          disabled
        />
        <TextField style={{ marginRight: 50 }}
          defaultValue="Fui enganado, quando liguei pra saber sobre a TV a atendente disse que me daria acesso a 4 telas, depois fiquei sabendo que o serviço nem existe em minha cidade!"
          floatingLabelText="Review"
          disabled multiLine fullWidth
        />
        <RaisedButton label="View Review Store" style={{margin: 12}} />
        <TextField style={{ marginRight: 50 }}
          defaultValue="Obrigado por entrar em contato com a Claro Brasil. Para concluir a analise de sua reclamação, preciamos de mais informações. Por favor, enviar um e-mail para ddd@claro.com.br com seu nome completo e CPF (xxx.xxx.xxx.xx) Agradecemos pelo seu contato. Claro Brasil"
          floatingLabelText="Reply"
          multiLine fullWidth
        />
        <TextField style={{ marginRight: 50, width: 200 }}
          defaultValue="br.com.netcombo.now"
          floatingLabelText="Package Name"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 130 }}
          defaultValue="700000"
          floatingLabelText="App Version Code"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 135 }}
          defaultValue="700000"
          floatingLabelText="App Version Name"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 55 }}
          defaultValue="pt"
          floatingLabelText="Language"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 90 }}
          defaultValue="1"
          floatingLabelText="Star Rating"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 200 }}
          defaultValue="2018-02-01T00:10:20.687Z"
          floatingLabelText="Create Date"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 200 }}
          defaultValue="2018-02-01T00:10:20.687Z"
          floatingLabelText="Last Update Date"
          disabled
        />
        <TextField style={{ marginRight: 50, width: 200 }}
          defaultValue="2018-02-01T00:10:20.687Z"
          floatingLabelText="Replay Last Date"
          disabled
        />
        <RaisedButton label="Atualizar" fullWidth={true} />
      </div>
    )
  }
}

export default ReviewDetailsPage;