import { Link } from 'expo-router';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { styles } from '../styles/_mainstyle';

export default function Index() {
  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome to the app</Text>
      </View>
      <View style={styles.titleSubTextContainer}>
        <Text style={styles.titleSubText}>Find your dream job</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Link href="/join" asChild>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Join</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/signin" asChild>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.buttonGroupSubText}>
        <Text style={styles.titleSubText}>Already have an account?</Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}