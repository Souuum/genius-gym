<script>
export default {
    name: "BigPanel",
    //props: ['bgColor', 'textColor', 'header'],
    props: {
        bgColor: String,
        textColor: String,
        header: String,
    }
}
</script>


<template>
    <div class="container">
        <h1>{{ header }}</h1>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: flex-start;
    background-color: v-bind(bgColor);
    color: v-bind(textColor);
    min-height: 400px;
    width: 90%;

    border-radius: 12px;
}
</style>