import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import {Button} from 'react-native-elements';
import {List, ListItem} from "react-native-elements";
import {FlatList} from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'peru',
    fontWeight: 'bold',
    fontSize: 30,

  },
  subTitle:{
    color: 'peru',
    fontWeight: 'bold',
    fontSize: 20,

  }
});

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,  //sabre cuando la aplicacion este en carga
      pokemon: [], //almacenar lo items que retorne el API
      url: 'https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles',
      ID:"",
      Author : "",
      Content : "",
      DT : "",
      Location : "",
      PublishStatus : "",
      Section : "",
      Tags : "",
      Title : "",
      ImgAuthor : "",
      ImgDT : "",
      ImgLocation : "",
      S3DIR : ""
    }
  }
  

  componentDidMount(){
    // Se ejecuta inmediatamente despues de que los componentes hallan sido montados
    this.getPokemon();
    
  }

  getPokemon = () =>{
    this.setState({loading:true});
    // Permite realizar la peticion al API
    fetch(this.state.url)
    .then(res => res.json())
    .then( res=>{
      this.setState({
        pokemon : res,
        //url: res.next,
        loading: false

      })
    });
  }
  postPokemon = ()=>{
    fetch(this.state.url, {
      method: 'POST',
      headers:{
        'Accept':'application.json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify({
        "ID" : "",
        "ARTICLE" : {
            "Author" : this.state.Author,
            "Content" : this.state.Content,
            "DT" : this.state.DT,
            "Location" : this.state.Location,
            "PublishStatus" : this.state.PublishStatus,
            "Section" : this.state.Section,
            "Tags" : this.state.Tags,
            "Title" : this.state.Title
        },
        "IMG" : {
            "Author" : this.state.ImgAuthor,
            "DT" : this.state.DT,
            "Location" : this.state.Location,
            "S3DIR" : this.state.S3DIR
        }
      })
    })
    
  }
  putPokemon = ()=>{
    let urlPut = 'https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles/'+
    this.state.ID
    fetch(urlPut, {
      method: 'PUT',
      headers:{
        'Accept':'application.json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify({
        "ID" : this.state.ID,
        "ARTICLE" : {
            "Author" : this.state.Author,
            "Content" : this.state.Content,
            "DT" : this.state.DT,
            "Location" : this.state.Location,
            "PublishStatus" : this.state.PublishStatus,
            "Section" : this.state.Section,
            "Tags" : this.state.Tags,
            "Title" : this.state.Title
        },
        "IMG" : {
            "Author" : this.state.ImgAuthor,
            "DT" : this.state.DT,
            "Location" : this.state.Location,
            "S3DIR" : this.state.S3DIR
        }
      })
    })
    
  }
  deletePokemon = ()=>{
    let urlDelete='https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles/'+
    this.state.ID
    fetch(urlDelete, {
      method: 'DELETE',
      headers:{
        'Accept':'application.json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify({
        "ID" : this.state.ID
      })
    })
    
  }

  render() {
    const scrollEnabled= true;
    if(this.state.loading){
      return(
        <View style={styles.container}>
          <Text>Descargado Pokemon's ALV PPCDSALVC</Text>
        </View>
      );
    }
    return(
      <ScrollView
        style={{flex:1}}
        contentContainerStyle={styles.ScrollView}
        scrollEnabled={scrollEnabled}
      >
        <View style={{flex: 1, paddingTop:50, paddingLeft:5}}>
      
        <Text style={styles.title}>BIENVENIDO</Text>
        <Text style={styles.title}>POST</Text>
        <Button
        onPress={this.postPokemon()}
        title="Subir Nota"
        color="peru"

        />
        <Text style={styles.subTitle}>ARTICLE</Text>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Author) => this.setState({Author})}
        value={this.state.Author}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Content) => this.setState({Content})}
        value={this.state.Content}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(DT) => this.setState({DT})}
        value={this.state.DT}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Location) => this.setState({Location})}
        value={this.state.Location}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(PublishStatus) => this.setState({PublishStatus})}
        value={this.state.PublishStatus}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Section) => this.setState({Section})}
        value={this.state.Section}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Tags) => this.setState({Tags})}
        value={this.state.Tags}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Title) => this.setState({Title})}
        value={this.state.Title}
        >
        </TextInput>
        <Text style={styles.subTitle}>IMAGES</Text>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgAuthor) => this.setState({ImgAuthor})}
        value={this.state.ImgAuthor}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgDT) => this.setState({ImgDT})}
        value={this.state.ImgDT}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgLocation) => this.setState({ImgLocation})}
        value={this.state.ImgLocation}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(S3DIR) => this.setState({S3DIR})}
        value={this.state.S3DIR}
        >
        </TextInput>

        <Text style={styles.title}>MODIFICAR NOTA</Text>
        <Text style={styles.title}>PUT</Text>
        <Button
        onPress={this.putPokemon()}
        title="Modificar Nota"
        color="peru"

        />
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ID) => this.setState({ID})}
        value={this.state.ID}
        >
        </TextInput>

        <Text style={styles.subTitle}>ARTICLE</Text>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Author) => this.setState({Author})}
        value={this.state.Author}
        >
        </TextInput>
        
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Content) => this.setState({Content})}
        value={this.state.Content}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(DT) => this.setState({DT})}
        value={this.state.DT}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Location) => this.setState({Location})}
        value={this.state.Location}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(PublishStatus) => this.setState({PublishStatus})}
        value={this.state.PublishStatus}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Section) => this.setState({Section})}
        value={this.state.Section}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Tags) => this.setState({Tags})}
        value={this.state.Tags}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(Title) => this.setState({Title})}
        value={this.state.Title}
        >
        </TextInput>
        <Text style={styles.subTitle}>IMAGES</Text>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgAuthor) => this.setState({ImgAuthor})}
        value={this.state.ImgAuthor}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgDT) => this.setState({ImgDT})}
        value={this.state.ImgDT}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ImgLocation) => this.setState({ImgLocation})}
        value={this.state.ImgLocation}
        >
        </TextInput>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(S3DIR) => this.setState({S3DIR})}
        value={this.state.S3DIR}
        >
        </TextInput>

        <Text style={styles.title}>ELIMINAR NOTA</Text>
        <Text style={styles.title}>DELETE</Text>
        <Button
        onPress={this.deletePokemon()}
        onLongPress={this.deletePokemon()}
        title="Eliminar Nota"
        color="peru"

        />
        <Text style={styles.subTitle}>ARTICLE</Text>
        <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ID) => this.setState({ID})}
        value={this.state.ID}
        >
        </TextInput>

        <Text style={styles.subTitle}>ID Author  Section</Text>
        <FlatList 
        data={this.state.pokemon} 
        renderItem={
        ({item})=> <Text>{ item.ID} { item.ARTICLE.Author}  { item.IMG.S3DIR}</Text> 
        }
        keyExtractor={(item, index) => index.toString()}
        > 

        </FlatList>
       
      </View>
    
      </ScrollView>
    );
  }
  
  
  
}


