import { createAppContainer, createStackNavigator } from "react-navigation";
import { colors } from "styles";

import Main from "pages/main";
import Search from "pages/main";
import Album from "pages/main";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Search: { screen: Search },
      Album: { screen: Album }
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTintColor: colors.white,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
