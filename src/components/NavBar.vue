<script>
import { RouterLink } from 'vue-router';
import Button from './Button.vue'
import CustomMenu from './CustomMenu.vue'

export default {
    name: "NavBar",
    components: { Button, CustomMenu }
}
</script>

<template>
    <div class="flex justify-center items-center justify-items-center">
        <div class="nav bg-secondary w-full flex items-center">
        <CustomMenu></CustomMenu>
        <nav class="menu">
            <RouterLink to="/">
                <a id="logo">GeniusGym</a>
            </RouterLink>
            <RouterLink to="/">
                <a class="route">Home</a>
            </RouterLink>
            <RouterLink to="/workout">
                <a class="route">Workouts</a>
            </RouterLink>
            <RouterLink to="/">
                <a class="route">Custom Program</a>
            </RouterLink>
 

        </nav>
        <RouterLink to="/login">
                <a id="log"  class="route mr-10">Log in</a>
            </RouterLink>
        </div>
    </div>

</template>


<style>
.nav {
    background-color: var(--darker);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* align-items: center; */
    z-index: 10;

}



.menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vh;
}

.menu {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    transition: 0.5s;
}


.nav input:checked~.hamburger {
    background: transparent;
}

.nav input:checked~.menu {
    right: 0;
}

.nav input:checked~.hamburger:before {
    top: 0;
    transform: rotate(-45deg);
    width: 30px;
}

.nav input:checked~.hamburger:after {
    top: 0;
    transform: rotate(45deg);
    width: 30px;
}

@media screen and (max-width: 800px) {

    #log{
        display: none;
    }

    .hamburger,
    .toggle {
        display: block;
    }

    .menu {
        top: 90px;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: -700px;
        background-color: var(--darker);
    }
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
    color: var(--primary);
    transition: 0.4s;
}

#logo {
    background-clip: border-box;
    background: radial-gradient(ellipse farthest-corner at bottom left, var(--primary) 80%, var(--white) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    font-weight: 700;

}
</style>