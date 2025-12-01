# Blazed One

The main backend solution for Blazed Labs.

## Getting Started

Run the development server:

```bash
npm run dev
```

Run the Firebase Emulators:

```bash
firebase emulators:start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Seeding DB with Test Data

To seed the local DB with test data, run the following script in a power shell terminal:
```ps1
.\start-dev.ps1
```

If you get an error, you may need to enable ps execution, run the following script in a power shell admin terminal:

```ps1
Set-ExecutionPolicy RemoteSigned
```

## Deploy to Firebase App Hosting

### 1. Get your project set up on GitHub

[Create a new GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) and push the newly-initialized sample code to it:

<pre>
git remote add origin https://github.com/<b>$YOUR_NEW_REPOSITORY</b>.git
git branch -M main
git push -u origin main
</pre>

### 2. Set up Firebase App Hosting

Continue to [Get started with Firebase App Hosting](https://firebase.google.com/docs/app-hosting/get-started#step-1:).
