import { View, SafeAreaView, FlatList, Linking, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from '../screen.styles.js/NewsScreenStyles';
import { Button, Text, TextInput, Card, Title, Paragraph, } from 'react-native-paper';
import * as SQLite from "expo-sqlite";
import axios from 'axios';

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function NewsScreen({ navigation }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [news, setNews] = useState();

    const [isLoading, setIsLoading] = useState(false)
    // const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [isRefreshing, setisRefreshing] = useState(true)

    const newsURL = `https://hn.algolia.com/api/v1/search_by_date?numericFilters=points%3E250&page=${page}`

    // Invoking get method to perform a GET request
    const fetchNews = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(newsURL);
            // console.log(response.data);
            if (response.status === 200) {
                setNews(response.data.hits);
                setIsLoading(false);
                return;
            } else {
                throw new Error("Failed to fetch news");
            }
        } catch (error) {
            console.log('Data fetching cancelled');
        }

        // const url = `${baseUrl}/api/users/1`;
        const response = await axios.get(newsURL);
        console.log(response.data);
    };

    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'
            )
        })
    }

    const fetchData = () => {try {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM items",
                [],
                (tx, result) => {
                    var len = result.rows.length;
                    if ( len > 0) {
                        var userName = result.rows.item(0).text
                        var userAge = result.rows.item(0).count
                        
                        var len = result.rows.length-1
                        // console.log(result.rows.item(len))
                        setName(userName)
                        setAge(userAge)
                    }
                }
            ) 
        })
        
        } catch (error) {
        console.log(error)
        }
    }

    const removeData = () => {
        try {
            // await AsyncStorage.clear()

            db.transaction((tx) => {
                tx.executeSql((
                    "DELETE * FROM items",
                    [],
                    () => { },
                    error => { console.log(error) },
                    console.log(name)

                ))
            })
            // navigation.navigate("Welcome")
            // console.log(name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        createTable()
        fetchData()
        fetchNews()
    }, [page])

    const postPressHandler =(item) => {
        Linking.openURL(item.url)
        console.log(`clicked${item}`)
    }

    const divider = () => {
        return (
            <View
                style={styles.itemSeperator}
            />
        );
    }

    const onEnd = () => {
        Alert.alert('You Have Reached To List End...');
    }

    const footer = () => {
        return (
            <View style={styles.footerView}>
                <Text onPress={() => navigation.navigate('About')} >About</Text>
                <Text >Logout</Text>
            </View>
        )
    }

    const renderNews = ({ item }) => (
        <TouchableOpacity
            key={item.key}
            onPress={() => postPressHandler(item)}
        >
            {/* <Card>
                <Card.Title title={item.title} subtitle="Card Subtitle"/>
                <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card> */}
            <View style={styles.flatListView}>
                <View style={styles.comments}>
                    <View style={styles.commentsBody}>
                        <Text style={styles.commentsName}>{item.author}</Text>
                        <Text style={styles.bodyText}>{item.title}</Text>
                    </View>
                    <Text style={styles.createdAt}>Created At: {item.created_at}</Text>
                    <Text style={styles.createdAt}>Views: {item.points}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome {name} </Text>

        {/* <TextInput 
            label='Username'
            mode='outlined'
            onChangeText={(value) => setName(value)}
            value={name}
        /> */}

        <Button mode='contained' icon="newspaper" style={styles.button} onPress={() => {removeData()}} >Sign out</Button>

        <Button mode='contained' style={styles.button} onPress={() => {navigation.navigate('Welcome')}} >Go Home</Button>

        <FlatList 
            data = {news}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={divider}
            onEndReachedThreshold={0}
            onEndReached={onEnd}
            refreshing={isRefreshing}
            onRefresh={() => {
                console.log("onRefresh loadVocable")
                setisRefreshing(false)
            }}
            ListFooterComponent={footer}
            renderItem={renderNews} 
        />

        </SafeAreaView>
    )
}