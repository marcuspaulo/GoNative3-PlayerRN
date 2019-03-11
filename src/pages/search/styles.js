import { StyleSheet } from "react-native";
import { colors, metrics } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },

  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    borderBottomColor: 1,
    borderBottomColor: colors.secundary,
    paddingBottom: metrics.basePadding
  }
});

export default styles;
