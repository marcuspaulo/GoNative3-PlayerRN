import { createAppContainer, createStackNavigator } from "react-navigation";
import { colors } from "styles";

import Main from "pages/main";
import Search from "pages/search";
import Album from "pages/album";

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
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
