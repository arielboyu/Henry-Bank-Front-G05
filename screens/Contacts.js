import React, { useState,  useEffect } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
  TextInput, SafeAreaView, FlatList,
  ActivityIndicator, StatusBar, Text,
  Dimensions
} from 'react-native';


import * as Contacts from 'expo-contacts';



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


  renderItem = ({item})=>(
    <View style={{minHeight:70,padding:5}}>
      <Text style={{color: 'black', fontWeight:'bold', fontSize:26}}>
        {item.firstName + ' '}{item.lastName}
      </Text>
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
      <TextInput
             placeholder="Buscar contactos"
             placeholderTextColor="#dddddd"
             style={{
                  backgroundColor:'#2f363c',
                   height: 70,
                   fontSize: 36,
                   padding: 10,
                   borderBottomWidth: 1.5,
                   borderBottomColor: '#7d90a0'
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
            <ActivityIndicator size="large" color="#bad555" />
           </View>
          ) : null}
          <FlatList
            data={info.contacts}
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

