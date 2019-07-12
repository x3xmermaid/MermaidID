import React, { Component } from 'react';
import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const widthDim = Dimensions.get('window').width
const heightDim = Dimensions.get('window').height

class BottomNav extends Component {
    render() {
        return(
                <View style={styles.BottomHeader}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={{marginTop: 10}}>
                            <Icon size={30} name='message1' type='antdesign' />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity style={{flex:1, borderWidth: 2, borderColor: '#ff6600', borderRadius: 6}}>
                            <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 7, color: '#ff6600'}}>Beli</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity style={{flex:1, borderWidth: 2, borderColor: '#ff6600', backgroundColor: '#ff6600', alignSelf: 'center', borderRadius: 6}}>
                            <Text style={{color: 'white', marginTop: 10}}>Tambah Ke Keranjang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create(
    {
        BottomHeader: {
            width: '100%',
            height: 45,
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            zIndex: 5,
            top: heightDim*0.9,
            elevation: 2,
            borderTopColor: '#a6a6a6',
            shadowColor: "#a6a6a6",
            shadowOffset: {
                width: 0, height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
        }
    }
)

export default BottomNav;
