<script lang="ts">
    let extraClasses: string = "";
    export { extraClasses as class };
</script>

<div class="w-full h-full bg-gray rounded-xl p-8 relative {extraClasses}">
    <slot></slot>
</div>