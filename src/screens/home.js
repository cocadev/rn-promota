import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p } from '../config/normalize';
import { screenWidth } from '../config/static';
import { WebView } from 'react-native-webview';
import { EvilIcons } from '@expo/vector-icons';
import UtilService from '../config/utils';
import Header from '../components/Header';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasFocus: 0,
			colorFocus: -1,
			myJSON: props.json,
			myCards: []
		};
		this.webView = [];
	}

	async componentDidMount() {
		try {
			const value = await AsyncStorage.getItem('mycards');
			this.setState({ myCards: JSON.parse(value) });
		} catch (error) {}
	}

	onSendMyMsg(index) {
		const { myCards } = this.state;
		this.webView[index].postMessage(JSON.stringify(myCards[index]));
	}

	onMessage(event) {
		console.log('On Message', event.nativeEvent.data);
	}

	render() {
		const { myCards } = this.state;
		return (
			<View style={styles.container}>
				<Header text={'Welcome to My Promota!'} />

				<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
					{myCards &&
						myCards.map((item, index) => (
							<TouchableOpacity
								style={styles.card}
								key={index}
								onPress={() =>
									Actions.create_design({
										json: item,
										html: UtilService.FilterTemplate(item.templateId),
										cardId: item.id,
										templateId: item.templateId
									})}
							>
								<WebView
									originWhitelist={[ '*' ]}
									style={styles.cardBox}
									source={{ html: UtilService.FilterTemplate(item.templateId) }}
									scrollEnabled={false}
									startInLoadingState={true}
									onMessage={this.onMessage}
									onLoadEnd={(e) => this.onSendMyMsg(index)}
									ref={(webView) => (this.webView[index] = webView)}
								/>
							</TouchableOpacity>
						))}

					<EvilIcons
						name={'plus'}
						onPress={() => Actions.select_template()}
						style={{ alignSelf: 'center', marginVertical: p(20) }}
						size={p(50)}
						color={'#777'}
					/>
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
		height: p(133)
	}
});
