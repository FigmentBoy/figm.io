<script lang="ts">
    import { gsap } from "gsap";

    let extraClasses: string = "";
    export { extraClasses as class };

    export let path: string;
    export let frames: number;

    const currentFrame = (index: number) => (
        `/assets/VideoScrollers/${path}/${(index + 1).toString().padStart(4, '0')}.webp`
    );

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    let images: HTMLImageElement[] = [];
    let state = {
        currentFrame: 0
    };

    for (let i = 0; i < frames; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    let width = 1920;
    let height = 1080;

    images[0].onload = () => {
        width = images[0].width;
        height = images[0].height;
    };

    const render = () => {
        const img = images[Math.floor(state.currentFrame)];
        ctx.drawImage(img, 0, 0);
    };

    $: if (canvas) {
        canvas.width = width;
        canvas.height = height;
    }

    let setup = false;
    $: if (canvas && !setup) {
        setup = true;
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        gsap.to(state, {
            currentFrame: frames - 1,
            ease: "none",
            scrollTrigger: {
                trigger: canvas,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            onUpdate: render
        });
    }
</script>

<div class="p-0 overflow-hidden relative {extraClasses}">
    <canvas bind:this={canvas} class="w-full h-full m-0" />
</div>