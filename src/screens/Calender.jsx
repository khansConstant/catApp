import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Pressable, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';




const Calender = () => {
    return (

        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Select a date</Text>
                <Calendar
                    current={'2023-05-22'}
                    markedDates={{
                        '2023-05-01': { selected: true, marked: true },

                    }} />
                <View style={styles.but}>
                    <Pressable style={styles.btnw}><Text style={styles.white}>Cancel</Text></Pressable>
                    <Pressable style={styles.btnb}><Text style={styles.black}>Apply</Text></Pressable>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },
    card: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        height: "70%",
    },
    head: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnw: {
        width: 150,
        height: 60,
        borderWidth: .8,
        borderColor: 'black',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 10
    },
    btnb: {
        width: 150,
        height: 60,
        borderWidth: .8,
        borderColor: 'black',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10

    },
    black: {
        color: 'white'
    },


    but: {
        marginTop: 20,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

})


export default Calender