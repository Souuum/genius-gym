<script>
import { RouterLink, RouterView } from 'vue-router';
import { PRIMARY, WHITE } from '../assets/colors';
import Button from './Button.vue'

export default {
    name: "NavBar",
    setup() {
        return { PRIMARY, WHITE }
    },
    components: { Button }
}
</script>

<template>
    <div class="nav">
        <nav>
            <RouterLink to="/">
                <a id="logo">GeniusGym</a>
            </RouterLink>
            <RouterLink to="/">
                <a class="route">Home</a>
            </RouterLink>
            <RouterLink to="/">
                <a class="route">Workouts</a>
            </RouterLink>
            <RouterLink to="/">
                <a class="route">Custom Program</a>
            </RouterLink>
            <RouterLink to="/login">
                <a class="route">Log in</a>
            </RouterLink>
        </nav>
    </div>
</template>


<style>
.nav {
    z-index: 10;
    margin-top: 2vh;
    position: absolute;
    width: 100%;
    min-height: 80px;

    display: flex;
    justify-content: space-between;
}

nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vh;
}

p {
    text-decoration: none;
    transition: 0.4s;
    font-family: 'ASAP';

}

.route {
    color: var(--white);
    font-family: 'ASAP';
    font-weight: 600;
    font-size: 24px;
}

a :hover {
    color: var(--accent2);
    transition: 0.4s;
}

#logo {
    color: var(--dark);
    font-size: 48px;
    font-weight: 700;

}
</style>