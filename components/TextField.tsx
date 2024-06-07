import {useInteractionState} from '@/hooks/useInteractionState'
import * as React from 'react'
import {
  StyleSheet,
  Text,
  type TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {} from '@/alf/'
import {android, atoms as a} from '@/alf'
import {color as t} from '@/alf/tokens'
import {web} from '@/alf/util/platform'
import {HITSLOP_20} from '@/lib/constatnts'
import {mergeRefs} from '@/lib/mregeRefs'

const Context = React.createContext<{
  inputRef: React.RefObject<TextInput> | null
  isInvalid: boolean
  hovered: boolean
  onHoverIn: () => void
  onHoverOut: () => void
  focused: boolean
  onFocus: () => void
  onBlur: () => void
}>({
  inputRef: null,
  isInvalid: false,
  hovered: false,
  onHoverIn: () => {},
  onHoverOut: () => {},
  focused: false,
  onFocus: () => {},
  onBlur: () => {},
})

export type RootProps = React.PropsWithChildren<{isInvalid?: boolean}>

export function Root({children, isInvalid = false}: RootProps) {
  const inputRef = React.useRef<TextInput>(null)
  const {
    state: hovered,
    onIn: onHoverIn,
    onOut: onHoverOut,
  } = useInteractionState()
  const {state: focused, onIn: onFocus, onOut: onBlur} = useInteractionState()

  const context = React.useMemo(
    () => ({
      inputRef,
      hovered,
      onHoverIn,
      onHoverOut,
      focused,
      onFocus,
      onBlur,
      isInvalid,
    }),
    [
      inputRef,
      hovered,
      onHoverIn,
      onHoverOut,
      focused,
      onFocus,
      onBlur,
      isInvalid,
    ],
  )

  return (
    <Context.Provider value={context}>
      <View
        style={[a.flex_row, a.align_center, a.relative, a.flex_1, a.px_md]}
        {...web({
          onClick: () => inputRef.current?.focus(),
          onMouseOver: onHoverIn,
          onMouseOut: onHoverOut,
        })}>
        {children}
      </View>
    </Context.Provider>
  )
}

export function useSharedInputStyles() {
  return React.useMemo(() => {
    const hover: ViewStyle[] = [
      {
        borderColor: t.green_200,
      },
    ]
    const focus: ViewStyle[] = [
      {
        borderColor: t.green_200,
      },
    ]
    const error: ViewStyle[] = [
      {
        backgroundColor: t.red_300,
      },
    ]
    const errorHover: ViewStyle[] = [
      {
        backgroundColor: t.red_300,
        borderColor: t.red_300,
      },
    ]

    return {
      chromeHover: StyleSheet.flatten(hover),
      chromeFocus: StyleSheet.flatten(focus),
      chromeError: StyleSheet.flatten(error),
      chromeErrorHover: StyleSheet.flatten(errorHover),
    }
  }, [])
}

export type InputProps = Omit<TextInputProps, 'value' | 'onChangeText'> & {
  label: string
  value?: string
  onChangeText?: (value: string) => void
  isInvalid?: boolean
  inputRef?: React.RefObject<TextInput>
}

export function createInput(Component: typeof TextInput) {
  return function Input({
    label,
    placeholder,
    value,
    onChangeText,
    isInvalid,
    inputRef,
    ...rest
  }: InputProps) {
    const ctx = React.useContext(Context)
    const withinRoot = Boolean(ctx.inputRef)

    const {chromeHover, chromeFocus, chromeError, chromeErrorHover} =
      useSharedInputStyles()

    if (!withinRoot) {
      return (
        <Root isInvalid={isInvalid}>
          <Input
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            isInvalid={isInvalid}
            {...rest}
          />
        </Root>
      )
    }

    const refs = mergeRefs([ctx.inputRef, inputRef!].filter(Boolean))

    return (
      <>
        <Component
          accessibilityHint={undefined}
          {...rest}
          accessibilityLabel={label}
          ref={refs}
          value={value}
          onChangeText={onChangeText}
          onFocus={ctx.onFocus}
          onBlur={ctx.onBlur}
          placeholder={placeholder || label}
          placeholderTextColor={t.grey_200}
          keyboardAppearance={'dark'}
          hitSlop={HITSLOP_20}
          style={[
            a.relative,
            a.z_20,
            a.flex_1,
            a.text_md,
            a.font_bold,
            {color: t.yellow_300, outlineWidth: 0},
            a.px_xs,
            {
              // paddingVertical doesn't work w/multiline - esb
              paddingTop: 14,
              paddingBottom: 14,
              lineHeight: a.text_md.fontSize * 1.1875,
              textAlignVertical: rest.multiline ? 'top' : undefined,
              minHeight: rest.multiline ? 80 : undefined,
            },
            android({
              paddingBottom: 16,
            }),
          ]}
        />

        <View
          style={[
            a.z_10,
            a.absolute,
            a.inset_0,
            a.rounded_sm,
            {borderColor: t.grey_400, borderWidth: 2},
            ctx.hovered ? chromeHover : {},
            ctx.focused ? chromeFocus : {},
            ctx.isInvalid || isInvalid ? chromeError : {},
            (ctx.isInvalid || isInvalid) && (ctx.hovered || ctx.focused)
              ? chromeErrorHover
              : {},
          ]}
        />
      </>
    )
  }
}

export const Input = createInput(TextInput)

export function LabelText({
  nativeID,
  children,
}: React.PropsWithChildren<{nativeID?: string}>) {
  return (
    <Text
      nativeID={nativeID}
      style={[a.text_sm, a.font_bold, a.mb_sm, {color: t.grey_400}]}>
      {children}
    </Text>
  )
}
