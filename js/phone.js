const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
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
    if ( phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // show first 12 phone
    phones = phones.slice(0,12);


  phones.forEach((phone) => {
    console.log(phone);

    //  02
    const phoneCard = document.createElement("div");
    // 03
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // 04
    phoneCard.innerHTML = `
            <figure><img src="${phone.image}" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
};


const handleSearch = () =>{
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    console.log(searchText);
    loadPhone(searchText);
}
loadPhone();
