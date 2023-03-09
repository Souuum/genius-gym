<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String,
        textColor: String,
        hoverColor: String,
        marginTop: String,
    }

}

</script>


<template>
    <button>
        {{ text }}
    </button>
</template>

<style>
button {
    margin-top: v-bind(marginTop);
    width: 120px;
    height: 40px;
    background: none;
    background-color: v-bind(color);
    border: none;
    border-radius: 5px;
    color: v-bind(textColor);
    font-family: 'ASAP';
    font-weight: 500;


}

button:hover {
    background-color: v-bind(hoverColor);
    transition: 0.4s;
}
</style>