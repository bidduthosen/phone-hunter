const phoneLoaded = async (searchText = "samsung", isShowAll) =>{
    const phoneLoad = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await phoneLoad.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) =>{
    
    // show all button after the phonesLength 9
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 6 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    
    // slice the phone length and show the slice phone card
    if(!isShowAll){
        phones = phones.slice(0, 6);
    }

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    

    
    
    phones.forEach(phone =>{

        const {phone_name, image, slug } = phone;
        // console.log(phone)
        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-gray-200 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img class="pt-6 rounded-md" src="${image}" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions mt-3 flex justify-center">
                <button onclick="handleShowDetails('${slug}')" class="btn btn-outline btn-primary ">Show details</button>
            </div>
            </div>
            `;

        phoneContainer.appendChild(phoneCard);
    })
    // toggle Loader remove class hidden
    toggleALoader(false);
};

// search phone 

const searchPhone = (isShowAll) =>{
    toggleALoader(true);
    const searchField = document.getElementById('search-field').value;
    phoneLoaded(searchField, isShowAll);
}



// show all phone
const handleShowAll = (isShowAll) =>{
    searchPhone(true);
}

// handle show  details
const handleShowDetails = async(id)=>{
    const phone = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data  = await phone.json();
    handleShowDetailsModal(data.data)
};

const handleShowDetailsModal = (phoneDetails) =>{
    const modalContainer = document.getElementById('modal-details');
    console.log(phoneDetails)
    const {name, image , slug, mainFeatures} = phoneDetails

    modalContainer.innerHTML = `
    <img src="${image}" />"
    <h2 class ='text-3xl'>${name}</h2>
    <h2 class ='text-xl'>${slug}</h2>
    <ul>
        <li>${mainFeatures.displaySize}</li>
        <li>${mainFeatures?.memory}</li>
    </ul>
    `;
    
    show_details_modal.showModal();
}

// 
phoneLoaded();