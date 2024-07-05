const volunterBtn = document.querySelector('.volunteer-link');

const donateBtns = document.querySelectorAll('.donate-link');

const runAlertFuncts = () => {
	if (volunterBtn) {
		volunterBtn.addEventListener('click', () => {
			alert(
				'No on-going outreach to volunteer for yet. Check back again. Thank you!'
			);
		});
	}

	if (donateBtns) {
		donateBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				alert('Payment link not available at this time. Check back again!');
			});
		});
	}
};

export { runAlertFuncts };
