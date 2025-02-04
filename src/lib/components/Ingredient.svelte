<script>
    let { label, quantity, unit } = $props()
</script>

<div class="ingredient">
  <span>{label}</span>
  <span>{quantity} {unit}</span>
</div>

<style>
  .ingredient {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
  }
</style>