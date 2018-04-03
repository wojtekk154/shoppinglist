import Fire from './firebaseService';

class AuthService {
    signIn(data) {
        return Fire.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(data = data.json);

    }

    currentUser() {
        return Fire.auth();
    }
}

export default AuthService;