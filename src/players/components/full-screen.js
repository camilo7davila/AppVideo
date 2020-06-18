import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

function FullScreen(props) {
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor='green'
        >
            {
                props.isFullScreen ? 
                <Text style={styles.button}>Salir Cine</Text>
                :
                <Text style={styles.button}>Modo Cine</Text>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    }
})

export default FullScreen