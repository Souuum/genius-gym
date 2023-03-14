<script>
export default {
    name: "TextInput",
    props: {
        placeHolder: String,
        name: String,
    },


}

</script>

<template>
    <input class="text" type="text" :placeholder="placeHolder" :name="name" />
</template>

<style>
.text {
    margin-top: 5px;
    font-size: 14px;
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

.text:focus {
    border-bottom: 2px solid var(--accent2);
    background-color: var(--lesstransparent);

}

.text:hover {
    background-color: var(--lesstransparent);
}

.text::placeholder {
    color: var(--lesstransparent);
}
</style>