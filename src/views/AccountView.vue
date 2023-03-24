<script>
import Button from '../components/Button.vue';

export default {
    'name': "AccountView",
    components: {
        Button,
    },
    data () {
        return {
            fullname: '',
            email: '',
        }
    },
    beforeMount() {
        console.log(this.$store.state.user)
        this.fullname = this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName;
        this.email = this.$store.state.user.email;
    },
    methods: {
        logOut() {
            this.$store.commit('setUser', null);
            this.$router.push('/login');
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="account-container flex items-center justify-center">
        <div class="bg-secondary-light pt-10 pr-40 pl-40 pb-10 flex-col items-center justify-items-center justify-center rounded-lg">
            <label class="text-white text-left top-1" >Your name</label>
            <p class="mt-1 max-h-60 w-60 overflow-auto rounded-md bg-secondary py-2 pl-3 pr-10  text-base text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {{fullname}}
            </p>
            <label class="text-white text-left top-1" >Your email</label>
            <p class="mt-1 max-h-60 w-60 overflow-auto rounded-md bg-secondary py-2 pl-3 pr-10  text-base text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {{email}}
            </p>
            <Button :text="'Log out'" @click="logOut"
            class=" self-center mt-10 w-32 h-10 rounded-md bg-secondary hover:bg-primary duration-300 font-medium text-white">Log out</Button>
        </div>
    </div>
    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100vh;
 }
 .account-container {
    height: 90vh;
}
</style>