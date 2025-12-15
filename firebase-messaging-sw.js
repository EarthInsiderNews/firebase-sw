importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC1POAScuk1FbNccGcaeyd8pGYNAhiYjr8",
  authDomain: "ein-n-58425.firebaseapp.com",
  projectId: "ein-n-58425",
  messagingSenderId: "487266372204",
  appId: "1:487266372204:web:39e6427eb70d43a8a72649"
});

const messaging = firebase.messaging();

/* Background Notification */
messaging.onBackgroundMessage(function(payload) {
  console.log('[SW] Background message ', payload);

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.image
    }
  );
});
