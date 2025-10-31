const img = document.getElementById('dog-img');
const loader = document.querySelector('.loader');
const errorMsg = document.querySelector('.error');

async function getDog() {
    loader.style.display = 'block';
    errorMsg.textContent = '';
    img.src = '';

    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        console.log(res);
        if (!res.ok) throw new Error('Network error');

        const data = await res.json();
        img.src = data.message;
    } catch (error) {
        errorMsg.textContent = 'Oops! Try again 🐾';
    }finally{
        loader.style.display = 'none';
    }

}

getDog();