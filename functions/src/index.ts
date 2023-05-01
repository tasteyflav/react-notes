import {QuerySnapshot, getFirestore} from "firebase-admin/firestore";
import * as functions from "firebase-functions";

exports.initializeAccount = functions.auth.user().onCreate(async (user) => {
  const db = getFirestore();
  const tags = db.collection("tags");
  const notes = db.collection("notes");
  const tagsSnapshot: QuerySnapshot = await db.collection("originaltags").get();
  tagsSnapshot.forEach((tagDoc ) => {
    tags.add({
      ...tagDoc.data(),
      id: tagDoc.id,
      uid: user.uid,
    });
  });
  const notesSnapshot: QuerySnapshot =
    await db.collection("originalnotes").get();
  notesSnapshot.forEach((noteDoc) => {
    notes.add({
      ...noteDoc.data(),
      id: noteDoc.id,
      uid: user.uid,
    });
  });
});
