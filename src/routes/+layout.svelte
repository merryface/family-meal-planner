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
        align-items: center;
        margin: 1rem 2rem;    
        gap: 1rem;
    }
</style>

