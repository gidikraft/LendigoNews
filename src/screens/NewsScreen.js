import { View, SafeAreaView, FlatList, Linking, TouchableOpacity, Alert, RefreshControl, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from '../screen.styles.js/NewsScreenStyles';
import * as SQLite from "expo-sqlite";
import axios from 'axios';
import { CONSTANTS } from '../utils/Constants';

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function NewsScreen({ navigation }) {
    const { 
        NEWSURL, 
        FETCH_NEWS_ERROR, 
        RESPONSE_ERROR,
        CREATE_TABLE_QUERY,
        FETCH_DATA_QUERY,
        DELETE_DATA_QUERY,
        PRIMARY_COLOR,

    } = CONSTANTS;

    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [news, setNews] = useState();

    const [isLoading, setIsLoading] = useState(false)
    // const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false)

    const newsURL = `${NEWSURL}${page}`

    // Invoking get method to to get news from Hacker News API
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
                throw new Error(RESPONSE_ERROR);
            }
        } catch (error) {
            console.log(FETCH_NEWS_ERROR);
        }
        console.log(response.data);
    };

    //create instance of db table
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                CREATE_TABLE_QUERY
            )
        })
    }

    //fetch user details if logged in
    const fetchData = () => {try {
        db.transaction((tx) => {
            tx.executeSql(
                FETCH_DATA_QUERY,
                [],
                (tx, result) => {
                    var len = result.rows.length;
                    if ( len > 0) {
                        var userName = result.rows.item(0).text
                        var userAge = result.rows.item(0).count
                        
                        var len = result.rows.length-1
                        // console.log(result.rows)
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

    //sign out by removing user from db
    const removeData = () => {
        try {
            // await AsyncStorage.clear()
            db.transaction((tx) => {
                tx.executeSql((
                    DELETE_DATA_QUERY,
                    [],
                    () => { navigation.navigate("Welcome") },
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
    }, [])

    //set timeout
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    //open news article in web
    const postPressHandler =(news) => {
        Linking.openURL(news.url)
    }

    const onEnd = () => {
        Alert.alert('You Have Reached To List End...');
    }

    //pull down flatlist to refresh
    const pullToRefresh = React.useCallback(() => {
        setIsRefreshing(true);
        fetchNews();
        wait(2000).then(() => setIsRefreshing(false));
      }, []);

    //render flatlist items
    const renderNews = ({ item }) => (
        <TouchableOpacity key={item.key} onPress={() => postPressHandler(item)}>
            <View>
                <View style={styles.news}>
                    <View style={styles.newsBody}>
                        <Text style={styles.newsAuthor}>{item.author}</Text>
                        <Text style={styles.newsTitle}>{item.title}</Text>
                    </View>
                    <Text style={styles.createdAt}>{item.created_at}</Text>
                    <Text style={styles.points}>Views: {item.points}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logout} onPress={() => {removeData()}} >Logout</Text>
            <Text style={styles.header} onPress={() => {navigation.navigate('Welcome')}} >Welcome back {name} </Text>
            <Text style={styles.headerSubtitle}>Latest update from Hacker News!</Text>

            <FlatList 
                data = {news}
                keyExtractor={(item, itemIndex) => itemIndex}
                onEndReachedThreshold={0}
                onEndReached={onEnd}
                refreshControl={
                    <RefreshControl
                      refreshing={isRefreshing}
                      onRefresh={pullToRefresh}
                      tintColor={PRIMARY_COLOR}
                      colors={{...PRIMARY_COLOR}}
                    />
                }
                renderItem={renderNews} 
            />
        </SafeAreaView>
    )
}