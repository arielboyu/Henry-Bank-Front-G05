import React, { useState,  useEffect } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
  TextInput, SafeAreaView, FlatList,
  ActivityIndicator, StatusBar, Text,
  Dimensions,Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import * as Contacts from 'expo-contacts';

//crear get para comparar usuarios cargados en el db
//crear put para editar usuario de db



export default function PhoneBook() {

  const [info, setInfo] = useState({
       isLoading: true,
       contacts: [],
  })
  
  useEffect(() => {
      loadContacts();
      setInfo({
          ...info,
          isLoading: true
      });
      
      return () => {

      }
    }, []);

    const createButtonAlert = (item) =>
    Alert.alert(
      "Enviar dinero a este contacto?",
      `${item.firstName + ' '}${item.lastName}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


  renderItem = ({item})=>(
    <View style={{minHeight:70,padding:5}}>
      <TouchableOpacity onPress={()=>createButtonAlert(item)}>
      <Text style={{color: 'black', fontWeight:'bold', fontSize:26}}>
        {item.firstName + ' '}{item.lastName}
      </Text>
      </TouchableOpacity>
      <Text style={{color: 'black', fontWeight:'bold'}}>
        {item.phoneNumbers[0].number}
      </Text>
    </View>
  )

  const loadContacts = async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === 'granted') {
         const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
          });
    
          if (data.length > 0) {
               const contact = data[0];
               console.log("contacts",contact);
          }
          console.log("data",data);
          setInfo({
                ...info,
                contacts: data,
                inMemoryContacts: data,
                isLoading: false
              });
         }
       };
      
        
  const searchContacts = value => {
    const filsteredContacts = info.inMemoryContacts.filter(
      contact => {
        let contactLowercase = (contact.firstName+ ' ' + contact.lastName).toLowerCase()

        let searchTermLowercase = value.toLowerCase()

        return contactLowercase.indexOf(searchTermLowercase) > -1
      }
    )
    setInfo({ ...info, contacts: filsteredContacts });
  }

  return (
    <View style={{flex:1}}>
           <StatusBar backgroundColor='green' barStyle="light-content"/>
      <TextInput
             placeholder="Buscar contactos"
             placeholderTextColor="#097934"
             style={{
                  backgroundColor:'#ffbf34',
                   height: 70,
                   fontSize: 36,
                   padding: 10,
                   borderBottomWidth: 1.5,
                   borderBottomColor: '#5db12f',
                   color:'#097934'
             }}
             onChangeText={(value) => searchContacts(value)}
        />
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          {info.isLoading ? (
            <View
              style={{
                      ...StyleSheet.absoluteFill,
                      alignItems: 'center',
                      justifyContent: 'center'
              }}
            >
            <ActivityIndicator size="large" color="#097934" />
           </View>
          ) : null}
          <FlatList
            data={info.contacts}
            
            onPress={() => {alert}}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50
                }}
              >
              <Text style={{ color: "#bad555" }}>No hay contactos</Text>
              </View>
            )}
          />
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
});

