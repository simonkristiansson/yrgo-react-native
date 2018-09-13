//// FLATLIST


  <FlatList
      data={[{key: 1, name: 'Laravel', rating: 5}, {key: 2, name: 'Wordpress', rating: 1}]}
      renderItem={
        ({item}) =>
          <View>
            <TouchableOpacity onPress={() => this._handleConsoleLog(item.name)} style={{margin: 20, borderWidth: 1, borderColor: '#000'}}>
                <Text style={{height: 50}}>{item.name} - {item.rating}</Text>
            </TouchableOpacity>
          </View>

      }
      keyExtractor={(item, index) => index.toString()}
  />

  _handleConsoleLog = (name) => {
    console.log(name);
  }


