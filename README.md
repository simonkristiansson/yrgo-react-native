# React Native för Yrgo

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## EXPO-länkar

  - APIer https://github.com/toddmotto/public-apis
  - Dokumentation Expo https://docs.expo.io/versions/v30.0.0/introduction/installation
  - Dokumentation React Native https://facebook.github.io/react-native/docs/getting-started
  - Expo för iOS https://itunes.apple.com/us/app/expo-client/id982107779?mt=8
  - Expo för Android https://play.google.com/store/apps/details?id=host.exp.exponent&hl=sv

## Komma igång
##### Exempelprojetet
Dra ner startprojektet som finns på github
```git clone git@github.com:simonkristiansson/yrgo-react-native.git```

Öppna projektet och kör:
``` npm i whatwg-fetch@2.0.4 --save ``` (Detta för att det igår fanns en bug med fetch-paketet)
```npm install```

##### Expo
installera Expo-klienten via npm
```npm install -g expo-cli```


#### Navigering

Gör en manuell navigering till en annan screen och skicka med variablar
```this.props.navigation.navigate('Links', {customVariable: 'min variabel!!!11'});```

Ta emot variablen på linksscreen
```  componentDidMount(){
       this.props.navigation.addListener('willFocus', payload => {
           console.log(this.props.navigation.state.params);
       });
     }```






