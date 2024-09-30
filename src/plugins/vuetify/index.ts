// src/plugins/vuetify/index.ts

import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Import components
import * as directives from 'vuetify/directives'; // Import directives
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Icons

// Optional: Add custom theme configuration or icons here
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});


export { vuetify };
