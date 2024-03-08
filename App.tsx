import React from 'react'
import { withExpoSnack } from 'nativewind'
import AppPro from './AppPro'

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

function App(){
  return(
    <SafeAreaView>
      <StyledView className="flex-1 items-center justify-center top-10">
      <StyledText className="text-slate-800 text-3xl">
        Hello World! 🎉
      </StyledText>
      <AppPro />
    </StyledView>
    </SafeAreaView>
  )
}

export default withExpoSnack(App);