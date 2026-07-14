let alreadyDonated = document.querySelector(".collectedMoney");
if (alreadyDonated) {
    let currentAmount = Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000;
    alreadyDonated.textContent = "$" + currentAmount;

    function addRandomMoney() {
        const randomTimeMs = (Math.floor(Math.random() * (20 - 5 + 1)) + 5) * 1000;

        setTimeout(() => {
            const newDeposit = Math.floor(Math.random() * 678) + 1;
            currentAmount += newDeposit;
            alreadyDonated.textContent = "$" + currentAmount;
            addRandomMoney();
        }, randomTimeMs);
    }

    addRandomMoney();
}
