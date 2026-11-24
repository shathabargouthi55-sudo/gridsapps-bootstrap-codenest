document.addEventListener("DOMContentLoaded", function () {

    const productName = document.getElementById("productName");

    if (!productName) {
        return;
    }

    const products = {

        nestflow: {
            name: "NestFlow",
            category: "PRODUCTIVITY",
            image: "images/nestflow.jpg",
            description: "A powerful project management platform that helps teams organize tasks, collaborate and improve productivity.",
            features: [
                "Project and task management",
                "Team collaboration",
                "Progress tracking",
                "Interactive dashboards",
                "Task scheduling"
            ]
        },

        nestcrm: {
            name: "NestCRM",
            category: "BUSINESS",
            image: "images/nestcrm.jpg",
            description: "A customer relationship management platform designed to simplify sales and improve customer communication.",
            features: [
                "Customer management",
                "Sales tracking",
                "Contact organization",
                "Business reports",
                "Customer communication"
            ]
        },

        nestanalytics: {
            name: "NestAnalytics",
            category: "ANALYTICS",
            image: "images/nestanalytics.jpg",
            description: "A business analytics platform that transforms complex data into clear and useful insights.",
            features: [
                "Interactive charts",
                "Performance monitoring",
                "Data visualization",
                "Business reports",
                "Custom dashboards"
            ]
        }

    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");

    if (!Object.hasOwn(products, productId)) {
        window.location.replace("products.html");
        return;
    }

    const product = products[productId];

    productName.textContent = product.name;

    document.getElementById("productCategory").textContent =
        product.category;

    document.getElementById("productDescription").textContent =
        product.description;

    document.getElementById("productImage").src =
        product.image;

    document.getElementById("productImage").alt =
        product.name + " dashboard";

    const featuresList = document.getElementById("productFeatures");

    for (let i = 0; i < product.features.length; i++) {

        const li = document.createElement("li");

        li.innerHTML =
            '<i class="bi bi-check-circle-fill"></i> ' +
            product.features[i];

        featuresList.appendChild(li);
    }

    document.title = "CodeNest | " + product.name;

});