import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Button, Menu, Headline, Paragraph, Portal, Dialog, Divider, Modal, Title, Caption } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getUserByID } from '../redux/actions/user'
import Contacts from './../../screens/Contacts'

const Header = ({title}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {
		dispatch(getUserByID(user.user.id));
	}, [])

	const { firstName, lastName } = user.user;

    return(
        <>
            <View style={styles.greeting}>
                <Icon.Button 
                    name="bars" 
                    size={25}
                    color="black"
                    backgroundColor="#FFFF"
                    onPress={() => setVisible(true)}
                />
                <Headline>{title}</Headline>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Image source={require('../../assets/logo.png')} style={{backgroundColor: 'transparent'}}/>
                </View>
                
            </View>
            <Portal>
                <Modal 
                    visible={visible} 
                    onDismiss={() => setVisible(false)}
                    //dismissable={false}
                    contentContainerStyle={styles.content}
                    style={styles.sideBar}
                >
                    <View style={[styles.center, styles.section]}>
                        <Avatar.Image size={100} source={require('../../assets/logo.png')} />
                        <Title>{firstName ? `${firstName} ${lastName}` : "Valentin Nicheglod"}</Title>
                        <Caption>nicheglod69@gmail.com</Caption>
                    </View>
                    
                    <View style={[styles.menu]}>
                        <Menu.Item icon="account" onPress={() => {}} title="Mis datos" style={{width: '100%'}}/>
                        <Menu.Item icon="contacts" onPress={() => {}} title="Mis contactos" style={{width: '100%'}}/>
                        <Menu.Item icon="cog" onPress={() => {}} title="Configuración" style={{width: '100%'}}/>
                        <Menu.Item icon="help" onPress={() => {}} title="Ayuda" style={{width: '100%'}}/>
                    </View>
                    <View style={[styles.logout, styles.menu, styles.center]}>
                        <Menu.Item icon="logout" onPress={() => {}} title="Cerrar sesión" style={{width: '100%'}}/>
                        <Caption>© TreeBank | {new Date().getFullYear()}</Caption>
                    </View>
                </Modal>
            </Portal>
        </>
    )
}

const styles = StyleSheet.create({
	sideBar: {
		backgroundColor: '#FFFF',
		width: '60%',
		height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    greeting: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
 		width: "100%",
		marginBottom: 10,
		marginTop: 10,
 		fontSize: 35,
      },
      content: {
        elevation: 0,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'absolute'
      },
      center: {
        display: 'flex',
        alignItems: 'center',
      },
      section: {
        margin: 20
      },
      menu: {
        margin: 0,
        width: '100%'
      },
      logout: {
          position: 'relative',
          bottom: -200
      }
});

export default Header;