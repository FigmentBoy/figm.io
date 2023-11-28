<script lang="ts">
    import { onMount } from "svelte";
    import { currentSection } from "./stores/CurrentSection";
    import LinkButton from "./components/LinkButton.svelte";

    onMount(() => {
        currentSection.subscribe(value => {
            const swapperItems = document.querySelector(".swapper-items") as HTMLDivElement;
            swapperItems.style.top = `${0.75 - 1.5 * value}rem`;
        });
    });
</script>

<div class="flex flex-col justify-center items-center p-10 h-48 md:h-screen w-full md:w-1/3 fixed top-0 md:left-0 bg-gray z-50">
    <h1 class="text-3xl font-head py-4 w-fit text-center">
        Hey!&nbsp;I'm <span class="text-5xl rainbow font-semibold">figment</span>!
    </h1>
    <h2 class="text-xl md:text-2xl inline-flex items-center">
        <span class="inline-block">I&nbsp;make&nbsp;</span> 
        <div class="swapper">
            <div class="swapper-items">
                <div class="text-red">portfolios</div>
                <div class="text-green">websites</div>
                <div class="text-blue">mods</div>
                <div class="text-pink">much more</div>
            </div>
        </div>
        <span>.</span>
    </h2>
</div>
    

<style>
    .rainbow {
        background: linear-gradient(90deg, theme('colors.red'), theme('colors.orange'), theme('colors.yellow'), theme('colors.green'), theme('colors.blue'), theme('colors.purple'), theme('colors.pink'));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
    
    .swapper {
        display: inline-block;
        height: 3rem;
        overflow: hidden;
        position: relative;
    }

    .swapper::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1rem;
        top: 2rem;
        background: linear-gradient(transparent, theme('colors.gray'));
        z-index: 1;
    }

    .swapper::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1rem;
        top: 0;
        background: linear-gradient(theme('colors.gray'), transparent);
        z-index: 1;
    }

    .swapper-items {
        position: relative;
        line-height: 1.5rem;
        top: 0.75rem;
        left: 0;
        width: 100%;
        height: 100%;

        transition: 0.25s;
    }
</style>