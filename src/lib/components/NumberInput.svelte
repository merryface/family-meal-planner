<script>
    let {label, meals, inc, dec} = $props()

</script>

<label>
    <p>{label}</p>
    <div class="buttons">
        <button onclick={() => dec()}>-</button>
        <p>{meals}</p>
        <button onclick={() => inc()}>+</button>
    </div>
</label>


<style>
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
    }

    p {
        font-size: 1.5rem;
        margin: 0.5rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    button {
        background-color: #cc0000;
        border: none;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        cursor: pointer;
        color: #fff;
        border-radius: 5px;
        width: 3rem;
    }
</style>