import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import MedicineInfoList from '../../components/MedicineInfoList';
import colors from '../../constants/Colors';
import MenuOptions from '../../components/MenuOptions';

export default function Medicine() {
    // Obtendo o id da URL
    const { name } = useLocalSearchParams();

    // Dados de exemplo
    const data = [
        {
            "id": 1,
            "nome": "Dicloridrato de levocetirizina",
            "classificacao": "anti-histamínico",
            "princípio ativo": "Dicloridrato de levocetirizina",
            "indicações": ["Rinite alérgica", "Urticária crônica idiopática"],
            "contraindicações": [
                "Hipersensibilidade à levocetirizina ou a outros componentes da fórmula",
                "Doença renal em estágio avançado",
                "Hemodiálise",
                "Insuficiência renal grave"
            ],
            "modo de uso": [
                "O dicloridrato de levocetirizina deve ser administrado por via oral, e pode ser ingerido antes ou após as refeições. O comprimido deve ser engolido de uma só vez, com a ajuda de líquidos. Não pode ser partido ou mastigado.",
                {
                    "Uso em Adultos e Adolescentes a partir de 12 anos": "A dose diária recomendada é de 5 mg (1 comprimido), por via oral, a cada 24 horas (1 vez ao dia).",
                    "Crianças de 6 a 12 anos": "A dose diária recomendada é de 5 mg (1 comprimido), por via oral, a cada 24 horas (1 vez ao dia).O limite máximo diário de administração recomendado é 5 mg."
                }
            ],
            "Efeitos Colaterais": [
                "Náuseas",
                "Vômitos",
                "Diarreia",
                "Fadiga",
                "Constipação",
                "Xerostomia",
                "Otite média",
                "Nasofaringite",
                "Tosse",
                "Epistaxe",
                "Faringite",
                "Febre",
                "Sonolência"
            ],
            "interações medicamentosas": [
                "Álcool",
                "Alizaprida",
                "Bromoprida",
                "Clometiazol",
                "Metoclopramida",
                "Sulfato de Magnésio",
                "Anfetaminas",
                "Hialuronidase",
                "Anticolinérgicos",
                "ISRS",
                "Clozapina",
                "Flunitrazepam",
                "Opioides",
                "Zolpidem",
                "Inibidores de acetilcolinesterase",
                "Levossulpirida",
                "Talidomida",
                "Tiazídicos"
            ]
        },
        {
            "id": 2,
            "nome": "Bromoprida",
            "princípio ativo": "Bromoprida",
            "classificacao": ["antiemético", "procinético"],
            "indicações": ["Distúrbios da motilidade gastrintestinal", "Refluxo gastroesofágico", "Náuseas e vômitos", "Facilitação de procedimentos radiológicos do trato gastrintestinal"],
            "contraindicações": [
                "alergia conhecida à bromoprida ou a qualquer um dos componentes do medicamento",
                "pacientes com histórico de epilepsia ou demais distúrbios convulsivos",
                "casos de feocromocitoma, um tipo de tumor raro que pode causar hipertensão",
                "obstrução ou perfuração intestinal, onde o aumento da motilidade pode ser prejudicial"
            ],
            "modo de uso": ["24 gotas correspondem a 1 (um) mL. Utilize o gotejador conforme orientação médica ou coloque em uma colher a quantidade exata e então administre a dose pela via oral (boca)."],
            "Efeitos Colaterais": [
                "Inquietação",
                "sonolência",
                "fadiga",
                "lassidão"
            ],
            "interações medicamentosas": [
                "Drogas anticolinérgicas",
                "Analgésicos narcóticos",
                "Sedativos",
                "Hipnóticos",
                "Narcóticos",
                "Tranquilizantes",
                "Inibidores da monoaminoxidase (IMAOs)",
                "Digoxina",
                "Paracetamol",
                "Tetraciclina",
                "Levodopa"
            ]
        }
    ];

    // Verificar se o id existe e buscar o medicamento correspondente
    const medicine = data.find(item => item.nome === name);

    if (!medicine) {
        return (
            <>
                <Stack.Screen options={{ headerTitle: "Resultado"}} />
                <View style={{
                    flex: 1,
                    width: "100%",
                    height: '100%',
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'Inter_400Regular',
                        color: 'rgba(0,0,0,0.4)'
                    }}>Medicamento não encontrado</Text>

                    <MenuOptions />
                </View>
            </>
        );
    }

    // Mapear os dados para o formato correto para o FlatList
    // Mapear os dados para o formato correto para o FlatList
const infoArray = [
    { id: 1, title: "Princípio Ativo", description: medicine["princípio ativo"] },
    { id: 2, title: "Indicações", description: medicine.indicações.join(", ") },
    { id: 3, title: "Contraindicações", description: medicine.contraindicações.join(", ") },
    {
        id: 4,
        title: "Modo de Uso",
        description: Array.isArray(medicine["modo de uso"]) && typeof medicine["modo de uso"][1] === 'object'
            ? Object.entries(medicine["modo de uso"][1])
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n")
            : medicine["modo de uso"].join("\n")
    },
    { id: 5, title: "Efeitos Colaterais", description: medicine["Efeitos Colaterais"].join(", ") },
    { id: 6, title: "Interações Medicamentosas", description: medicine["interações medicamentosas"].join(", ") }
];

    return (
        <>
        <Stack.Screen options={{ headerTitle: "Resultado"}} />
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{medicine.nome}</Text>
                <Text style={styles.activeIngredients}>{medicine["princípio ativo"]}</Text>
            </View>

            <FlatList
                style={styles.list}
                contentContainerStyle={{ flexGrow: 1 }}
                data={infoArray}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MedicineInfoList data={[item]} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            />
            <View 
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom:32,
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}>
                <MenuOptions />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green
    },
    name: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
        color: '#FFF'
    },
    activeIngredients: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: '#FFF'
    },
    list: {
        padding: 16,
        flex: 1
    }
});
