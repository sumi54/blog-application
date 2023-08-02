<template>
    <div class="makale">
        <a><h3>{{ makale.baslik }}</h3></a>
    </div>
</template>
<script>
export default{
    props:['makale']
}
</script>
<style>

.makale a{
    display: block;
    margin:40px 0;
    padding: 20px;
    border-left: 6px solid #eb4d4b;
    cursor: pointer;
}

.makale a:hover h3{
    color:#eb4d4b
}

</style>
