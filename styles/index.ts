import {Colors} from '@/constants/Colors'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  headerLarge: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.brand.SunriseGlow,
    textAlign: 'center',
    marginVertical: 40,
  },
  primaryButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.brand.LavendarMist,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.brand.CirtusBurst,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: Colors.brand.CoralSunset,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },

  primaryInput: {
    backgroundColor: Colors.brand.LavendarMist,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  primaryText: {
    color: Colors.brand.CoralSunset,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
