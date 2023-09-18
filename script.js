document.addEventListener("DOMContentLoaded", function() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const calculateButton = document.getElementById("calculate");
    const explanation = document.getElementById("explanation");
    const fruitsContainer = document.getElementById("fruits");
    const outputContainer = document.getElementById("output");

    calculateButton.addEventListener("click", function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 * num2;

            // Clear previous fruits
            fruitsContainer.innerHTML = "";

            // Generate random fruit images for num1 and num2
            const fruit = "banana"; // The random fruit
            for (let i = 0; i < num1; i++) {
                const fruitImage1 = document.createElement("img");
                fruitImage1.src = `banana-cavendish-1kg-per-hand-fruits-vegetables-fresh-produce-221293_800x.webp`;
                fruitsContainer.appendChild(fruitImage1);
            }

            // Add a multiplication symbol image
            const multiplyImage = document.createElement("img");
            multiplyImage.src = "download (1).png";
            fruitsContainer.appendChild(multiplyImage);

            for (let i = 0; i < num2; i++) {
                const fruitImage2 = document.createElement("img");
                fruitImage2.src = `banana-cavendish-1kg-per-hand-fruits-vegetables-fresh-produce-221293_800x.webp`;
                fruitsContainer.appendChild(fruitImage2);
            }

            // Add an equal sign image
            const equalImage = document.createElement("img");
            equalImage.src = "download.png";
            fruitsContainer.appendChild(equalImage);

            // Generate random fruit images for the result
            for (let i = 0; i < result; i++) {
                const fruitImageResult = document.createElement("img");
                fruitImageResult.src = `banana-cavendish-1kg-per-hand-fruits-vegetables-fresh-produce-221293_800x.webp`;
                fruitsContainer.appendChild(fruitImageResult);
            }

            // Display the output
            explanation.textContent = ""; // Clear any text content
            outputContainer.classList.remove("hidden");
        } else {
            alert("Please enter valid numbers.");
        }
    });
});
