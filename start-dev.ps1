$env:FIRESTORE_EMULATOR_HOST="localhost:8080"
$env:FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
$env:FIREBASE_DATABASE_EMULATOR_HOST="localhost:9000"
$env:FIREBASE_STORAGE_EMULATOR_HOST="localhost:9199"

node scripts/firebaseSeed.js --use-emulators
#firebase emulators:start