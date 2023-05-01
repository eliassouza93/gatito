import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Servicos from './telas/Servicos'
import Carrinho from './telas/Carrinho'
 
const Tab = createBottomTabNavigator()

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#A050BE',
                inactiveTintColor: '#fff',

                labelStyle: {
                    width: '100%',
                    height: 50,
                    fontWeight: 'bold',
                    fontSize: 18,
                    justifyContent: 'center',
                    paddingTop: 14,
                    backgroundColor: '#FABE50'


                },
                keyboardHidesTabBar:true
            }}
        >
            <Tab.Screen name='Serviços' component={Servicos} />
            <Tab.Screen name='Carrinho' component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}
