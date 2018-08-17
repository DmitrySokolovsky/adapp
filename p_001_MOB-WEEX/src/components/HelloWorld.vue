<template>
<div>
    <text class="message">{{hello}}</text>
    <text v-on:click="jumpBack">Back</text>
</div>
</template>

<script>
var navigator = weex.requireModule('navigator');
export default {
    name: 'HelloWorld',
    data() {
        return {
            hello: 'World'
        }
    },
    methods: {
        jumpBack() {
            navigator.pop({ animated: 'false' }, event => {
                console.log(event);
            });
        }
    }
}
</script>
