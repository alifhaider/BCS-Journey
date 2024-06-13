import * as React from 'react'
import {Link, Slot, Stack} from 'expo-router'
import { View, Text, Button} from 'react-native'
import {atoms as a, tokens as t} from '@/alf'
import {AntDesign} from '@expo/vector-icons'
import BottomSheet, {BottomSheetBackdrop,  BottomSheetView} from '@gorhom/bottom-sheet'
import {Program} from '@/types/common'

const Header = () => {
  return (
    <View
      style={[
        {backgroundColor: t.color.purple_700},
        a.flex_row,
        a.justify_between,
        a.align_center,
        a.border_0,
        a.px_lg,
        a.py_sm,
      ]}>
      <ProgramSelect />

      <TotalXp />

      <View style={[a.flex_row, a.align_center, a.gap_xs]}>
        <AntDesign name="heart" size={20} color={t.color.red_300} />
        <Text style={[a.text_lg, a.font_bold, {color: t.color.red_300}]}>
          5
        </Text>
      </View>
    </View>
  )
}

const ProgramSelect = () => {
  const [openBottomSheet, setOpenBottomSheet] = React.useState(false)
  const sheetRef = React.useRef<BottomSheet>(null);
  const programOptions = [
    Program.ENGLISH,
    Program.MATH,
    Program.SCIENCE,
    Program.SOCIAL_STUDIES,
  ]
  const snapPoints = React.useMemo(() => ['25%', '50%'], [])


  const handleBottomSheetCollapse = React.useCallback(() => {
    setOpenBottomSheet(true)
    sheetRef.current?.expand()
  }
    , [])
  const handleCloseSheet = React.useCallback(() => {
    sheetRef.current?.close()
  }
    , [])
  
  const renderBackdrop = React.useCallback((props: any) => (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior="close" />
  ), [])


  const renderItem = React.useCallback(
    (item: Program) => (
      <Link
        href={`/exercise/${Program.ENGLISH.toLowerCase()}?level=${1}`}
        key={item}
        onPress={() => {
          handleCloseSheet()
        }}
        style={[a.py_xs, a.mx_2xl, a.rounded_md, a.border, a.shadow_md, {backgroundColor: "transparent", borderColor: t.color.red_300}]}>
        <Text style={[a.flex, a.justify_center,a.font_bold, a.text_2xl, a.text_center, a.w_full]}>{item}</Text>
      </Link>
    ),
    [handleCloseSheet],
  )
  return (
    <>
      <View>
        <Button title={Program.ENGLISH} onPress={handleBottomSheetCollapse} />
        {openBottomSheet && (

        <BottomSheet
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: t.color.yellow_300 }}
          handleIndicatorStyle={{ backgroundColor: t.color.black_800 }}
          backdropComponent={renderBackdrop}
          enablePanDownToClose={true}
         >
          <BottomSheetView
            style={[a.flex_col, a.gap_lg]}>
            {programOptions.map(renderItem)}
          </BottomSheetView>
        </BottomSheet>
        )}
      </View>
    </>
  )
}

function TotalXp() {
  const totalXp = 100
  const currentXp = 65

  return (
    <View style={[a.flex_row, a.gap_sm, a.align_center, a.relative, a.justify_center, a.rounded_full, { backgroundColor: t.color.grey_400, width: 150 }]}>
      <View style={[a.absolute, a.inset_0, a.rounded_full, { backgroundColor: t.color.red_300, width: `${currentXp}%` }]} />
      <AntDesign name="star" size={16} color={t.color.yellow_300} />

      <Text style={[a.text_lg, a.font_bold, { color: t.color.yellow_300 }]}>
        { currentXp}/{totalXp}
      </Text>
    </View>
  )
}

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          header: Header,
        }}
      />

      <Slot />
    </Stack>
  )
}
