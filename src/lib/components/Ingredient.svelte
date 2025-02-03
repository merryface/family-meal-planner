<script>
    let { label, quantity, unit } = $props()
</script>

<div class="ingredient">
  <span>{label}</span>
  <span>{quantity} {unit}</span>
</div>