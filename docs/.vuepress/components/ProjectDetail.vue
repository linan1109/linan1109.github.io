<template>
    <div class="card" :class="{ 'show-border': !hideBorder }">
        <div v-if="image" class="card-image">
            <img :src="$withBase(image)" alt="Project Image">
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
        </div>
</template>

<script>
export default {
    props: ['image', 'hideBorder']
};
</script>

<style lang="stylus">
@import './styles/config.styl';
.card
    margin-top 1em
    min-height 250px
    display flex
    flex-direction column
    align-items: stretch
    .card-image
        display flex
        align-items center
        padding 0.5rem
        img 
            align-self center
            min-height 250px

            border-radius 0.2rem
            object-fit cover
    .card-content
        padding 0.5rem
        flex-grow 1
        p
            line-height normal
            -webkit-margin-before 0em
            -webkit-margin-after 0.5em
        blockquote 
            font-size 1rem
</style>