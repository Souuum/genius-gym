<script>

export default {
    name: "CirclePictureFrame",
    props: {
        image: String,
        width: String,
        height: String,
        borderRadius: String,

    }
}
</script>



<template>
    <div class="Circle">
    </div>
</template>


<style>
.Circle {
    width: 400px;
    height: 400px;
    background-image: v-bind(image);
    background-size: cover;
    background-position: center;
    border-radius: v-bind(borderRadius);
}
</style>