<script>
    let {label, meals, inc, dec} = $props()

</script>

<label>
    <p>{label}</p>
    <button onclick={() => inc()}>+</button>
    <p>{meals}</p>
    <button onclick={() => dec()}>-</button>
</label>