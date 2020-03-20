# firestore-auto-backup

#### INSTRUCTION (Replace all PROJECT_ID)
1. Run this command on cloud shell (https://console.cloud.google.com/?cloudshell=true)
    ```
    gcloud projects add-iam-policy-binding PROJECT_ID \
    --member serviceAccount:PROJECT_ID@appspot.gserviceaccount.com \
    --role roles/datastore.importExportAdmin
    ```
2. Run this command on cloud shell (https://console.cloud.google.com/?cloudshell=true)
    ```
    gsutil iam ch serviceAccount:PROJECT_ID@appspot.gserviceaccount.com:admin \
    gs://geer-mlm.appspot.com
    ```
3. Deploy by using command ```firebase deploy --only functions:scheduledFirestoreExport```
4. You can test in this link (https://console.cloud.google.com/cloudscheduler)

#### IMPORTING COMMAND
```gcloud firestore import gs://geer-mlm.appspot.com/{folder_name}```
