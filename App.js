import React,{Component} from 'react'
import {Text,View, Image} from 'react-native'
import BookSearchScreen from './screens/BookSearchScreen'
import BookTransactionScreen from './screens/BookTransactionScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LogInScreen from './screens/LogInScreen'
export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Transaction: {screen:BookTransactionScreen},
  Search: {screen:BookSearchScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Transaction"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
)
const switchNavigator = createSwitchNavigator({
  LogInScreen:{screen:LogInScreen},
  tabNavigator: {screen:tabNavigator}
})
const AppContainer = createAppContainer(switchNavigator)
