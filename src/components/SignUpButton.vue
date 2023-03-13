<script>
import { RouterLink } from 'vue-router';
export default {
    name: "SignUpButton",
    props: {
    }

}

</script>


<template>
    <button class="signup">
        <RouterLink to="/signUp" id="signup-route" class="sutext">Sign up</RouterLink>
    </button>
</template>

<style>
.signup {
    margin-top: 40px;
    width: 120px;
    height: 40px;
    background: none;
    background-color: var(--cleartransparent);
    border: none;
    border-radius: 5px;
    color: var(--lesstransparent);
    font-family: 'ASAP';
    font-weight: 500;


}

#signup-route {
    font-family: 'ASAP';
    font-weight: 500;
    color: var(--white);
}

#signup-route:hover {
    transition: 0.4s;
}

.signup:hover~.sutext {
    color: var(--white);

}
.signup:hover {
    background-color: var(--primary);
    transition: 0.4s;
}
</style>