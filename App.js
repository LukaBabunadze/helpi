import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Menu, Notifications, Profile } from './screens';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <BottomTab.Navigator 
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#5e76c4',
              tabBarInactiveTintColor: 'grey',
              tabBarStyle: {
                width: '94%',
                elevation: 0,
                justifyContent: 'center',
                alignSelf: 'center',
                paddingTop: 8,
              },
              tabBarItemStyle: {
                position: 'relative',
                bottom: 4,
              }

          }}>
            <BottomTab.Screen 
              name='Menu' 
              component={Menu} 
              options={{tabBarLabel: 'მენიუ', tabBarIcon: ({color}) => (<Feather name="menu" size={24} color={color} />)
            }}/>
            <BottomTab.Screen 
              name='Main' 
              component={Main} 
              options={{tabBarLabel: 'მთავარი', tabBarIcon: ({color}) => (<SimpleLineIcons name="home" size={22} color={color} />)
            }}/>
            <BottomTab.Screen 
              name='Notifications' 
              component={Notifications} 
              options={{tabBarLabel: 'შეტყობინება', tabBarIcon: ({color}) => (<SimpleLineIcons name="bell" size={23} color={color} />)
            }}/>
            <BottomTab.Screen 
              name='Settings' 
              component={Profile} 
              options={{tabBarLabel: 'პროფილი', tabBarIcon: ({color}) => (<FontAwesome name="user-o" size={23} color={color} />)
            }}/>
          </BottomTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


