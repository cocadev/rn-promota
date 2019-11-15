import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { p } from '../config/normalize';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class Header extends React.Component {

    render() {

        const { text, check, back, onClick } = this.props

        return (
            <View style={styles.header}>
                <View style={styles.icon}>
                    {
                        back &&
                        <EvilIcons
                            name={'chevron-left'}
                            onPress={() => Actions.pop()}
                            size={p(30)}
                            color={'#777'}
                        />
                    }
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.headerText}>{text}</Text>
                </View>

                <View style={styles.icon}>
                    {
                        check && <Ionicons
                            name={'ios-checkmark'}
                            onPress={onClick}
                            size={p(30)}
                            color={'#777'}
                            style={{ marginLeft: p(8) }}

                        />
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: p(35),
        flexDirection: 'row'
    },
    headerText: {
        fontSize: p(13),
        fontFamily: 'Muli-Light',
        fontWeight: '300',
        color: '#333',
    },
    icon: {
        width: p(30),
    }
});