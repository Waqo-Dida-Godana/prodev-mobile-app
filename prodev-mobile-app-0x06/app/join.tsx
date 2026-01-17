import { Link } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '../constants';
import { styles } from '../styles/_joinstyle';

export default function Join() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
        <Link href="/">
          <Text>Back</Text>
        </Link>
      </View>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join</Text>
        <Text style={styles.subText}>Create your account</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter your password" secureTextEntry />
          <TouchableOpacity>
            <Text>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </ScrollView>
  );
}