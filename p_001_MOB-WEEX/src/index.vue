<template>
    <div class="wrapper-main">
      <div class="greet"><text class="greet-text">Hello, please login</text></div>
      <div class="wrapper">
        <input class="input" value="" v-model="login" placeholder="LOGIN"/>
      </div>
      <div class="wrapper">
        <input type="password" class="input" v-model="password" value="" placeholder="PASSWORD"/>
      </div>
      <div class="btn" v-on:click="getData">
          <text class="btn-text">LOGIN</text>
      </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

const storage = weex.requireModule('storage');

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
var bundleUrl = weex.config.bundleUrl;

export default {
    name: 'App',
    components: {
        'hello': HelloWorld
    },
    data() {
        return {
            state: '---',
            login: '',
            password: ''
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
        // storage.getItem('name', event => {
        //     console.log('get value:', event.data);
        //     this.state = 'value: ' + event.data;
        // });

            console.log(this.login, this.password);
        },
        goHello() {
            navigator.push({
                url: 'http://10.5.9.46:8081/components/HelloWorld.html',
                animated: 'true'
                }, event => {
                    modal.toast({ message: 'callback: ' + event })
                }
            );
        },
        onLoginInput(event) {
            axios.post();
        },
        onchange(event) {
            console.log(event);
        }
    }
};
</script>

<style>
.wrapper-main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
    height: 100px;
    width: 600px;
    border-width: 1px;
    border-style: solid;
    border-color: #41b883;
    margin-bottom: 15;
}

.input {
    border: 1px solid #666;
    height: 100px;
    width: 600;
    color: red;
}

.greet {
    margin-bottom: 20;
}

.greet-text {
    font-size: 40;
}

.btn {
    margin-top: 200;
}

.btn-text {
    font-size: 45;
}
</style>
