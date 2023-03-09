<script>
export default {
    name: "PasswordInput",
    props: {
    }

}
</script>

<template>
    <input class="password" type="password" placeholder="password" name="password" />
</template>

<style>
.password {
    margin-top: 5px;
    font-size: 24px;
    text-align: center;
    width: 240px;
    border-radius: 5px;
    border: none;
    outline: none;
    height: 40px;
    background-color: var(--transparent);
    backdrop-filter: 5px;
    font-family: 'ASAP';
    font-weight: 500;
}

.password:focus {
    border-bottom: 2px solid var(--accent2);
    background-color: var(--lesstransparent);

}

.password:hover {
    background-color: var(--lesstransparent);
}

.password::placeholder {
    font-size: 14px;
    color: var(--lesstransparent);
}
</style>