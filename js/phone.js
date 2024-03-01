const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
    // 01 get a container
    // 02 create a div
    // 03 set classList in the new div
    // 04 set inner html
    // 05 append child

    
    // 01
  const phoneContainer = document.getElementById("phone-container");

    //   clear data and new tab open
    phoneContainer.textContent = '';

    // show all btn
    const showAllContainer = document.getElementById('show-all-container');
    if ( phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // show first 12 phone

   if(!isShowAll){
    phones = phones.slice(0,12);
   }



  phones.forEach((phone) => {
    // console.log(phone);

    //  02
    const phoneCard = document.createElement("div");
    // 03
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // 04
    phoneCard.innerHTML = `
            <figure><img src="${phone.image}" /></figure>
            <div class="card-body">
                <h2 class="card-title text-center mx-auto">"${phone.phone_name}"</h2>
                <p class="text-center" >There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-center">
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });

  toggleLoddingSpinner(false);
};




const handleSearch = (isShowAll) =>{
  toggleLoddingSpinner(true);
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}

// loadPhone();


// toggle spinner
const toggleLoddingSpinner = (isLodding) =>{
  const toggoleLodding = document.getElementById('toggole-lodding');
  if(isLodding){
    toggoleLodding.classList.remove('hidden');
  }else{
    toggoleLodding.classList.add('hidden');
  }
}

const handleShowAll = () => {
  handleSearch(true);
}


const handleShowDetail = async (id) =>{
  console.log('pl se the att file');
  // 
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  console.log(data); 
  const phone = data.data;
  showPhoneDetail(phone);

}

const showPhoneDetail = (phone) =>{

  const phoneName = document.getElementById('show-detail-phone-name');
  phoneName.innerText = phone.name;
  
  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML = `
      <img class="mx-auto" src="${phone.image}" alt="" />
      <p class="text-black"><span class="font-bold">storage:</span>${phone.
        mainFeatures.storage}</p>
  
  `;

  show_modal.showModal();

}
