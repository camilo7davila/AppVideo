import React, { Component } from 'react';
import Video from 'react-native-video'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';


class Player extends Component {
    state = {
        loading: true,
        paused: false,
        isFullScreen: false,
        screenOrientation: 'portrait'
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    fullscreen = () => {
        if(this.state.isFullScreen === false) {
            this.setState({
                isFullScreen: true,
                screenOrientation: 'landscape'
            })
            this.playerMedia.presentFullscreenPlayer()
        } else {
            this.setState({
                isFullScreen: false,
                screenOrientation: 'portrait'
            })
            this.playerMedia.dismissFullscreenPlayer()
        }
    }
    render() {
        return (
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                        }}
                        style={styles.video}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                        ref={(ref) => {
                            this.playerMedia = ref
                        }}
                        fullscreenOrientation={this.state.screenOrientation}
                    />
                }
                loader={
                    <ActivityIndicator color='green' />
                }
                controls={
                    <ControlLayout>
                        <PlayPause 
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <Text>Progress bar |</Text>
                        <Text>Time left |</Text>
                        <FullScreen 
                            onPress={this.fullscreen}
                            isFullScreen= {this.state.isFullScreen}
                        />
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player