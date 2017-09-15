import { Injectable } from "angular/core";
import * as firebase from 'firebase';
import { blog } from '../adminShared/blog';

@injectable()

export class blogAdminService(){

    createPost(post: Blog){
        
        let storageRef = firebase.storage().ref();
        storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
            .then((snapshot) => {
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef =  firebase.database().ref('blogpost/');
                let newPost = dbRef.push();
            }
        )
    }
}