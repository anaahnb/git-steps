document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    function handleCheckboxState(checkbox) {
			const isChecked = localStorage.getItem(checkbox.id) === 'true'
			checkbox.checked = isChecked

			checkbox.addEventListener('change', function() {
				localStorage.setItem(this.id, this.checked)
			})
    }

    checkboxes.forEach(handleCheckboxState)
})