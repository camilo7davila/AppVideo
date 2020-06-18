import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separation';
import Suggestion from '../components/suggestions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    }
}

class SuggestionList extends Component {
    keyExtractor = (item) => {
        return item.id.toString()
    }
    renderEmpty = () => {
        return <Empty text="No hay sugerencias :(" />
    }
    itemSeparator = () => {
        return <Separator color='green' />
    }
    renderItem = ({ item }) => {
        return <Suggestion 
            {...item}
            onPress = {() => {this.viewMovie(item)}}
        />
    }
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload:{
                movie: item,
            }
        })
    }
    render() {
        return (
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                />
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(SuggestionList)