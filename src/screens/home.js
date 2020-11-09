import React, { useState, useEffect } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import axios from 'axios'
import {connect} from 'react-redux';
import * as action from "./../redux/action/prayer";

const Home = ({navigation,handleGetPrayer}) => {
    // const{ handleGetPrayer } = this.props;
    const [city,setCity] = useState(false);
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    })

    useEffect(()=>{
        callGeo();
    },[]);

    function callGeo(){
        console.log('your position');
    }

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput style={{height:40}}
            placeholder="Find your city here"
            onChangeText={text => setCity(text)}
            />
            <Button title="find" onPress={() => handleGetPrayer(city)}/>
            <Text>
                {location.longitude}
            </Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Detail')}/>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        prayer: state.prayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetPrayer: city => dispatch(action.getPrayer(city)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);