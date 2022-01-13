<template>
    <section>
        Vous êtes à présent déconnecté.
    </section>
</template>

<script>

  import storage from '../plugins/storage.js';

export default ({

    props: {
        user: Object
    },

    created() {

        this.$store.replaceState({});
        storage.unset('userData');
        this.$router.push({name: 'Home'})

    }
})

</script>

<style>

</style>