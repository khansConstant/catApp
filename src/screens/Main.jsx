import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons"



const Main = ({ navigation }) => {



    return (
        <View style={styles.conatiner}>
            <View style={styles.head}>
                <Text style={styles.title}>Your cat's detail</Text>
                <Text style={styles.sub}> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            </View>
            <View style={styles.pad}>
                <Text style={styles.tag}>Your cats name</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <Text style={styles.tag}>Your cats Picture</Text>
            <Pressable onPress={() => {

                navigation.navigate('Picture')
            }}
                style={styles.picture}>
                <View style={styles.icon}>
                    <FontAwesome5 name='image' size={25} style={styles.icon} />
                    <Text style={styles.icon}>Upload</Text>
                </View>

            </Pressable>
            <View >
                <Text style={styles.tag}>Gender</Text>
                <View style={styles.gender}>
                    <View style={styles.mars} ><FontAwesome5 name='mars' size={25} style={styles.male} /><Text>Male</Text></View>
                    <View style={styles.venus}><FontAwesome5 name='venus' size={25} style={styles.female} /><Text>Female</Text></View>

                </View>
            </View>
            <View><Text style={styles.tag}>Date of birth</Text></View>
            <View style={styles.dateInput}>
                <TextInput style={styles.input}></TextInput>
                <Pressable onPress={() => {

                    navigation.navigate('Calender')
                }}><FontAwesome5 name='calendar' size={25} style={styles.blk} /></Pressable>
            </View>
            <View>

                <Text style={styles.tag}>Curent weight in kgs</Text>
                <View style={styles.weight}>
                    <FontAwesome5 name='minus' size={25} style={styles.blk} />
                    <View style={styles.counter}><Text style={styles.inputBox}>0</Text></View>
                    <FontAwesome5 name='plus' size={25} style={styles.blk} />

                </View>
            </View>
            <View style={styles.but}><View style={styles.btn}><Text style={{ color: 'white' }}>Save and proceed</Text></View></View>




        </View >
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-start"

    },

    gender: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    mars: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'grey'

    },
    venus: {

        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'grey'


    },

    head: {
        padding: 5
    },

    title: {
        fontSize: 30
    },
    tag: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        width: 300,

    },
    pad: {
        padding: 7
    }
    , icon: {
        color: 'turquoise',
        padding: 7
    },
    picture: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 100,
        height: 100,
        borderWidth: .8,
        borderColor: 'grey',
        borderRadius: 10,
        marginLeft: 10
    },
    male: {
        color: "turquoise"
    },
    female: {
        color: 'pink'
    },
    dateInput: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    weight: {
        flexDirection: 'row'
    },
    blk: {
        backgroundColor: 'black',
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 4
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 375,
        height: 40,
        marginTop: 10,
        backgroundColor: "black",
        borderRadius: 7,
        color: 'white'
    },
    but: {
        marginTop: 20,
        marginLeft: 10

    },
    inputBox: {
        width: 260,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        height: 40,
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10

    },
    weight: {
        flexDirection: 'row',
        marginLeft: 10,
    }



})

export default Main;