import { View, Image, Text, SafeAreaView, Linking, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../screen.styles.js/AboutScreenStyles';
import { FontAwesome } from '@expo/vector-icons';
import bgImage from '../../assets/recent_seun.png';
import { Ionicons } from '@expo/vector-icons';
import { Color, Constants, Url } from "../utils/Constants";

export default function AboutScreen({ navigation }) {

    const linkedinPressHandler = () => Linking.openURL(Url.LINKEDIN_URL)

    const githubPressHandler = () => Linking.openURL(Url.GITHUB_URL)

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.homeView}>
                    <Text style={styles.homepage} onPress={() => navigation.navigate('Welcome')}>Home</Text>
                    <Ionicons name={Constants.HOME_OUTLINE} size={24} color={Color.PRIMARY_COLOR} />
                </View>
                <View style={styles.authorView}>
                    <View style={styles.cardView} >
                        <Text style={styles.cardHeaderText}>Seun Fagade</Text>
                        <Text style={styles.cardText}>Mobile Developer</Text>
                    </View>
                </View>

                <View style={styles.mainImageView}>
                    <Image source={bgImage} resizeMode={Constants.CENTER} style={styles.banner}/>  
                </View>

                <View style={styles.main}>
                    <Text style={styles.mainSummary}>About Author</Text>
                    <Text style={styles.mainText}>
                        I have proven experience developing consumer focused applications using Kotlin and React Native for Android Native and cross-paltform respsectively in an Agile environemnt; and also built products for mobile apps meeting highest standards for design, user experience, Test Driven Development
                    </Text>
                </View>

                <Text style={styles.footerText}>Follow the author on:</Text>
                <View style={styles.footerView} >
                    <TouchableOpacity onPress={linkedinPressHandler}>
                        <FontAwesome 
                            name={Constants.LINKEDIN_ICON} 
                            size={28} 
                            color={Color.LINKEDIN_COLOR} 
                            style={styles.footerItem} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={githubPressHandler} >
                        <FontAwesome 
                            name={Constants.GITHUB} 
                            size={28} 
                            color={Color.BLACK} 
                            style={styles.footerItem}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

    )
}