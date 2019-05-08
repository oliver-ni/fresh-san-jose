import firebase from '@/firebase';

export interface RootState {
    dataIsLoaded: boolean;
    cart: any;
    images: any;
    auth?: AuthState;
    firebase?: FirebaseState;
}

export interface FirebaseState {
    categories: any;
    merchants: any;
    products: any;
    orders: any;
}

export interface AuthState {
    user: firebase.User | null;
    status: string;
}
