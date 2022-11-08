import { createApp } from 'vue';
import mitt from 'mitt';

const emitter = mitt();

const app = createApp(/* blah blah */);

app.config.globalProperties.$formBus = emitter;

/* 
app
  .use(store)
  .use(router)
  .mount('#app'); */
