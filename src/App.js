import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from './utils/Checkbox';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        delay: props.animation,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
        delay: props.animation,
      }),
    ]).start();

  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
        transform: [{
          rotateX: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["25deg", "0deg"]
          }),
        }],
        
      }}>
      {props.children}
    </Animated.View>
  );
};

const TriangleAnimation = (props) => {
  const borderWidthAnimation = useRef(new Animated.Value(100)).current;
  useEffect(() => {
    Animated.timing(
      borderWidthAnimation,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }
    ).start();
  }, [borderWidthAnimation]);

  return (
    <Animated.View style={{...props.style,
      borderLeftWidth: borderWidthAnimation,
    }}>
      {props.children}
    </Animated.View>
  );
}

export default function App() {

  return (
    <View style={styles.mainContainer}>
      <FadeInView
            style={{
            }} animation={200}>
        <View style={styles.container} >
            <TriangleAnimation style={styles.triangle}></TriangleAnimation>
          {/* <View style={{}}>
          <FadeInView
            style={{
            }} animation={700}>
            <Text style={styles.text}>
              Pizzeria Jerry Due
            </Text>
          </FadeInView>
         </View>   */}
          {/* <FadeInView style={{
        }} animation={1200}>
          <View style={styles.card} >
            <View style={{marginRight:5}}>
              <Image source={require('./download.jpeg')} style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View>
              <Text style={styles.text} >Pizzeria Jerry Due</Text>
              <Text style={styles.greyText}>Manager</Text>
            </View>
          </View>
        </FadeInView> */}
          {/* <View >
          <FadeInView style={{
          }} animation={1700}>
            <View style={styles.div}>
              <Text >Password</Text>
              <Text style={styles.greyText}>Forget password?</Text>
            </View>
          </FadeInView >
          <FadeInView style={{
          }} animation={2200}>
            <View style={styles.sectionStyle}>
              <TextInput

                placeholder="Password"
                value={password}
                onChange={setpassword}
              />
            </View>
          </FadeInView>
        </View> */}
          {/* <FadeInView style={{
        }} animation={2700}>
          <TouchableOpacity
            underlayColor='#fff' style={styles.btn}>
            <Text style={{color:"white"}}>Login</Text>
          </TouchableOpacity>
        </FadeInView> */}
          {/* <FadeInView style={{
        }} animation={3200}>
          <View style={{margin:"auto", marginTop : 8}}>
            <CheckBox
              onPress={() => setselection(!selection)}
              title="Remember Me"
              isChecked={selection}
            />
          </View>
        </FadeInView>   */}
        </View>
      </FadeInView>
    </View>

  );
}


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    width: 300,
    height: "50%",
    backgroundColor: "white",
    borderRadius: 4,
    marginTop: '15%',
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  triangle:{
      width: 0,
      height:0,
      borderBottomWidth: 250,
      borderStyle: 'solid',
      borderBottomColor:  '#000',
      borderLeftWidth : 70,
      borderLeftColor : 'transparent',
      bottom: 0,
      right: 0,
      position: 'absolute',
      color: 'green'
  },
  text: {
    textAlign: "center", font: "bold", fontSize: 17
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  greyText: {
    color: "grey",
    fontSize: 12
  },
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  btn: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    marginVertical: 14,
  },

});
