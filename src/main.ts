import { createApp } from 'vue'
import { vuetify } from './plugins/vuetify';
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const app = createApp(App);


app.use(vuetify);
app.mount('#app');
