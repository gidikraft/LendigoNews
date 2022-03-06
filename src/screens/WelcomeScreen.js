import { View, SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from '../screen.styles.js/WelcomeScreenStyles';
import * as SQLite from 'expo-sqlite';
import { CONSTANTS } from '../utils/Constants';

const { 
    FETCH_DATA_QUERY, 
    CREATE_TABLE_QUERY,
    ADD_ITEM_QUERY,
    ERROR,
    ALERT_MESSAGE,
    CONTAINED,
    USERNAME,
    PASSWORD,
    OUTLINED,
    
} = CONSTANTS

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function WelcomeScreen({navigation}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)

    //creates db table
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                CREATE_TABLE_QUERY
            )
        })
    }

    //checks if user is signed in and naviagtes if true
    const fetchData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    FETCH_DATA_QUERY,
                    [],
                    (tx, result) => {
                        var len = result.rows.length;
                        if ( len > 0) {
                            navigation.navigate('News')
                        }
                    }
                ) 
            })
            
        } catch (error) {
        console.log(error)
        }
    }

    //adds user to db and signs in to news page
    const addNewItem = () => {
        db.transaction(tx => {
            tx.executeSql(ADD_ITEM_QUERY, [name, 0],
                (txObj, resultSet) => setData({ data: data.concat(
                    { id: resultSet.insertId, text: name, count: 0 }) }),
                (txObj, error) => console.log(ERROR, error),
                navigation.navigate("News")

            )
        })
        console.log('data')
    }

    const handleLoginPress = () => {
        if (name.length > 4 && name != '') 
            addNewItem()
        else 
            Alert.alert(ALERT_MESSAGE);

    }

    const deleteItem = (id) => {
        db.transaction(tx => {
          tx.executeSql('DELETE FROM items WHERE id = ? ', [id],
            (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                    let newList = item.filter(data => {
                        if (data.id === id)
                            return false
                        else
                            return true
                    })
                    setData({ data: newList })
                }
            })
        })
    }

    useEffect(() => {
        createTable()
        fetchData()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} onPress={() => navigation.navigate("News")}>Welcome to LendigoNews</Text>
            <TextInput 
                style={styles.input}
                theme={{ roundness: 10 }}
                label={USERNAME}
                mode={OUTLINED}
                onChangeText={(value) => setName(value)}
                value={name}
            />

            <TextInput 
                style={styles.input}
                theme={{ roundness: 10 }}
                label={PASSWORD}
                mode={OUTLINED}
                onChangeText={(value) => setPassword(value)}
                value={password}
            />

            <Button theme={{ roundness: 6 }} mode={CONTAINED} style={styles.button} onPress={() => {handleLoginPress()}} >Sign up</Button>

            <Text style={styles.aboutAuthor} >
                Learn more about: <Text onPress={() => navigation.navigate('About')} style={styles.seun} >Seun Fagade</Text>
            </Text>

        </SafeAreaView>
    )
}