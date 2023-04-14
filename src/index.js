const form = document.getElementById('form')
const input = document.querySelector('.shorten__text')
const shortenBtn = document.querySelector('.shorten__btn')
const error = document.querySelector('.error')
const listContainer = document.querySelector('#list')

// Variables
let list;
let copyBtns;

// Functions
function renderItem(links) {
  const listContainer = document.querySelector('#list')

  const listItem = `
       <li class="shorten__link">
        <div class="links">
          <p id="original__link" class="original__link">
            ${links.longLink}
          </p>
          <p class="copy__text">
          ${links.shortLink}
          </p>
        </div>
        <button class="copy__btn btn">
          Copy
        </button>
      </li>
  `
  listContainer.insertAdjacentHTML("afterbegin", listItem);
}

// Adding new link to the DOM and local storage
function addNewLink(links) {
  list.push(links)
  renderItem(links)
  localStorage.setItem('links', JSON.stringify(list))
  copyBtns = document.querySelectorAll('.copy__btn')
}

// Fucntion to fetch short link from the API
const shortenLink = async (link) => {
  const apiLink = `https://api.shrtco.de/v2/shorten?url=${link}`

  const res = await fetch(apiLink)
  return await res.json()
}

function copyTextFromClipboard() {
  // Loop through the buttons
  copyBtns.forEach((copyBtn, index) => {
    // Add listener on each btn
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const content = document.querySelectorAll('.copy__text')[index].innerText

      // navigator API for copying to clipboard
      navigator.clipboard.writeText(content)
      copyBtn.textContent = 'Copied!'
      copyBtn.classList.add('copied')

    })
  })
}


// Listeners
document.addEventListener('DOMContentLoaded', () => {
  list = JSON.parse(localStorage.getItem('links')) || []
  if (list.length > 0) {
    list.forEach(item => {
      renderItem(item)
    })
  }
  copyBtns = document.querySelectorAll('.copy__btn')

  copyTextFromClipboard()
})
//  When the form is submitted; shorten the link
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  // Get link value from input
  const inputLink = input.value.trim()
  // Validate the input
  if (inputLink === '') {
    error.textContent = 'Please add a link'
    return
  }
  error.textContent = ''
  // Use the link value to query the APi
  const data = await shortenLink(inputLink)
  // Add links to the DOM
  const links = {
    shortLink: data.result.short_link,
    longLink: data.result.original_link
  }
  addNewLink(links)
  // Clear input form
  input.value = ''

  copyTextFromClipboard()
})
