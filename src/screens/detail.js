import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const Detail = ({prayers}) => {
    const{data,isLoading} = prayers;
    // const{times} = prayer.data.results.datetime;
    
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                {data !== false ? (
                    <Text>
                        {data.times.Imsak}
                    </Text>
                ) : null}
            </Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        prayers: state.prayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);