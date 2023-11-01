import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Create a functional component for RegisterForm
export default function RegisterForm(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.registerContainer}>
                <TextInput
                    style={styles.registerBox}
                    placeholder="email!"
                    keyboardType="email-address"
                    onChangeText={(text) => props.emailInput.current.value = text}
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.registerBox}
                        placeholder="password!"
                        secureTextEntry={!passwordVisible}
                        onChangeText={(text) => props.passInput.current.value = text}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
                        <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.registerBox}
                    placeholder="confirm password!"
                    secureTextEntry={!passwordVisible}
                    onChangeText={(text) => props.newPassInput.current.value = text}
                />

                <TouchableOpacity onPress={props.register} style={styles.registerButton}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // เปลี่ยนสีพื้นหลังเป็นสีดำ
    },
    title: {
        fontSize: 24, // เพิ่มขนาดตัวอักษร
        fontWeight: 'bold',
        color: '#ff6600', // เปลี่ยนสีข้อความ
        marginBottom: 20, // เพิ่มระยะห่างด้านล่าง
    },
    registerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8b4513', // เปลี่ยนสีพื้นหลัง
        width: 300,
        height: 200,
        borderRadius: 15, // เพิ่มความโค้งของมุม
        borderWidth: 5,
        borderColor: '#deb887', // เปลี่ยนสีเส้นขอบ
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    registerBox: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: '#dcdcdc', // เปลี่ยนสีพื้นหลัง
        color: '#333',
        margin: 8,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
    },
    passwordContainer: {
        position: 'relative',
    },
    passwordToggle: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: [{ translateY: -50 }],
        cursor: 'pointer',
        color: '#ff6600', // เปลี่ยนสีไอคอน
        fontSize: 18, // เพิ่มขนาดไอคอน
    },
    registerButton: {
        backgroundColor: '#ff6600', // เปลี่ยนสีปุ่ม
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        padding: 12,
        margin: 10,
    },
});