import { useInteractionState } from '@/hooks/useInteractionState'
import * as React from 'react'
import { Text, type TextInputProps, View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { } from "@/alf/"
import { atoms as a } from '@/alf/atoms'
import { web } from '@/alf/utl/platform'

type TextFieldProps = {
  error?: string
  placeholder?: string
} & React.ComponentProps<typeof TextInput>


export type InputProps = Omit<TextInputProps, 'value' | 'onChangeText'> & {
  label: string
  value?: string
  onChangeText?: (value: string) => void
  isInvalid?: boolean
  inputRef?: React.RefObject<TextInput>
}

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

export type RootProps = React.PropsWithChildren<{ isInvalid?: boolean }>


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


export default function TextField(props: TextFieldProps) {
  const { placeholder, ...rest} = props
  return (
    <View>
      <Text>Email</Text>
      <TextInput {...rest} placeholder={placeholder} />
      <Text style={{color: 'red'}}>{props.error}</Text>
    </View>
  )
}
