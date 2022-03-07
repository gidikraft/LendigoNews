import { View, 
    SafeAreaView, 
    FlatList, 
    Linking, 
    TouchableOpacity, 
    RefreshControl, 
    Text, 
    Alert,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper'
import React, { useState, useEffect, useCallback } from 'react';
import styles from '../screen.styles.js/NewsScreenStyles';
import * as SQLite from "expo-sqlite";
import axios from 'axios';
import { CONSTANTS } from '../utils/Constants';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';

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
        WHITE,
        ZERO,
        ONE,
        TEN,
        ELEVEN,
        NINETEEN,
        TWENTY_FOUR,
        TWO_HUNDRED,
        TWO_THOUSAND,
        SIGN_OUT,
        LARGE,
    } = CONSTANTS;

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)

    const newsURL = `${NEWSURL}${page}`

    // Invoking get method to to get news from Hacker News API
    const fetchNews = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(newsURL);
            if (response.status === TWO_HUNDRED) {
                setNews(response.data.hits);
                setIsLoading(false);
                return;
            } else {
                throw new Error(RESPONSE_ERROR);
            }
        } catch (error) {
            console.log(FETCH_NEWS_ERROR);
            setErrorMessage(error)
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
    const fetchData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    FETCH_DATA_QUERY,
                    [],
                    (tx, result) => {
                        var len = result.rows.length;
                        if ( len > 0) {
                            len = result.rows.length-1

                            var userName = result.rows.item(len).text
                            var userAge = result.rows.item(len).count
                            
                            console.log(result.rows)
                            dispatch(setName(userName))
                            dispatch(setAge(userAge))
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
            db.transaction((tx) => {
                tx.executeSql((
                    'DELETE * FROM items',
                    [],

                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                          Alert.alert(
                            'Success',
                            'Signed out successfully',
                            [
                              {
                                text: 'Ok',
                                onPress: () => navigation.navigate('Welcome'),
                              },
                            ],
                            { cancelable: false }
                          );
                        } else {
                          alert('Please insert a valid User Id');
                        }
                    },
                    // DELETE_DATA_QUERY,
                    // [],
                    // () => { navigation.navigate("Welcome") },
                    error => { console.log(error) }
                ))
            })
            console.log(name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        createTable()
        fetchData()
        fetchNews()
    }, [page])

    //set timeout
    const wait = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

    //open news article in web
    const postPressHandler =(news) => Linking.openURL(news.url)

    //pull down flatlist to refresh
    const pullToRefresh = useCallback(() => {
        setIsRefreshing(true);
        fetchNews();
        wait(TWO_THOUSAND).then(() => setIsRefreshing(false));
      }, []);

    //render flatlist items
    const renderNews = ({ item }) => (
        <TouchableOpacity key={item.key} onPress={() => postPressHandler(item)}>
            <View>
                <View style={styles.news}>
                    <View style={styles.newsBody}>
                        <Text style={styles.newsAuthor}>
                            {item.author.charAt(ZERO).toUpperCase() + item.author.slice(ONE)}
                        </Text>
                        <Text style={styles.newsTitle}>
                            {item.title}
                        </Text>
                    </View>
                    <Text style={styles.createdAt}>
                        { item.created_at.slice(ELEVEN, NINETEEN) + ' ' + item.created_at.slice(ZERO, TEN)}
                    </Text>
                    <Text style={styles.points}>Views: {item.points}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    if (news) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoutView}>
                    <Text style={styles.logout} onPress={() => {navigation.navigate('Welcome')}} >Logout</Text>
                    <FontAwesome name={SIGN_OUT} size={TWENTY_FOUR} color={WHITE} />
                </View>
                <Text style={styles.header} onPress={() => {removeData()}} >Welcome back {name} </Text>
                <Text style={styles.headerSubtitle}>Latest update from Hacker News!</Text>

                <FlatList 
                    data = {news}
                    keyExtractor={(item, itemIndex) => itemIndex}
                    onEndReachedThreshold={ZERO}
                    onEndReached={() => setPage(page+ONE)}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={pullToRefresh}
                            tintColor={PRIMARY_COLOR}
                        />
                    }
                    renderItem={renderNews} 
                />
            </SafeAreaView>
        )
    } else if (errorMessage) {
        return (
            <View style={styles.container}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
              <ActivityIndicator animating={true} size={LARGE} style={styles.activityIndicator} color={PRIMARY_COLOR} />
            </View>
        );
    }
}