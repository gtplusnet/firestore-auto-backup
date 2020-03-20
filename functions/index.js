const functions = require('firebase-functions');
const firestore = require('@google-cloud/firestore');
const client = new firestore.v1.FirestoreAdminClient();

// Asia/Manila Time
var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
asiaTime = new Date(asiaTime);

const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT;
const bucket = `gs://geer-mlm.appspot.com/${ projectId }/${ asiaTime.toLocaleString() }`

exports.scheduledFirestoreExport = functions.pubsub.schedule('every 24 hours').onRun((context) => 
{
    const databaseName = client.databasePath(projectId, '(default)');

    return client.exportDocuments(
    {
        name: databaseName,
        outputUriPrefix: bucket,
        collectionIds: []
    })
    .then(responses => 
    {
        const response = responses[0];
        console.log(`Operation Name: ${response['name']}`);
        return response;
    })
    .catch(err => 
    {
        console.error(err);
        throw new Error('Export operation failed');
    });
});
