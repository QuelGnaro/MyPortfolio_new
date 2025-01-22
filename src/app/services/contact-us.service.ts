import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/app'; // Import the firebase package
import 'firebase/firestore'; // Import the firestore module

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private firestore: AngularFirestore) { }

  // Metodo per salvare i dati del form

  saveContact(contactData: any): Observable<any> {
    //todo: aggiungere un modo per ottenere timestamp
    // const dataWithTimestamp = {
    //   ...contactData, // Include i dati del form
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp() // Use firebase.firestore.FieldValue
    // };
    return from(this.firestore.collection('contacts').add(contactData));
  }
}


