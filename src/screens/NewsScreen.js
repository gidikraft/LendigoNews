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
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';
import { Color, Errors, Url, Constants, Numbers, Queries } from "../utils/Constants";

const db = SQLite.openDatabase('db.testDb') // returns Database object

export default function NewsScreen({ navigation }) {

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)

    const newsURL = `${Url.NEWSURL}${page}`

    // Invoking get method to to get news from Hacker News API
    const fetchNews = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(newsURL);
            if (response.status === Numbers.TWO_HUNDRED) {
                setNews(response.data.hits);
                setIsLoading(false);
                return;
            } else {
                throw new Error(Errors.RESPONSE_ERROR);
            }
        } catch (error) {
            console.log(Errors.FETCH_NEWS_ERROR);
            setErrorMessage(error)
        }
        console.log(response.data);
    };

    //create instance of db table
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                Queries.CREATE_TABLE_QUERY
            )
        })
    }

    //fetch user details if logged in
    const fetchData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    Queries.FETCH_DATA_QUERY,
                    [],
                    (tx, result) => {
                        var len = result.rows.length;
                        if ( len > 0) {
                            len = result.rows.length-1

                            var userName = result.rows.item(len).text
                            var userAge = result.rows.item(len).count
                            
                            dispatch(setName(userName))
                            dispatch(setAge(userAge))
                            console.log(result)
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
        db.transaction((tx) => {
            tx.executeSql(
                Queries.DELETE_DATA_QUERY,
                [],
                (tx, res) => {
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            Constants.SUCCESS,
                            Constants.LOGOUT_MESSAGE,
                            [
                                {
                                text: Constants.OK,
                                onPress: () => navigation.navigate('Welcome'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert(Constants.LOGOUT_ERROR);
                    }
                }
            );
        });
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
        wait(Numbers.TWO_THOUSAND).then(() => setIsRefreshing(false));
      }, []);

    //render flatlist items
    const renderNews = ({ item }) => (
        <TouchableOpacity key={item.key} onPress={() => postPressHandler(item)}>
            <View>
                <View style={styles.news}>
                    <View style={styles.newsBody}>
                        <Text style={styles.newsAuthor}>
                            {item.author.charAt(Numbers.ZERO).toUpperCase() + item.author.slice(Numbers.ONE)}
                        </Text>
                        <Text style={styles.newsTitle}>
                            {item.title}
                        </Text>
                    </View>
                    <Text style={styles.createdAt}>
                        { item.created_at.slice(Numbers.ELEVEN, Numbers.NINETEEN) + ' ' + item.created_at.slice(Numbers.ZERO, Numbers.TEN)}
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
                    <Text style={styles.logout} onPress={() => removeData()}>Logout</Text>
                    <FontAwesome name={Constants.SIGN_OUT} size={Numbers.TWENTY_FOUR} color={Color.WHITE} />
                </View>
                <Text style={styles.header} onPress={() => navigation.navigate("Welcome") }>Welcome back {name} </Text>
                <Text style={styles.headerSubtitle}>Latest update from Hacker News!</Text>

                <FlatList 
                    data = {news}
                    keyExtractor={(item, itemIndex) => itemIndex}
                    onEndReachedThreshold={Numbers.ZERO}
                    onEndReached={() => setPage(page+Numbers.ONE)}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={pullToRefresh}
                            tintColor={Color.PRIMARY_COLOR}
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
                <ActivityIndicator 
                    animating={true} 
                    size={Constants.LARGE} 
                    style={styles.activityIndicator} 
                    color={Color.PRIMARY_COLOR} 
                />
            </View>
        );
    }
}