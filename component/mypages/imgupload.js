import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default function App() {
    const [image, setImage] = useState(null); 
	const askForPermission = async () => {
		const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
		if (permissionResult.status !== 'granted') {
			Alert.alert('no permissions to access camera!', [{ text: 'ok' }])
			return false
		}
		return true
	}

	const takeImage = async () => {
		// make sure that we have the permission
		const hasPermission = await askForPermission()
		if (!hasPermission) {
			return
		} else {
			// launch the camera with the following settings
			let image = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
				aspect: [3, 3],
				quality: 1,
				base64: true,
			})
			// make sure a image was taken:
			if (!image.cancelled) {
                setImage(image.uri);
				fetch('https://readerschool.org/v1/documents/login.php', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						imgsource: image.uri,
					}),
				})
			}
		}
	}
	return (
		<View style={styles.container}>
			<Button title="Take a foto" onPress={takeImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
