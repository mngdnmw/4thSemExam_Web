'use strict';

const functions = require('firebase-functions');
const mkdirp = require('mkdirp-promise');
// Include a Service Account Key to use a Signed URL
const gcs = require('@google-cloud/storage')({keyFilename: 'service-account-credentials.json'});
const admin = require('firebase-admin');
admin.initializeApp();
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');


exports.generateImageDocument = functions.storage.object().onFinalize((object) => {
  // File and directory paths.
  const filePath = object.name;
  const fileName = path.basename(filePath);

  //const fileString = JSON.stringify(fileName);
  // // Exit if this is triggered on a file that is not an image.
  //const s = fileString.substring(0, fileString.indexOf('.'));
  console.log(fileName);
  //console.log("trim "+fileName.trimRight());

  return;
  // if (!object.contentType.startsWith('image/')) {
  //   console.log('This is not an image.');
  //   return null;
  // }
  //
  // return admin.database().ref('images/${fileName}').update({uid: filePath});

});

