document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("storage-check-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get values from the form
        var actualCeilingHeight = parseFloat(document.getElementById("ceiling-height").value);
        var kFactor = parseFloat(document.getElementById("k-factor").value);
        var pressure = parseFloat(document.getElementById("pressure").value);

        // Define conditions (max ceiling height, k factor, min pressure, max storage height)
        var conditions = [
            [25, 14, 50, "up to 25 feet"],
            [25, 16.8, 35, "up to 25 feet"],
            [25, 22.4, 25, "up to 25 feet"],
            [25, 25.2, 15, "up to 25 feet"],
            [30, 14, 50, "up to 30 feet"],
            [30, 16.8, 35, "up to 30 feet"],
            [30, 22.4, 35, "up to 30 feet"],
            [30, 25.2, 15, "up to 30 feet"],
            [35, 14, 75, "up to 35 feet"],
            [35, 16.8, 52, "up to 35 feet"],
            [35, 22.4, 35, "up to 35 feet"],
            [35, 25.2, 20, "up to 35 feet"],
            [40, 14, null, "Not Permitted"],
            [40, 16.8, 52, "Up to 40 feet"],
            [40, 22.4, null, "Not Permitted"],
            [40, 25.2, 40, "Up to 40 feet"],
            [45, 14, null, "Not Permitted"],
            [45, 16.8, null, "Not Permitted"],
            [45, 22.4, 40, "Up to 45 feet"],
            [45, 25.2, 40, "Up to 45 feet"]
        ];

        var result = "Storage conditions not met based on inputs.";
        for (var i = 0; i < conditions.length; i++) {
            var condition = conditions[i];
            if (condition[2] === null) continue; // Skip not permitted conditions
            if (actualCeilingHeight <= condition[0] && kFactor === condition[1] && pressure >= condition[2]) {
                result = "Storage " + condition[3] + " is permitted.";
                break;
            }
        }

        // Display the result
        document.getElementById("result").textContent = result;
    });
});
