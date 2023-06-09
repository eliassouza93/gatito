import { SafeAreaView, StatusBar, KeyboardAvoidingView } from "react-native"
import estilosGlobal from './estilos'
export default function TelaPadrao({ children }) {

    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView>
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView >
}