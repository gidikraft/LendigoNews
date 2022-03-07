import { View, Image, Text, SafeAreaView, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { CONSTANTS } from '../utils/Constants';
import styles from '../screen.styles.js/AboutScreenStyles';
import { FontAwesome } from '@expo/vector-icons';
import bgImage from '../../assets/recent_seun.png';
import { Ionicons } from '@expo/vector-icons';

const { 
    GITHUB_URL, 
    LINKEDIN_URL, 
    CENTER, 
    BLACK,
    HOME_OUTLINE,
    PRIMARY_COLOR,
    LINKEDIN_COLOR,
    GITHUB,
    LINKEDIN_ICON,
} = CONSTANTS

export default function AboutScreen({ navigation }) {

const linkedinPressHandler = () => Linking.openURL(LINKEDIN_URL)

const githubPressHandler = () => Linking.openURL(GITHUB_URL)
    return (
        // <ScrollView >
            <SafeAreaView style={styles.container}>
                <View style={styles.homeView}>
                    <Text style={styles.homepage} onPress={() => navigation.navigate('Welcome')}>Home</Text>
                    <Ionicons name={HOME_OUTLINE} size={24} color={PRIMARY_COLOR} />
                </View>
                <View style={styles.authorView}>
                    <View style={styles.cardView} >
                        <Text style={styles.cardHeaderText}>Seun Fagade</Text>
                        <Text style={styles.cardText}>Mobile Developer</Text>
                    </View>
                </View>

                <View style={styles.mainImageView}>
                    <Image source={bgImage} resizeMode={CENTER} style={styles.banner}/>  
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
                        <FontAwesome name={LINKEDIN_ICON} size={28} color={LINKEDIN_COLOR} style={styles.footerItem} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={githubPressHandler} >
                        <FontAwesome name={GITHUB} size={28} color={BLACK} style={styles.footerItem}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        // </ScrollView>

    )
}