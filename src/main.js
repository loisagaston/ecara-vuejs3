import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import ContentHeader from './components/ContentHeader.vue';
import Content from './components/ContentVue.vue';



// Importar DataTables
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';

// Importar CSS de DataTables
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';

// Importar Bootstrap y Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App)

app.component('content-header', ContentHeader)
.component('content', Content)
.use(store)
.use(router)
.mount('#app')
