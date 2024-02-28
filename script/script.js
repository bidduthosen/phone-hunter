const phoneLoaded = async () =>{
    const phoneLoad = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await phoneLoad.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) =>{

    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone =>{

        const {phone_name, image } = phone;
        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-gray-200 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img class="pt-6 rounded-md" src="${image}" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
            `;

        phoneContainer.appendChild(phoneCard);
    })
}

phoneLoaded();