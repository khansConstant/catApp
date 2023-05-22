import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'


const Picture = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Your cats picture</Text>
                <Pressable style={styles.press}><View style={styles.iconContainer}><FontAwesome5 name='camera' size={28} style={styles.icon} /></View><Text style={styles.pressText}>Take a picture</Text></Pressable>
                <Pressable style={styles.press}><View style={styles.iconContainer}><FontAwesome5 name='folder' size={28} style={styles.icon} /></View><Text style={styles.pressText}>Take a picture</Text></Pressable>

                <Pressable style={styles.cancel}><Text style={styles.can}>Cancel</Text></Pressable>



            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        pressText: {
            fontSize: 20,
        },
        container: {
            backgroundColor: 'black',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: "center"
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 45,
            backgroundColor: 'black',
            borderRadius: 7,
            marginRight: 10,
        },
        icon: {


            color: 'white',

        },
        card: {
            padding: 20,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: "100%",
            height: "45%",
        },
        text: {
            fontSize: 30,

        },
        press: {
            marginTop: 20,
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 12,
            width: 300,
            height: 60,
            borderWidth: 1,
            borderColor: 'black',
            fontSize: 20,
        },
        cancel: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            width: 300,
            height: 60,
            borderWidth: 1,
            borderColor: 'black',
            fontWeight: 'bold'
        },
        can: {
            fontWeight: 'bold',
            fontSize: 20,
        }
    }
)

export default Picture;
