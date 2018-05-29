'use strict';
const functions = require('firebase-functions');
const mkdirp = require('mkdirp-promise');
const gcs = require('@google-cloud/storage');
const admin = require('firebase-admin');
admin.initializeApp();
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');
/*
** Updates the document in firestore with the unique id assigned to the document and paired file in storage.
 */
exports.addUidToImageDocument = functions.storage.object().onFinalize((object) => {
    const filePath = object.name;
    let fileName = JSON.stringify(path.basename(filePath));
    //Checks to see if there is a dot in the filename
    if (fileName.indexOf('.')) {
        fileName = fileName.substring(1, fileName.indexOf('.'));
    }
    if (!object.contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return null;
    }
    return admin.firestore().collection(`pictures`).doc(fileName).update({ uid: fileName }).then(function () {
        console.log('UID in document successfully updated!');
        return;
    }).catch(function (err) {
        console.log('Unable to update UID in document.', err);
        return null;
    });
});
/*
** Deletes the image document on firestore when the corresponding image file has been deleted from storage.
 */
exports.deleteImageStored = functions.storage.object().onDelete((object) => {
    const filePath = object.name;
    let fileName = JSON.stringify(path.basename(filePath));
    //Checks to see if there is a dot in the filename
    if (fileName.indexOf('.')) {
        fileName = fileName.substring(1, fileName.indexOf('.'));
    }
    if (!object.contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return null;
    }
    return admin.firestore().collection(`pictures`).doc(fileName).delete().then(function () {
        console.log('Document successfully deleted!');
        return;
    }).catch(function (err) {
        console.log('Unable to delete document.', err);
        return null;
    });
});
/*
** Deletes the image file in storage when the corresponding image document has been deleted from firestore.
 */
exports.deleteImageDocument = functions.firestore.document('pictures/{uid}').onDelete((snap, context) => {
    const fileName = 'images/' + snap.data().uid + '.jpg';
    console.log('uid: ' + fileName);
    const bucket = admin.storage().bucket();
    return bucket.file(fileName).delete().then(function () {
        console.log('Document successfully deleted!');
        return;
    }).catch(function (err) {
        console.log('Unable to delete document.', err);
        return null;
    });
    // const filePath = functions.config().firebase.storageBucket + '/images/' + uid + '.jpg';
    //
    // console.log('path: ', filePath);
    //
    // return admin.storage().bucket(path).delete()
    // //
    // const filePath = functions.config().firebase.storageBucket + '/images/' + uid;
    // From there, get the deleted alert's id and delete all logs
    // with that alertId key
});
//# sourceMappingURL=index.js.map