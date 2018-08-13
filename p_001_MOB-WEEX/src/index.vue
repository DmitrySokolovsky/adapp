<template>
  <div class="wrapper">
    <text>{{state}}</text>
    <div @click="setData">
      <text>SET</text>
    </div>
    <div @click="getData">
      <text>GET</text>
    </div>
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//import { weex } from "weex";

const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal');

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      state: '---'
    };
  },
  methods: {
    setData() {
      storage.setItem('name', 'Hanks', event => {
          this.state = 'set success';
          console.log('set success');
      });
    },
    getData() {
        storage.getItem('name', event => {
            console.log('get value:', event.data);
            this.state = 'value: ' + event.data;
        });
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
