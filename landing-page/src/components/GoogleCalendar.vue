<template>
    <div>
      <h1>Google Calendar Integration</h1>
      <button @click="handleAuthClick">Sign in with Google</button>
      <div v-if="events.length">
        <h2>Your Events:</h2>
        <ul>
          <li v-for="event in events" :key="event.id">{{ event.summary }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        events: [],
      };
    },
    methods: {
      handleAuthClick() {
        gapi.load('client:auth2', () => {
          gapi.auth2.init({
            client_id: '730525068229-ehclocnq5u2f5g3egdr5nnnk8dspovmq.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/calendar.readonly',
          }).then(() => {
            return gapi.auth2.getAuthInstance().signIn();
          }).then(() => {
            console.log('User signed in');
            this.loadEvents();
          }).catch((error) => {
            console.error('Error signing in', error);
            alert(`Error signing in: ${error.message}`);
          });
        });
      },
      loadEvents() {
        gapi.client.load('calendar', 'v3', () => {
          gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
          }).then((response) => {
            this.events = response.result.items;
            console.log('Events:', this.events);
          }).catch((error) => {
            console.error('Error loading events', error);
          });
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  ul {
    margin-top: 20px;
  }
  li {
    margin-bottom: 10px;
    list-style-type: none;
  }
  </style>
  