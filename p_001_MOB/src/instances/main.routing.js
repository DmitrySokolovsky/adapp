import { createDrawerNavigator } from 'react-navigation';
import { Products, Profile, Group } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MainTabStack = createDrawerNavigator(
    {
        Products: Products,
        Profile: Profile,
        Group: Group
    },
    {
        initialRouteName: 'Products',
    }
);
