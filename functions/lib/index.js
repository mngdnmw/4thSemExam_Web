"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.uploadedFileToStorage = functions.storage.object().onFinalize(event => {
    console.log('something uploaded ', event);
});
//# sourceMappingURL=index.js.map