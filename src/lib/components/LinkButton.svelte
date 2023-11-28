<script lang="ts">
    let extraClasses: string = "";
    export { extraClasses as class };

    export let href: string;
</script>

<a href="{href}" target="_blank">
    <div class="p-3 rounded-lg text-gray w-fit button text-center {extraClasses}">
        <slot></slot>
    </div>
</a>