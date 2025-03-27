// Navbar toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Array of flag objects with name, image path, and history text
const flags = [
  {
    name: "United States",
    image: "images/us.png",
    history: "The United States was founded in 1776 and has a rich history of independence and innovation.",
    modalImage:"https://www.thoughtco.com/thmb/KGaEeXk4onUUArpvlIzblGt1GFY=/2119x1415/filters:fill(auto,1)/low-angle-view-of-statues-at-mount-rushmore-national-memorial-against-sky-903996590-5c48a933c9e77c00019afb1e.jpg"
  },
  {
    name: "Canada",
    image: "images/canada.png",
    history: "Canada, known for its vast wilderness and multicultural society, became a country in 1867.",
    modalImage:"https://images.hdqwalls.com/wallpapers/peyto-lake-canada-mountains-4k-tj.jpg"
  },
  {
    name: "United Kingdom",
    image: "images/uk.png",
    history: "The United Kingdom is steeped in history, with a constitutional monarchy that dates back centuries.",
    modalImage:"https://www.pendulumofmayfair.co.uk/wp-content/uploads/2012/08/Bigben.jpg"
  },
  {
    name: "France",
    image: "images/france.png",
    history: "France, officially the French Republic, boasts a history that spans over two millennia. Its roots can be traced back to ancient Gaul, where Celtic tribes once inhabited the land before Roman conquest transformed the region. During the medieval period, powerful kingdoms emerged, setting the stage for significant cultural and political developments. The Renaissance brought an era of artistic and intellectual flourishing, while the French Revolution of 1789 radically reshaped the nation, laying the groundwork for modern democratic ideals. Over the centuries, France has experienced both turbulent wars and periods of renaissance, including the influential Napoleonic era and the challenges of two World Wars. Today, France is renowned for its contributions to art, philosophy, cuisine, and global culture.",
    modalImage:"https://www.essentialhome.eu/inspirations/wp-content/uploads/2016/12/Guide-for-a-short-trip-to-Paris-4.jpg"
  },
  {
    name: "Turkey",
    image: "images/turkey.png",
    history: "Turkey has a long and diverse history that spans several millennia. Its cultural heritage was significantly shaped by the rise and fall of the Ottoman Empire—a powerful state that lasted for over six centuries and left an enduring impact on regions across Europe, Asia, and Africa. Following World War I and the dissolution of the Ottoman Empire, the modern Republic of Turkey was established in 1923 under the visionary leadership of Mustafa Kemal Atatürk, who implemented wide-ranging reforms to modernize and secularize the nation. Today, Turkey serves as a bridge between East and West, renowned for its rich cultural legacy, strategic geopolitical position, and evolving modern society.",
    modalImage:"https://wallpaperaccess.com/full/35663.jpg"
  },
  {
    name: "Egypt",
    image: "images/egypt.png",
    history: "Egypt is renowned for its ancient civilization, which dates back more than 5,000 years. The land of the Nile was home to one of the world's earliest and most influential cultures, famous for its monumental pyramids, pharaohs, and intricate hieroglyphic writing. Ancient Egypt made significant advances in art, science, and architecture, with enduring legacies such as the Great Pyramids of Giza and the Sphinx. Over the millennia, Egypt experienced various periods of rule, including conquests by the Persians, Greeks, and Romans, followed by the spread of Islam during the medieval period. In modern times, Egypt has continued to be a key cultural and political player in the region, blending its rich historical heritage with contemporary developments.",
    modalImage:"https://www.tripsavvy.com/thmb/Ue5Tz-4fTb9OTBbEzBxlqa8UT_s=/2143x1399/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-154260931-584169ec3df78c0230514c82.jpg"
  },
  {
    name: "cuba",
    image: "images/cuba.png",
    history: "Cuba,[c] officially the Republic of Cuba,[d] is an island country, comprising the island of Cuba (largest island), Isla de la Juventud, and 4,195 islands, islets and cays surrounding the main island. It is located where the northern Caribbean Sea, Gulf of Mexico, and Atlantic Ocean meet. Cuba is located east of the Yucatán Peninsula (Mexico), south of both Florida and the Bahamas, west of Hispaniola (Haiti/Dominican Republic), and north of Jamaica and the Cayman Islands. Havana is the largest city and capital. Cuba is the third-most populous country in the Caribbean after Haiti and the Dominican Republic, with about 10 million inhabitants. It is the largest country in the Caribbean by area.",
    modalImage:"https://www.planetware.com/wpimages/2019/12/cuba-in-pictures-beautiful-places-to-photograph-vinales.jpg"
  },
  {
    name: "brazil",
    image: "images/brazil.png",
    history: "Brazil's history begins with rich indigenous cultures long before Portuguese explorer Pedro Álvares Cabral arrived in 1500. It became a Portuguese colony, thriving on sugar and gold, and relied heavily on enslaved African labor. Brazil declared independence in 1822 and remained a monarchy until 1889, when it became a republic. After a period of military dictatorship from 1964 to 1985, Brazil transitioned back to democracy and is now the largest country in South America, known for its cultural diversity, natural beauty, and complex political history.",
    modalImage: "https://www.planetware.com/wpimages/2020/02/brazil-in-pictures-beautiful-places-to-photograph-botafogo-bay.jpg"

  } 
];

// Create a card element for a flag
function createFlagCard(flag) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.name = flag.name;
  card.dataset.history = flag.history;

  const img = document.createElement('img');
  img.src = flag.image;
  img.alt = flag.name;

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const title = document.createElement('h3');
  title.textContent = flag.name;

  cardContent.appendChild(title);
  card.appendChild(img);
  card.appendChild(cardContent);

  card.addEventListener('click', () => openModal(flag.name, flag.history, flag.modalImage));

  return card;
}

// Display all flag cards
function displayFlags() {
  const container = document.getElementById('flag-cards');
  flags.forEach(flag => container.appendChild(createFlagCard(flag)));
}

// Open modal with title + text
function openModal(title, text, imageUrl) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-text').textContent = text;

  const modalImg = document.getElementById('modal-image');
  modalImg.src = imageUrl;
  modalImg.alt = title;

  document.getElementById('modal').style.display = 'block';
}

// Close modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', displayFlags);

// Modal close events
document.getElementById('modal-close').addEventListener('click', closeModal);
window.addEventListener('click', event => {
  if (event.target === document.getElementById('modal')) closeModal();
});
