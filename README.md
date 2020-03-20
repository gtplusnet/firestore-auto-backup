# firestore-auto-backup

#### INSTRUCTION (Replace all PROJECT_ID)
1. ```gcloud projects add-iam-policy-binding PROJECT_ID \
    --member serviceAccount:PROJECT_ID@appspot.gserviceaccount.com \
    --role roles/datastore.importExportAdmin```
2. ```gsutil iam ch serviceAccount:PROJECT_ID@appspot.gserviceaccount.com:admin \
    gs://geer-mlm.appspot.com```
