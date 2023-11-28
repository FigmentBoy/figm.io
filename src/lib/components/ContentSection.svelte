<script lang="ts">
    let extraClasses: string = "";
    export { extraClasses as class };
    
    export let num: number;

    import { gsap } from "gsap";
    import { currentSection } from "../stores/CurrentSection";

    let container: HTMLDivElement;

    let setup = false;
    $: if (container && !setup) {
        setup = true;

        gsap.to(container, {
            scrollTrigger: {
                trigger: container,
                start: _ => `top bottom-=${container.clientHeight / 2}`,
                end: _ => `bottom bottom-=${container.clientHeight / 2}`,
                onEnter: _ => {
                    currentSection.set(num);
                },
                onEnterBack: _ => {
                    currentSection.set(num);
                }
            }
        });
    }
</script>

<div bind:this={container} class="relative w-full section p-12 {extraClasses}">
    <slot></slot>
</div>

<style>
    .section {
        height: calc(100vh - 12rem);
    }

    @media (min-width: 768px) {
        .section {
            height: 100vh;
        }
    }
</style>