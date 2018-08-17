<template>
    <div class="login">
        <input type="text" placeholder="login" class="login-input" v-model="login">
        <input type="text" placeholder="password" class="login-input" v-model="password">
        <button class="login-input" @click="onLogIn">Login</button>
    </div>
</template>

<script>
export default {
    name: "entry",
    data() {
        return {
            login: '',
            password: ''
        };
    },
    methods: {
        onLogIn() {
            console.log(this.login, this.password);
        }
    }
};
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-input {
        width: 400px;
        height: 5rem;
        margin: 1rem;
        font-size: 2.5rem;
    }

    .login-input::-webkit-input-placeholder {
        font-size: 2.5rem;
    }
</style>
