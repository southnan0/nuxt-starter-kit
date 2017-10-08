<template>
    <div>
        <h1>hello</h1>
        <button @click="goToDetail">detail</button>
    </div>
</template>

<script>
    export default {
        methods: {
            goToDetail() {
                this.$store.dispatch('login', {
                    username: '123'
                });
                this.$router.history.push('/detail');
            }
        }
    }

</script>
