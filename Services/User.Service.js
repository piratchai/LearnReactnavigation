import './InitalFirebase';
import firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
export default class UserService {
    getUser_promise(){
        return new Promise((resolve, reject)=>{
            db.collection('users').get().then(q => {
                var users = [];
                q.forEach(v => {
                    users.push(v.data())
                })
                resolve(users);
            })
        })
    }

    async getUser(){
        var users = [];
        await this.getUser_promise().then(value => users = value);
        return users;
    }
}