import { View, Image, Text, SafeAreaView, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { CONSTANTS } from '../utils/Constants';
import styles from '../screen.styles.js/AboutScreenStyles';
import { FontAwesome } from '@expo/vector-icons';


const { GITHUB_URL, LINKEDIN_URL } = CONSTANTS

export default function AboutScreen({ navigation }) {

const linkedinPressHandler = () => Linking.openURL(LINKEDIN_URL)

const githubPressHandler = () => Linking.openURL(GITHUB_URL)
    return (
        <ScrollView >
            <SafeAreaView style={styles.container}>
                <Text style={styles.homepage} onPress={() => navigation.navigate('Welcome')}>Homepage</Text>
                <View style={styles.authorView}>
                    <View style={styles.cardView} >
                        <Text style={styles.cardHeaderText}>Seun Fagade</Text>
                        <Text style={styles.cardText}>Mobile Developer</Text>
                    </View>
                </View>

                <View style={styles.mainImageView}>
                    <Image source={require('../../assets/recent_seun.png')} resizeMode='center' style={styles.banner}/>  
                </View>

                <View style={styles.main}>
                    <Text style={styles.mainSummary}>About Author</Text>
                    <Text style={styles.mainText}>
                        I have proven experience developing consumer focused applications using Kotlin and React Native for Android Native and cross-paltform respsectively in an Agile environemnt; and also built products for mobile apps meeting highest standards for design, user experience, Test Driven Development
                    </Text>
                </View>

                <Text style={styles.footerText}>Follow the author on:</Text>
                <View style={styles.footerView} >
                    {/* <FontAwesome name="twitter" size={28} color="blue"  style={styles.footerItem}/> */}
                    <TouchableOpacity onPress={linkedinPressHandler}>
                        <FontAwesome name="linkedin-square" size={28} color="blue" style={styles.footerItem} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={githubPressHandler} >
                        <FontAwesome name="github" size={28} color="black" style={styles.footerItem}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}