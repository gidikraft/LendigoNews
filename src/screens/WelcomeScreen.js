import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from '../screen.styles.js/WelcomeScreenStyles';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function WelcomeScreen({navigation}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)

    // Check if the items table exists if not create it
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'
            )
        })
    }

    const fetchData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM items",
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

    const newItem = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO items (text, count) values (?, ?)', [name, 0],
                (txObj, resultSet) => setData({ data: data.concat(
                    { id: resultSet.insertId, text: name, count: 0 }) }),
                (txObj, error) => console.log('Error', error),
                // navigation.navigate("News")
                // console.log(resultSet)

            )
        })
        console.log('data')
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

    const renderItem = ({ item }) => {
        <Item title={item.text} />
    };

    useEffect(() => {
        createTable()
        fetchData()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to LendigoNews</Text>
            <TextInput 
                label='Username'
                mode='flat'
                onChangeText={(value) => setName(value)}
                value={name}
            />

            <TextInput 
                label='Password'
                mode='outlined'
                onChangeText={(value) => setPassword(value)}
                value={password}
            />

            
            <Button theme={{ roundness: 6 }} mode='contained' style={styles.button} onPress={() => {newItem()}} >Sign up</Button>
            <Button theme={{ roundness: 10 }} mode='contained' style={styles.button} onPress={() => navigation.navigate("News")} >Navigate</Button>
{/* 
            <Text style={styles.header}>Enter Username and </Text>
            <TouchableOpacity onPress={() => {newItem()}} style={styles.green}>
            <Text style={styles.white}>Add New Item</Text>
            </TouchableOpacity>
            <TextInput 
                label='Username'
                onChangeText={(value) => setName(value)}
                value={name}
            />

            <Button theme={{ roundness: 6 }} mode='contained' style={styles.button} onPress={() => {newItem()}} >Sign up</Button> */}

            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}

        </SafeAreaView>
    )
}