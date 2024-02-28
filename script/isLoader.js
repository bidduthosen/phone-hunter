const toggleALoader = (isLoader)=>{
    const loaderContainer = document.getElementById('loader-container');
    if(isLoader){
        loaderContainer.classList.remove('hidden');
    }
    else(
        loaderContainer.classList.add('hidden')
    )
}