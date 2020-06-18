import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.categoryList
    }
}

class CategoryList extends Component {
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
        return <Category {...item}/>
    }
    render() {
        return(
            <Layout
                title= "Categorias"
                >
                <FlatList    
                    horizontal
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

export default connect(mapStateToProps) (CategoryList) 