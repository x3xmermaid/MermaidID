import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { withNavigation} from 'react-navigation';

class BasicHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:1, alignContent: 'flex-start', flexDirection:'row'}}>
                        <View style={{ flex: 1, margin:2 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Icon size={25} type='antdesign' name='arrowleft' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text style={{fontSize: 20, color: 'black'}}>{this.props.title}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        position: "absolute",
        width: '100%',
        height: 52,
        backgroundColor: '#ffffff',
        zIndex: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    },
    headerComponent: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
    }
})

export default withNavigation(BasicHeader);
