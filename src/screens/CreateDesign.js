import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Platform, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS, screenWidth } from '../config/static';
import { p } from '../config/normalize';
import * as ImagePicker from 'expo-image-picker';
import styles from '../config/groupStyle'
import Header from '../components/Header';
import { Actions } from 'react-native-router-flux';

export default class CreateDesign extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasFocus: 0,
      colorFocus: -1,
      myJSON: props.json,
    }
    this.webView = null;
  }

  onSendMyMsg(x) {
    this.webView.postMessage(JSON.stringify(x));
  }

  _pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      let imageUri = result ? `data:image/jpg;base64,${result.base64}` : null;
      imageUri && console.log({ uri: imageUri.slice(0, 100) });
      let newArray = this.state.myJSON;
      newArray.images[index] = imageUri;
      this.setState({ myJSON: newArray });
      this.webView.postMessage(JSON.stringify(newArray));
    }
  };

  onMessage(event) {
    console.log("On Message", event.nativeEvent.data);
  }

  _storeData = async (jsonData, cardId) => {
    // console.log('_storeData', this.props.templateId, jsonData, cardId)
    jsonData["templateId"] = this.props.templateId
    try {
      var myCards = []
      const value = await AsyncStorage.getItem('mycards');
      if (value) {
        myCards = JSON.parse(value);
      }
      if (cardId) {
        var currentCard = myCards.find(o => o.id == cardId)
        Object.assign(currentCard, jsonData)
      } else {
        jsonData.id = "card" + Date.now()
        myCards.push(jsonData)
      }

      await AsyncStorage.setItem('mycards', JSON.stringify(myCards));
      alert('Congratulations! Saved this in your storage.')

      Actions.home()

    } catch (error) {
      // Error saving data
    }
  };

  render() {

    const { hasFocus, colorFocus, myJSON } = this.state

    return (
      <View style={styles.container} >

        <Header
          text={this.props.cardId ? 'EDIT DIGITAL SIGN' : 'CREATE DIGITAL SIGN'}
          back
          check
          onClick={() => this._storeData(myJSON, this.props.cardId)}
        />

        <View style={{ backgroundColor: 'red', height: p(145) }}>
          <WebView
            originWhitelist={['*']}
            style={{ width: screenWidth }}
            source={{ html: this.props.html }}
            scrollEnabled={false}
            onMessage={this.onMessage}
            ref={(webView) => this.webView = webView}
            startInLoadingState={true}
            onLoadEnd={(e) => this.onSendMyMsg(this.props.json)}

          />
        </View>

        <KeyboardAvoidingView
          style={styles.web}
          enabled
          behavior={Platform.OS === 'ios' ? null : 'padding'}
          keyboardVerticalOffset={p(25)}
        >

          <ScrollView style={styles.inputBox}>

            <Text style={styles.colorText}>TEXT COLOR </Text>

            <View style={styles.horizontal}>
              <ScrollView
                pagingEnabled={true}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {
                  myJSON.colors.map((item, index) =>
                    (colorFocus == index || colorFocus == -1) &&
                    <TouchableHighlight
                      key={index}
                      style={[styles.circle, { backgroundColor: item }]}
                      onPress={() => { this.setState({ colorFocus: index }) }}
                    >
                      <Text></Text>
                    </TouchableHighlight>
                  )
                }

                {
                  colorFocus !== -1 &&
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.bar}></View>
                    {
                      COLORS.map((color, index) =>
                        <TouchableHighlight
                          key={index}
                          style={[styles.circle, { backgroundColor: color }]}
                          onPress={() => {

                            let newArray = myJSON;
                            newArray.colors[colorFocus] = color;
                            this.setState({ myJSON: newArray, colorFocus: -1 });
                            this.webView.postMessage(JSON.stringify(newArray));

                          }}
                        >
                          <Text></Text>
                        </TouchableHighlight>)
                    }
                  </View>
                }
              </ScrollView>
            </View>

            {
              myJSON.texts.map((item, index) =>
                <TextInput
                  key={index}
                  value={item}
                  style={[styles.textInput, { marginTop: 0 }, hasFocus == index && { borderLeftWidth: p(7) }]}
                  onChangeText={(x) => {
                    let newArray = myJSON;
                    newArray.texts[index] = x;
                    this.setState({ myJSON: newArray });
                    this.webView.postMessage(JSON.stringify(newArray));
                  }}
                  onBlur={() => this.setState({ hasFocus: 0 })}
                  onFocus={() => this.setState({ hasFocus: index })}
                />)
            }

            <ScrollView horizontal style={{ margin: p(15) }}>
              {
                myJSON.images.map((item, index) =>
                  <TouchableOpacity
                    key={index}
                    onPress={() => this._pickImage(index)}
                    style={{ flexDirection: 'row' }}
                  >
                    <Image
                      style={styles.avatar}
                      source={{ uri: item }} />
                  </TouchableOpacity>)
              }

            </ScrollView>

          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}