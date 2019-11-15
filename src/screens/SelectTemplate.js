import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p } from '../config/normalize';
import { screenWidth, TEMPLATES } from '../config/static';
import { WebView } from 'react-native-webview';
import UtilService from '../config/utils';
import Header from '../components/Header';

export default class SelectTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFocus: 0,
            colorFocus: -1,
            myJSON: props.json
        }
        this.webView = null;
    }

    render() {
        return (
            <View style={styles.container}>

                <Header text={'SELECT A TEMPLATE'} back/>

                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {
                        TEMPLATES.map((item, index) =>
                            <TouchableOpacity
                                key={index}
                                style={styles.card}
                                onPress={() => Actions.create_design({ 
                                    templateId: item,
                                    json: UtilService.FilterJson(item), 
                                    html: UtilService.FilterTemplate(item) 
                                })}
                            >
                                <WebView
                                    originWhitelist={['*']}
                                    style={styles.cardBox}
                                    source={{ html: UtilService.FilterTemplate(item) }}
                                    scrollEnabled={false}
                                    startInLoadingState={true}
                                />
                            </TouchableOpacity>)
                    }

                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center'
    },
    card: {
        marginBottom: p(8),
        borderRadius: p(10),
        overflow: 'hidden'
    },
    cardBox: {
        width: screenWidth - p(16),
        height: p(133),
    },
})
