import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import AuthLoadingScreen from '../AuthLoading/AuthLoading';
import CheckNumber from '../CheckNumber/CheckNumber';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import OfferDetails from '../OfferDetails/OfferDetails';
import QRScreen from '../QRScreen/QRScreen';
import BrandDetails from '../BrandDetails/BrandDetails'

const transitionSpec = {
  useNativeDriver: true,
  animation: 'spring',
  config: {
    stiffness: 1500,
    damping: 300,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

const QRPage = createStackNavigator({
  QRScreen,
}, {
  // mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    ...TransitionPresets.ModalPresentationIOS,
    cardOverlayEnabled: true,
    gestureEnabled: true,
  },
});
const App = createSharedElementStackNavigator({
  Home,
  OfferDetails,
  QRPage,
  BrandDetails
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    cardOverlayEnabled: true,
    gestureEnabled: true,
    transitionSpec: {
      open: transitionSpec,
      close: transitionSpec,
    },
  },
});
const AuthLoading = createStackNavigator({
  AuthLoadingScreen,
}, {
  headerMode: 'none'
});

const Start = createStackNavigator({
  CheckNumber,
  SignUp
}, {
  mode: 'modal',
  headerMode: 'none',
});

const AuthStack = createStackNavigator({
  Start
}, {
  mode: 'modal',
  headerMode: 'none',
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading,
  App,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});

export default createAppContainer(SwitchNavigator);
