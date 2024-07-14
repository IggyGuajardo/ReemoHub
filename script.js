document.addEventListener("DOMContentLoaded", function() {
    const phones = [
        "iPhone SE", "iPhone 11", "iPhone 12", "iPhone 14", "iPhone 14 Plus", "iPhone 15", "iPhone 15 Plus", 
        "iPhone 15 Pro Max", "Galaxy A15 5G", "Galaxy A14 5G", "Galaxy A54 5G", "Moto G Stylus 5G 24", 
        "Moto G 5G 24", "Moto G Play 24", "Moto G Play 23", "Razr", "Moto G 5G 23", "Moto G Power 5G 24", 
        "Magic 5G", "Icon 5", "Outlast", "Debut Flex Flip", "Turbo Hotspot 3"
    ];

    const formContainer = document.getElementById('form-container');

    const form = document.createElement('form');
    form.action = "/submit_order";
    form.method = "post";

    const phoneList = document.createElement('div');
    phoneList.className = "phone-list";

    phones.forEach(phone => {
        const phoneItem = document.createElement('div');
        phoneItem.className = "phone-item";

        const label = document.createElement('label');
        label.htmlFor = phone.toLowerCase().replace(/ /g, '-');
        label.textContent = `${phone}:`;

        const input = document.createElement('input');
        input.type = "number";
        input.id = phone.toLowerCase().replace(/ /g, '-');
        input.name = phone.toLowerCase().replace(/ /g, '_');
        input.min = "0";

        phoneItem.appendChild(label);
        phoneItem.appendChild(input);
        phoneList.appendChild(phoneItem);
    });

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.className = "submit-btn";
    submitButton.textContent = "Submit Order";

    form.appendChild(phoneList);
    form.appendChild(submitButton);
    formContainer.appendChild(form);
});
