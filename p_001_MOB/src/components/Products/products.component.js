import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { setHomeNavigation } from '../../store/actions';
import {
    createAnimatableComponent
} from 'react-native-animatable';

class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    name: 'Shava',
                    manufactorer: 'Tandir',
                    price: 5,
                    picture: './prod.png'
                },
                {
                    name: 'Pirog',
                    manufactorer: 'Tandir',
                    price: 10,
                    picture: './prod.png'
                },
            ]
        };
    }
    static nanavigationOptions = {
        drawerLabel: 'Products'
    };

    componentWillMount() {
        this.props.setHomeNavigation(this.props.navigation);
    }

    
    onToggleMenu = () => {
        this.props.homeRouter.toggleDrawer();
    }

    /* CREATE COMPONENT!!!! */
    renderItemComponent = ({item}) => (
        <View style={productsStyle.item}>
            <Text>{item.name}</Text>
            <Text>{item.manufactorer}</Text>
            <Text>{item.price}</Text>
            <Image 
                style={{width: 66, height: 58}}
                source={require(item.picture)}/>
        </View>
    )

    render() {
        console.log(this.props);
        return (
            <View 
                style={productsStyle.container}>
                <Text>Products</Text>
                <FlatList
                    data={this.state.products}
                    renderItem={this.renderItemComponent}
                    />
            </View>
        );
    }
}

const productsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#76cdd8'
    },
    item: {
        height: 100
    }
});

const mapStateToProps = (state) => {
    let userData = state.auth.userData;
    return {
        userData
    };
};

const mapDispatchToProps = (dispatch) => ({
    setHomeNavigation: (value) => {
        dispatch(setHomeNavigation(value));
    }
});

export const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);