<script>
    let { children } = $props()
</script>

<div class="container">
    {@render children()}
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        margin: 1rem 2rem;       
    }
</style>

