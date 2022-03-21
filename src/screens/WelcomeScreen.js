import { SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from '../screen.styles.js/WelcomeScreenStyles';
import * as SQLite from 'expo-sqlite';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';
import { Errors, Constants, Numbers, Queries } from "../utils/Constants";

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function WelcomeScreen({navigation}) {
    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [data, setData] = useState(null)

    //creates db table
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                Queries.CREATE_TABLE_QUERY
            )
        })
    }

    //checks if user is signed in and naviagtes if true
    const fetchData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    Queries.FETCH_DATA_QUERY,
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
        dispatch(setName(name))
        dispatch(setAge(age))

        db.transaction(tx => {
            tx.executeSql(Queries.INSERT_ITEM_QUERY, [name, age],
                (txObj, resultSet) => setData({ data: data.concat(
                    { id: resultSet.insertId, text: name, count: age }) }),
                (txObj, error) => console.log(Errors.ERROR, error),
                navigation.navigate("News"),
            )
        })
    }

    const handleLoginPress = () => (name.length > 4 && name != '') ? addNewItem() : Alert.alert(Errors.ALERT_MESSAGE);

    useEffect(() => {
        createTable()
        fetchData()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to LendigoNews</Text>
            <TextInput 
                style={styles.input}
                theme={{ roundness: Numbers.TWENTY }}
                label={Constants.USERNAME}
                mode={Constants.OUTLINED}
                onChangeText={(value) => dispatch(setName(value))}
                value={name}
            />
            <TextInput 
                style={styles.input}
                theme={{ roundness: Numbers.TWENTY }}
                label={Constants.PASSWORD}
                mode={Constants.OUTLINED}
                onChangeText={(value) => dispatch(setAge(value))}
                value={age}
            />

            <Button 
                icon={Constants.LOGIN} 
                theme={{ roundness: Numbers.TWENTY }} 
                mode={Constants.CONTAINED} 
                style={styles.button} 
                onPress={() => {handleLoginPress()}} 
            >
                Sign up
            </Button>

            <Text style={styles.aboutAuthor} >
                Learn more about: 
                <Text 
                onPress={() => navigation.navigate('About')} 
                style={styles.seun} 
                >
                    Seun Fagade
                </Text>
            </Text>
        </SafeAreaView>
    )
}