import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "react-native";

import { styles } from "./styles";

export default function ListConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View style={styles.container}>
                <MedicinesAndButton
                    text="Próxima consulta"
                    text2="17/08/2023"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="17/02/2023"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="25/05/2022"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="04/01/2022"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
            </View>
        </>
    );
}
