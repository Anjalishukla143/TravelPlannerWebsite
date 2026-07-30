console.log("FINAL RESULT JS WORKING");


const destination = (localStorage.getItem("destination") || "goa")
  .trim()
  .toLowerCase();

console.log("Selected Destination:", destination);


const days =
parseInt(localStorage.getItem("days")) || 3;

const budget =
localStorage.getItem("budget") || "10000";

const foodPreference =
localStorage.getItem("food") || "Veg";

const travelMode =
localStorage.getItem("travelMode") || "Car";

const travelType =
localStorage.getItem("travelType") || "Solo";

const people =
parseInt(localStorage.getItem("people")) || 1;



const placesData = {


goa: {

title:"Goa Trip Plan",

video:"videos/goa.mp4",

places:[
"Baga Beach",
"Calangute Beach",
"Fort Aguada",
"Anjuna Beach",
"Chapora Fort",
"Palolem Beach"
],


vegRestaurants:[
"Navtara Veg Restaurant",
"Kamat Restaurant",
"Anand Sagar Veg Restaurant"
],


nonVegRestaurants:[
"Martin's Corner",
"Fisherman's Wharf",
"Ritz Classic"
],


famousFood:[
"Goan Veg Thali",
"Paneer Cafreal",
"Fish Curry",
"Prawn Curry"
],


hotels:[
"Radisson Goa Resort",
"Fairfield by Marriott Goa",
"The Park Calangute"
],


budget:12000

},





manali: {


title:"Manali Trip Plan",

video:"videos/manali.mp4",

places:[
"Solang Valley",
"Hadimba Temple",
"Mall Road",
"Rohtang Pass",
"Vashisht Temple",
"Old Manali"
],


vegRestaurants:[
"Chopsticks Restaurant",
"Cafe 1947",
"Johnson's Cafe"
],


nonVegRestaurants:[
"Johnson's Bar and Restaurant",
"The Lazy Dog",
"People Cafe"
],


famousFood:[
"Rajma Chawal",
"Aloo Paratha",
"Veg Momos",
"Thukpa"
],


hotels:[
"The Himalayan Resort",
"Snow Valley Resort",
"Hotel Mountain Face"
],


budget:15000

},
himachal: {

title:"Himachal Pradesh Trip Plan",

video:"videos/himachal.mp4",

places:[
"Shimla",
"Manali",
"Dharamshala",
"Kasol",
"Kullu",
"Spiti Valley"
],

vegRestaurants:[
"Wake & Bake Cafe",
"Ashiana Restaurant",
"Cafe Simla Times"
],

nonVegRestaurants:[
"Johnson's Cafe",
"The Corner House",
"Cafe 1947"
],

famousFood:[
"Siddu",
"Madra",
"Babru",
"Tudkiya Bhat"
],

hotels:[
"Wildflower Hall",
"The Himalayan",
"Snow Valley Resort"
],

budget:18000

},



delhi: {

title:"Delhi Trip Plan",

video:"videos/delhi.mp4",

places:[
"India Gate",
"Red Fort",
"Qutub Minar",
"Lotus Temple",
"Akshardham Temple"
],

vegRestaurants:[
"Saravana Bhavan",
"Sita Ram Diwan Chand",
"Shree Rathnam"
],

nonVegRestaurants:[
"Karim's",
"Al Jawahar",
"Rajinder Da Dhaba"
],

famousFood:[
"Chole Bhature",
"Paratha",
"Butter Chicken"
],

hotels:[
"The Lalit Delhi",
"Hotel City Star",
"Bloomrooms"
],

budget:25000

},


mumbai: {

title:"Mumbai Trip Plan",

video:"videos/mumbai.mp4",

places:[
"Gateway of India",
"Marine Drive",
"Elephanta Caves",
"Juhu Beach",
"Siddhivinayak Temple"
],

vegRestaurants:[
"Shree Thaker Bhojonalay",
"Rajdhani Thali",
"Swati Snacks"
],

nonVegRestaurants:[
"Britannia & Co",
"Leopold Cafe",
"Trishna"
],

famousFood:[
"Vada Pav",
"Pav Bhaji",
"Bombay Sandwich"
],

hotels:[
"Taj Mahal Palace",
"Hotel Marine Plaza",
"Trident Nariman Point"
],

budget:30000

},


bangalore: {

title:"Bangalore Trip Plan",

video:"videos/bangalore.city.mp4",

places:[
"Lalbagh Botanical Garden",
"Bangalore Palace",
"Cubbon Park",
"ISKCON Temple",
"UB City"
],

vegRestaurants:[
"MTR",
"Vidyarthi Bhavan",
"CTR"
],

nonVegRestaurants:[
"Nagarjuna Restaurant",
"Empire Restaurant",
"Shivaji Military Hotel"
],

famousFood:[
"Dosa",
"Filter Coffee",
"Bisi Bele Bath"
],

hotels:[
"The Oberoi Bangalore",
"ITC Gardenia",
"Hotel Ramanashree"
],

budget:28000

},


kolkata: {

title:"Kolkata Trip Plan",

video:"videos/kolkata.mp4",

places:[
"Victoria Memorial",
"Howrah Bridge",
"Indian Museum",
"Belur Math",
"Park Street"
],

vegRestaurants:[
"Kasturi Restaurant",
"Shree Krishna Sweets",
"Balwant Singh Dhaba"
],

nonVegRestaurants:[
"6 Ballygunge Place",
"Peter Cat",
"Arsalan"
],

famousFood:[
"Rosogolla",
"Kathi Roll",
"Mishti Doi"
],

hotels:[
"The Oberoi Grand",
"ITC Royal Bengal",
"Hotel Park"
],

budget:22000

},


chennai: {

title:"Chennai Trip Plan",

video:"videos/chennai.city.mp4",

places:[
"Marina Beach",
"Kapaleeshwarar Temple",
"Fort St George",
"Mahabalipuram",
"Santhome Church"
],

vegRestaurants:[
"Sangeetha Veg Restaurant",
"Murugan Idli Shop",
"Hotel Saravana Bhavan"
],

nonVegRestaurants:[
"Anjappar",
"Junior Kuppanna",
"Thalappakatti"
],

famousFood:[
"Idli",
"Dosa",
"Filter Coffee"
],

hotels:[
"ITC Grand Chola",
"Taj Coromandel",
"Hyatt Regency"
],

budget:25000

},


hyderabad: {

title:"Hyderabad Trip Plan",

video:"videos/hyderabad.city.mp4",

places:[
"Charminar",
"Golconda Fort",
"Hussain Sagar Lake",
"Ramoji Film City",
"Salar Jung Museum"
],

vegRestaurants:[
"Chutneys",
"Udupi Restaurant",
"Govind's"
],

nonVegRestaurants:[
"Paradise Biryani",
"Bawarchi",
"Shadab"
],

famousFood:[
"Hyderabadi Biryani",
"Haleem",
"Kebabs"
],

hotels:[
"Taj Falaknuma Palace",
"Novotel Hyderabad",
"Trident Hyderabad"
],

budget:26000

},


pune: {

title:"Pune Trip Plan",

video:"videos/pune.city.mp4",

places:[
"Shaniwar Wada",
"Aga Khan Palace",
"Sinhagad Fort",
"Osho Garden",
"Dagdusheth Temple"
],

vegRestaurants:[
"Vaishali",
"Vohuman Cafe",
"Shabree"
],

nonVegRestaurants:[
"Blue Nile",
"George Restaurant",
"SP's Biryani"
],

famousFood:[
"Misal Pav",
"Bhakri",
"Puran Poli"
],

hotels:[
"Conrad Pune",
"JW Marriott Pune",
"Hyatt Pune"
],

budget:24000

},


udaipur: {

title:"Udaipur Trip Plan",

video:"videos/udaipur.mp4",

places:[
"City Palace",
"Lake Pichola",
"Jag Mandir",
"Saheliyon Ki Bari",
"Sajjangarh Palace"
],

vegRestaurants:[
"Neelam Restaurant",
"Natraj Dining Hall",
"Millets of Mewar"
],

nonVegRestaurants:[
"Upre Restaurant",
"1559 AD",
"Ambrai"
],

famousFood:[
"Dal Baati Churma",
"Gatte Ki Sabzi",
"Kachori"
],

hotels:[
"The Leela Palace",
"Taj Lake Palace",
"Jagat Niwas Palace"
],

budget:40000

},


jaisalmer: {

title:"Jaisalmer Trip Plan",

video:"videos/jaisalmer.mp4",

places:[
"Jaisalmer Fort",
"Sam Sand Dunes",
"Patwon Ki Haveli",
"Gadisar Lake",
"Kuldhara Village"
],

vegRestaurants:[
"The Trio",
"Pleasant Haveli Restaurant",
"Wyra Rooftop"
],

nonVegRestaurants:[
"Desert Boy's Dhani",
"KB Cafe",
"Free Tibet"
],

famousFood:[
"Dal Baati",
"Ker Sangri",
"Jaisalmeri Chana"
],

hotels:[
"Suryagarh Palace",
"Desert Tulip",
"Hotel Fifu"
],

budget:35000

},


jodhpur: {

title:"Jodhpur Trip Plan",

video:"videos/jodhpur.mp4",

places:[
"Mehrangarh Fort",
"Jaswant Thada",
"Umaid Bhawan Palace",
"Clock Tower",
"Mandore Garden"
],

vegRestaurants:[
"Gypsy Restaurant",
"Janta Sweet Home",
"Omlette Shop"
],

nonVegRestaurants:[
"Jhankar Choti Haveli",
"On The Rocks",
"Chokelao Mahal"
],

famousFood:[
"Mirchi Bada",
"Makhaniya Lassi",
"Dal Baati"
],

hotels:[
"Umaid Bhawan Palace",
"RAAS Jodhpur",
"Pal Haveli"
],

budget:35000

},
agra: {

title:"Agra Trip Plan",

video:"videos/agra.hist.mp4",

places:[
"Taj Mahal",
"Agra Fort",
"Mehtab Bagh",
"Fatehpur Sikri",
"Akbar's Tomb"
],

vegRestaurants:[
"Pinch of Spice",
"Dasaprakash",
"Joney's Place"
],

nonVegRestaurants:[
"Esphahan",
"Shankara Vegis Restaurant",
"Chicken Point"
],

famousFood:[
"Petha",
"Bedai Kachori",
"Mughlai Food"
],

hotels:[
"The Oberoi Amarvilas",
"ITC Mughal",
"Hotel Taj Resorts"
],

budget:30000

},


varanasi: {

title:"Varanasi Trip Plan",

video:"videos/varanasi.mp4",

places:[
"Kashi Vishwanath Temple",
"Dashashwamedh Ghat",
"Sarnath",
"Assi Ghat",
"Ramnagar Fort"
],

vegRestaurants:[
"Keshari Restaurant",
"Baati Chokha Restaurant",
"Shree Shivay Thali"
],

nonVegRestaurants:[
"Brown Bread Bakery",
"Open Hand Cafe",
"El Parador"
],

famousFood:[
"Kachori Sabzi",
"Banarasi Paan",
"Malaiyo"
],

hotels:[
"BrijRama Palace",
"Hotel Ganges View",
"Ramada Plaza"
],

budget:25000

},


rishikesh: {

title:"Rishikesh Trip Plan",

video:"videos/rishikesh.mp4",

places:[
"Lakshman Jhula",
"Ram Jhula",
"River Rafting",
"Neer Garh Waterfall",
"Triveni Ghat"
],

vegRestaurants:[
"Little Buddha Cafe",
"Chotiwala Restaurant",
"Pure Soul Cafe"
],

nonVegRestaurants:[
"Freedom Cafe",
"German Bakery",
"60's Cafe"
],

famousFood:[
"Chole Bhature",
"Aloo Puri",
"Local Sweets"
],

hotels:[
"Ananda Resort",
"Hotel Ganga Kinare",
"Aloha On The Ganges"
],

budget:30000

},


mussoorie: {

title:"Mussoorie Trip Plan",

video:"videos/mussoorie.mp4",

places:[
"Kempty Falls",
"Mall Road",
"Gun Hill",
"Lal Tibba",
"Company Garden"
],

vegRestaurants:[
"Chick Chocolate",
"Lovely Omelette Centre",
"Urban Turban"
],

nonVegRestaurants:[
"Kalsang Restaurant",
"The Tavern",
"Little Llama Cafe"
],

famousFood:[
"Momos",
"Maggi",
"Garhwali Food"
],

hotels:[
"JW Marriott Mussoorie",
"Welcomhotel The Savoy",
"Hotel Sun N Star"
],

budget:35000

},


shimla: {

title:"Shimla Trip Plan",

video:"videos/shimla.mp4",

places:[
"The Ridge",
"Jakhoo Temple",
"Mall Road",
"Christ Church",
"Kufri"
],

vegRestaurants:[
"Sita Ram And Sons",
"Wake And Bake Cafe",
"Krishna Bakers"
],

nonVegRestaurants:[
"Cafe Sol",
"Goofa Ashiana",
"Eighteen71 Cookhouse"
],

famousFood:[
"Siddu",
"Chana Madra",
"Tibetan Momos"
],

hotels:[
"The Oberoi Cecil",
"Wildflower Hall",
"Radisson Shimla"
],

budget:40000

},


dharamshala: {

title:"Dharamshala Trip Plan",

video:"videos/dharamshala.mp4",

places:[
"McLeod Ganj",
"Triund Trek",
"Dalai Lama Temple",
"Bhagsu Waterfall",
"Tea Gardens"
],

vegRestaurants:[
"Tibet Kitchen",
"Illiterati Cafe",
"Jimmy's Italian Kitchen"
],

nonVegRestaurants:[
"Common Ground Cafe",
"Nick's Italian Kitchen",
"Carpe Diem"
],

famousFood:[
"Thukpa",
"Momos",
"Tibetan Cuisine"
],

hotels:[
"Fortune Park Moksha",
"Hyatt Dharamshala",
"Hotel Inclover"
],

budget:30000

},


ooty: {

title:"Ooty Trip Plan",

video:"videos/ooty.mp4",

places:[
"Ooty Lake",
"Botanical Garden",
"Doddabetta Peak",
"Tea Museum",
"Rose Garden"
],

vegRestaurants:[
"Adyar Ananda Bhavan",
"Nahar Restaurant",
"Shinkow's"
],

nonVegRestaurants:[
"Hyderabad Biryani House",
"Ascot Multi Cuisine",
"Sidewalk Cafe"
],

famousFood:[
"Homemade Chocolates",
"Tea",
"South Indian Food"
],

hotels:[
"Sterling Ooty",
"Gem Park Ooty",
"Savoy Ooty"
],

budget: 30000

},


munnar: {

title:"Munnar Trip Plan",

video:"videos/munnar.mp4",

places:[
"Tea Gardens",
"Eravikulam National Park",
"Mattupetty Dam",
"Top Station",
"Echo Point"
],

vegRestaurants:[
"Saravana Bhavan",
"Rasa Gurukulam",
"Hotel Gurubhavan"
],

nonVegRestaurants:[
"SN Restaurant",
"Rapsy Restaurant",
"Alibaba & 41 Dishes"
],

famousFood:[
"Kerala Sadya",
"Appam",
"Tea"
],

hotels:[
"Tea County Resort",
"Blanket Hotel",
"Fragrant Nature"
],

budget:35000

},


kerala: {

title:"Kerala Trip Plan",

video:"videos/kerala.mp4",

places:[
"Alleppey Backwaters",
"Kovalam Beach",
"Wayanad",
"Thekkady",
"Varkala Beach"
],

vegRestaurants:[
"Sree Krishna Inn",
"Hotel Aryaas",
"Vasanta Bhavan"
],

nonVegRestaurants:[
"Paragon Restaurant",
"Rahmaniya",
"Kayees"
],

famousFood:[
"Appam",
"Kerala Sadya",
"Fish Curry"
],

hotels:[
"Kumarakom Lake Resort",
"Taj Green Cove",
"Marari Beach Resort"
],

budget:50000

},


andaman: {

title:"Andaman Trip Plan",

video:"videos/andaman.mp4",

places:[
"Radhanagar Beach",
"Cellular Jail",
"Ross Island",
"North Bay Island",
"Elephant Beach"
],

vegRestaurants:[
"Annapurna Restaurant",
"New Lighthouse Restaurant",
"Feel Good Restaurant"
],

nonVegRestaurants:[
"SeaShell Restaurant",
"Anju Coco Resto",
"Full Moon Cafe"
],

famousFood:[
"Seafood",
"Coconut Dishes",
"South Indian Food"
],

hotels:[
"Taj Exotica Resort",
"SeaShell Resort",
"Symphony Palms"
],

budget:70000

},
jaipur: {

title:"Jaipur Trip Plan",

video:"videos/jaipur.mp4",

places:[
"Amber Fort",
"City Palace",
"Hawa Mahal",
"Jantar Mantar",
"Nahargarh Fort"
],

vegRestaurants:[
"LMB Restaurant",
"Rawat Mishthan Bhandar",
"Chokhi Dhani"
],

nonVegRestaurants:[
"Handi Restaurant",
"Spice Court",
"1135 AD"
],

famousFood:[
"Dal Baati Churma",
"Pyaz Kachori",
"Ghevar"
],

hotels:[
"Rambagh Palace",
"ITC Rajputana",
"Alsisar Haveli"
],

budget:40000

},


ajmer: {

title:"Ajmer Trip Plan",

video:"videos/ajmer.mp4",

places:[
"Ajmer Sharif Dargah",
"Pushkar Lake",
"Adhai Din Ka Jhopra",
"Taragarh Fort",
"Anasagar Lake"
],

vegRestaurants:[
"Rasoi Restaurant",
"Ambrosia Restaurant",
"Shree Balaji Bhojanalaya"
],

nonVegRestaurants:[
"Paradise Restaurant",
"Sky Grill",
"New Jannat Restaurant"
],

famousFood:[
"Kachori",
"Malpua",
"Rajasthani Thali"
],

hotels:[
"Hotel Ajmer Inn",
"The Royal Melange",
"Merwara Estate"
],

budget:25000

},


pushkar: {

title:"Pushkar Trip Plan",

video:"videos/pushkar.mp4",

places:[
"Brahma Temple",
"Pushkar Lake",
"Savitri Temple",
"Pushkar Camel Fair Ground",
"Rangji Temple"
],

vegRestaurants:[
"Out Of The Blue",
"Sixth Sense Restaurant",
"Funky Monkey Cafe"
],

nonVegRestaurants:[
"Base Camp Cafe",
"The Laughing Buddha",
"Rainbow Restaurant"
],

famousFood:[
"Malpua",
"Kachori",
"Rajasthani Thali"
],

hotels:[
"Ananta Resort",
"Pushkar Palace",
"Hotel Brahma Horizon"
],

budget:30000

},


mountAbu: {

title:"Mount Abu Trip Plan",

video:"videos/mountabu.mp4",

places:[
"Dilwara Temples",
"Nakki Lake",
"Guru Shikhar",
"Sunset Point",
"Toad Rock"
],

vegRestaurants:[
"Jodhpur Bhojanalaya",
"Arbuda Restaurant",
"Shri Krishna Restaurant"
],

nonVegRestaurants:[
"Mulberry Restaurant",
"Zest Cafe",
"Chacha Inn"
],

famousFood:[
"Rajasthani Thali",
"Rabri",
"Kachori"
],

hotels:[
"Hotel Hillock",
"Sterling Mount Abu",
"Udai Resort"
],

budget:30000

},


bikaner: {

title:"Bikaner Trip Plan",

video:"videos/bikaner.mp4",

places:[
"Junagarh Fort",
"Karni Mata Temple",
"Lalgarh Palace",
"Gajner Palace",
"Rampuria Haveli"
],

vegRestaurants:[
"Chhotu Motu Joshi Sweet Shop",
"Bhikharam Chandmal",
"Gallops Restaurant"
],

nonVegRestaurants:[
"Hang Around Zone",
"Skybird Restaurant",
"Hotel Harasar Haveli"
],

famousFood:[
"Bhujia",
"Rasgulla",
"Kachori"
],

hotels:[
"Laxmi Niwas Palace",
"Narendra Bhawan",
"Hotel Raj Villas"
],

budget:30000

},


haridwar: {

title:"Haridwar Trip Plan",

video:"videos/haridwar.sp.mp4",

places:[
"Har Ki Pauri",
"Ganga Aarti",
"Mansa Devi Temple",
"Chandi Devi Temple",
"Rajaji National Park"
],

vegRestaurants:[
"Chotiwala Restaurant",
"Hoshiyar Puri",
"Mathura Walo Ki Pracheen Dukaan"
],

nonVegRestaurants:[
"Hotel Alaknanda",
"Atithi Restaurant",
"Various Local Cafes"
],

famousFood:[
"Aloo Puri",
"Kachori",
"Lassi"
],

hotels:[
"Ganga Lahari",
"Aloha On The Ganges",
"Hotel Ganga Kinare"
],

budget:25000

},


nainital: {

title:"Nainital Trip Plan",

video:"videos/nainital.mp4",

places:[
"Naini Lake",
"Naina Devi Temple",
"Snow View Point",
"Tiffin Top",
"Eco Cave Garden"
],

vegRestaurants:[
"Sakley's Restaurant",
"Machan Restaurant",
"Shree Balaji Restaurant"
],

nonVegRestaurants:[
"Zooby's Kitchen",
"Chandni Chowk Restaurant",
"Embassy Restaurant"
],

famousFood:[
"Bal Mithai",
"Momos",
"Rasmalai"
],

hotels:[
"The Naini Retreat",
"Shervani Hilltop",
"Sterling Nainital"
],

budget:35000

},
auli: {

title:"Auli Trip Plan",

video:"videos/auli.mp4",

places:[
"Auli Ski Resort",
"Gurso Bugyal",
"Trishul Peak",
"Chenab Lake",
"Joshimath"
],

vegRestaurants:[
"Auli D's Food Plaza",
"Local Garhwali Restaurants",
"Mountain Cafe"
],

nonVegRestaurants:[
"Chopta Valley Restaurant",
"Joshimath Food Corner",
"Himalayan Cafe"
],

famousFood:[
"Garhwali Thali",
"Momos",
"Maggi"
],

hotels:[
"Cliff Top Club",
"Auli Resort",
"Blue Poppy Resort"
],

budget:40000

},


kasol: {

title:"Kasol Trip Plan",

video:"videos/kasol.mp4",

places:[
"Parvati Valley",
"Manikaran Sahib",
"Tosh Village",
"Malana Village",
"Chalal Village"
],

vegRestaurants:[
"Moon Dance Cafe",
"Evergreen Cafe",
"Jim Morrison Cafe"
],

nonVegRestaurants:[
"Turquiose Kasol",
"Stone Garden Cafe",
"River View Cafe"
],

famousFood:[
"Himachali Food",
"Momos",
"Israeli Cuisine"
],

hotels:[
"The Himalayan Village",
"Parvati Woods Resort",
"Kasol Heights"
],

budget:30000

},


kasauli: {

title:"Kasauli Trip Plan",

video:"videos/kasauli.mp4",

places:[
"Monkey Point",
"Gilbert Trail",
"Christ Church",
"Kasauli Brewery",
"Sunset Point"
],

vegRestaurants:[
"Narinder Sweet House",
"Shiv Bhojanalaya",
"Rudra Cafe"
],

nonVegRestaurants:[
"Hangout Cafe",
"Old Town Cafe",
"Punjabi Rasoi"
],

famousFood:[
"Chole Bhature",
"Maggi",
"Himachali Cuisine"
],

hotels:[
"The Fern Surya Resort",
"Kasauli Regency",
"Baikunth Resort"
],

budget:30000

},


lehladakh: {

title:"Leh Ladakh Trip Plan",

video:"videos/ladakh.mp4",

places:[
"Pangong Lake",
"Nubra Valley",
"Magnetic Hill",
"Shanti Stupa",
"Khardung La Pass"
],

vegRestaurants:[
"Gesmo Restaurant",
"Lamayuru Restaurant",
"Lamayuru Cafe"
],

nonVegRestaurants:[
"The Tibetan Kitchen",
"Bon Appetit",
"Yama Adventures Cafe"
],

famousFood:[
"Thukpa",
"Momos",
"Butter Tea"
],

hotels:[
"The Grand Dragon Ladakh",
"Hotel Ladakh Palace",
"Chamba Camp"
],

budget:70000

},


spitivalley: {

title:"Spiti Valley Trip Plan",

video:"videos/spitivalley.mp4",

places:[
"Key Monastery",
"Chandratal Lake",
"Tabo Monastery",
"Kaza",
"Dhankar Monastery"
],

vegRestaurants:[
"Sol Cafe",
"The Himalayan Cafe",
"Kaza Local Restaurant"
],

nonVegRestaurants:[
"Dragon Restaurant",
"Taste Of Spiti",
"Hotel Deyzor Restaurant"
],

famousFood:[
"Thukpa",
"Momos",
"Siddu"
],

hotels:[
"Hotel Deyzor",
"Spiti Heritage Homestay",
"Sakya Abode"
],

budget:60000

},


dalhousie: {

title:"Dalhousie Trip Plan",

video:"videos/dalhousie.mp4",

places:[
"Khajjiar",
"St John Church",
"Dainkund Peak",
"Subhash Baoli",
"Kalatope Wildlife Sanctuary"
],

vegRestaurants:[
"Mongas Cafe",
"Kwality Restaurant",
"Old Sher-e-Punjab"
],

nonVegRestaurants:[
"Bon Appetit Restaurant",
"Friends Sher-e-Punjab",
"Hotel Himdhara"
],

famousFood:[
"Chamba Dham",
"Momos",
"Punjabi Food"
],

hotels:[
"Grand View Hotel",
"Snow Valley Resort",
"Dalhousie Heights"
],

budget:35000

},


amritsar: {

title:"Amritsar Trip Plan",

video:"videos/amritsar.sp.mp4",

places:[
"Golden Temple",
"Jallianwala Bagh",
"Wagah Border",
"Partition Museum",
"Durgiana Temple"
],

vegRestaurants:[
"Kesar Da Dhaba",
"Bharawan Da Dhaba",
"Brothers Dhaba"
],

nonVegRestaurants:[
"Beera Chicken House",
"Surjit Food Plaza",
"Makhan Fish"
],

famousFood:[
"Amritsari Kulcha",
"Butter Chicken",
"Lassi"
],

hotels:[
"Ramada Amritsar",
"Taj Swarna",
"Hyatt Regency"
],

budget:30000

},


chandigarh: {

title:"Chandigarh Trip Plan",

video:"videos/chandigarh.mp4",

places:[
"Rock Garden",
"Sukhna Lake",
"Rose Garden",
"Capitol Complex",
"Terraced Garden"
],

vegRestaurants:[
"Pal Dhaba",
"Indian Coffee House",
"Sindhi Sweets"
],

nonVegRestaurants:[
"Barbeque Nation",
"Swagath Restaurant",
"Black Lotus"
],

famousFood:[
"Chole Bhature",
"Butter Chicken",
"Lassi"
],

hotels:[
"JW Marriott Chandigarh",
"Hyatt Regency",
"The Lalit Chandigarh"
],

budget:30000

},
lucknow: {

title:"Lucknow Trip Plan",

video:"videos/lucknow.mp4",

places:[
"British Residency",
"Bara Imambara",
"Chota Imambara",
"Rumi Darwaza",
"Ambedkar Memorial Park"
],

vegRestaurants:[
"Shree Rajbhog",
"Netram Ajay Kumar",
"Moti Mahal Restaurant"
],

nonVegRestaurants:[
"Tunday Kababi",
"Dastarkhwan",
"Idrees Biryani"
],

famousFood:[
"Galouti Kebab",
"Lucknowi Biryani",
"Basket Chaat"
],

hotels:[
"Taj Mahal Lucknow",
"Renaissance Lucknow",
"Clarks Avadh"
],

budget:30000

},


mathura: {

title:"Mathura Trip Plan",

video:"videos/mathura.mp4",

places:[
"Shri Krishna Janmabhoomi Temple",
"Vishram Ghat",
"Dwarkadhish Temple",
"Kusum Sarovar",
"Kans Qila"
],

vegRestaurants:[
"Shankar Mithai Wala",
"Agarwal Restaurant",
"Brijwasi Mithai Wala"
],

nonVegRestaurants:[
"Local Mughlai Restaurants",
"Highway Food Point",
"City Food Corner"
],

famousFood:[
"Pedha",
"Kachori",
"Lassi"
],

hotels:[
"Hotel Wingston",
"Regenta Resort",
"Centrum Hotel"
],

budget:20000

},


vrindavan: {

title:"Vrindavan Trip Plan",

video:"videos/vrindavan.mp4",

places:[
"Banke Bihari Temple",
"Prem Mandir",
"ISKCON Temple",
"Radha Raman Temple",
"Yamuna Ghat"
],

vegRestaurants:[
"MVT Restaurant",
"11 Flowers Rooftop Cafe",
"Govinda Restaurant"
],

nonVegRestaurants:[
"Available nearby Mathura restaurants",
"Local Food Courts",
"Highway Restaurants"
],

famousFood:[
"Makhan Mishri",
"Pedha",
"Chaat"
],

hotels:[
"Nidhivan Dham",
"Ananda Krishna Van",
"Brijwasi Royal"
],

budget:20000

},


pondicherry: {

title:"Pondicherry Trip Plan",

video:"videos/pondicherry.mp4",

places:[
"Promenade Beach",
"Auroville",
"French Quarter",
"Paradise Beach",
"Rock Beach"
],

vegRestaurants:[
"Surguru Restaurant",
"Hotel Saravana Bhavan",
"Appachi Chettinad"
],

nonVegRestaurants:[
"Le Club",
"Villa Shanti",
"Sea Gulls Restaurant"
],

famousFood:[
"Dosa",
"French Bakery Items",
"Seafood"
],

hotels:[
"Palais De Mahe",
"Le Pondy",
"Accord Puducherry"
],

budget:40000

},


coorg: {

title:"Coorg Trip Plan",

video:"videos/coorg.mp4",

places:[
"Abbey Falls",
"Raja's Seat",
"Dubare Elephant Camp",
"Namdroling Monastery",
"Coffee Plantations"
],

vegRestaurants:[
"Raintree Restaurant",
"Udipi The Veg",
"East End Hotel"
],

nonVegRestaurants:[
"Coorg Cuisine",
"Silver Oaks",
"Local Kodava Restaurants"
],

famousFood:[
"Pandi Curry",
"Coffee",
"Kadambuttu"
],

hotels:[
"The Tamara Coorg",
"Club Mahindra Madikeri",
"Coorg Cliffs Resort"
],

budget:45000

},
wayanad: {

title:"Wayanad Trip Plan",

video:"videos/wayanad.mp4",

places:[
"Edakkal Caves",
"Soochipara Waterfalls",
"Banasura Sagar Dam",
"Chembra Peak",
"Wayanad Wildlife Sanctuary"
],

vegRestaurants:[
"Wilton Restaurant",
"Jubilee Restaurant",
"1980's A Nostalgic Restaurant"
],

nonVegRestaurants:[
"Udupi Restaurant",
"The Coffee Grove Restaurant",
"ClayHut Village Restaurant"
],

famousFood:[
"Malabar Parotta",
"Appam",
"Kerala Sadya"
],

hotels:[
"Vythiri Resort",
"Petal Resorts",
"Blue Ginger Resort"
],

budget:35000

},


mahabaleshwar: {

title:"Mahabaleshwar Trip Plan",

video:"videos/mahabaleshwar.mp4",

places:[
"Venna Lake",
"Pratapgad Fort",
"Elephant's Head Point",
"Mapro Garden",
"Arthur's Seat"
],

vegRestaurants:[
"Bagicha Corner",
"Shivsagar Restaurant",
"Hirkani Garden"
],

nonVegRestaurants:[
"Hotel Poonam",
"Farmhouse Bistro",
"The Grapevine Restaurant"
],

famousFood:[
"Strawberries",
"Corn",
"Chikki"
],

hotels:[
"Brightland Resort",
"Le Meridien Mahabaleshwar",
"Ramsukh Resorts"
],

budget:30000

},


lonavala: {

title:"Lonavala Trip Plan",

video:"videos/lonavala.mp4",

places:[
"Bhushi Dam",
"Rajmachi Fort",
"Karla Caves",
"Lohagad Fort",
"Tiger Point"
],

vegRestaurants:[
"Golden Wada Pav",
"Rama Krishna Restaurant",
"German Bakery"
],

nonVegRestaurants:[
"Kinara Village Dhaba",
"Hotel Chandralok",
"Cooper's Fudge"
],

famousFood:[
"Chikki",
"Vada Pav",
"Misal Pav"
],

hotels:[
"Della Resorts",
"Fariyas Resort",
"Rhythm Lonavala"
],

budget:30000

},


khandala: {

title:"Khandala Trip Plan",

video:"videos/khandala.mp4",

places:[
"Duke's Nose",
"Kune Falls",
"Amrutanjan Point",
"Rajmachi Point",
"Sunset Point"
],

vegRestaurants:[
"El Taj Restaurant",
"Pure Veg Delight",
"Rama Krishna"
],

nonVegRestaurants:[
"High Point Restaurant",
"Picaddle Resort Restaurant",
"Village Restaurant"
],

famousFood:[
"Misal Pav",
"Bhakri",
"Local Snacks"
],

hotels:[
"The Dukes Retreat",
"Picaddle Resort",
"Velvet County"
],

budget:25000

},


nashik: {

title:"Nashik Trip Plan",

video:"videos/nashik.mp4",

places:[
"Sula Vineyards",
"Trimbakeshwar Temple",
"Panchavati",
"Pandavleni Caves",
"Godavari Ghat"
],

vegRestaurants:[
"Sadhana Restaurant",
"Shamsundar Misal",
"Udupi Tadka"
],

nonVegRestaurants:[
"Barbeque Ville",
"Curry Leaves",
"Hotel Rajmahal"
],

famousFood:[
"Misal Pav",
"Sabudana Vada",
"Chivda"
],

hotels:[
"Express Inn",
"The Gateway Hotel",
"Courtyard Nashik"
],

budget:30000

},


ahmedabad: {

title:"Ahmedabad Trip Plan",

video:"videos/ahmedabad.city.mp4",

places:[
"Sabarmati Ashram",
"Kankaria Lake",
"Adalaj Stepwell",
"Science City",
"Sidi Saiyyed Mosque"
],

vegRestaurants:[
"Swati Snacks",
"Vishalla",
"Agashiye"
],

nonVegRestaurants:[
"Jassi De Parathe",
"Mirch Masala",
"Moti Mahal"
],

famousFood:[
"Fafda Jalebi",
"Gujarati Thali",
"Khandvi"
],

hotels:[
"Hyatt Regency Ahmedabad",
"ITC Narmada",
"Novotel Ahmedabad"
],

budget:30000

},
surat: {

title:"Surat Trip Plan",

video:"videos/surat.mp4",

places:[
"Dutch Garden",
"Dumas Beach",
"Science Centre",
"Sarthana Nature Park",
"Gopi Talav"
],

vegRestaurants:[
"Jalaram Locho",
"Leonardo Italian Restaurant",
"Spice Villa"
],

nonVegRestaurants:[
"Livara Restaurant",
"Blue Coriander",
"Madras Restaurant"
],

famousFood:[
"Locho",
"Surti Ghari",
"Undhiyu"
],

hotels:[
"The Gateway Hotel",
"Courtyard Surat",
"Orange Megastructure"
],

budget:25000

},


vadodara: {

title:"Vadodara Trip Plan",

video:"videos/vadodara.mp4",

places:[
"Laxmi Vilas Palace",
"Sayaji Garden",
"Baroda Museum",
"EME Temple",
"Kirti Mandir"
],

vegRestaurants:[
"Mandap Restaurant",
"22nd Parallel",
"Shree Kathiyawadi"
],

nonVegRestaurants:[
"Barbeque Nation",
"Little Italy",
"Neopolitan Pizza"
],

famousFood:[
"Gujarati Thali",
"Sev Usal",
"Fafda"
],

hotels:[
"Welcomhotel Vadodara",
"Sayaji Hotel",
"Grand Mercure Vadodara"
],

budget:25000

},


indore: {

title:"Indore Trip Plan",

video:"videos/indore.mp4",

places:[
"Rajwada Palace",
"Sarafa Bazaar",
"Patalpani Waterfall",
"Lal Bagh Palace",
"Annapurna Temple"
],

vegRestaurants:[
"56 Dukan",
"Vijay Chaat House",
"Joshi Dahi Bada House"
],

nonVegRestaurants:[
"Johny Hot Dog",
"Shreemaya Celebration",
"Apna Sweets"
],

famousFood:[
"Poha Jalebi",
"Bhutte Ka Kees",
"Indori Namkeen"
],

hotels:[
"Radisson Blu Indore",
"Sayaji Indore",
"Wow Hotel"
],

budget:25000

},


bhopal: {

title:"Bhopal Trip Plan",

video:"videos/bhopal.mp4",

places:[
"Upper Lake",
"Sanchi Stupa",
"Van Vihar National Park",
"Taj-ul-Masajid",
"Bhimbetka Caves"
],

vegRestaurants:[
"Manohar Dairy",
"Sharma Bhojnalaya",
"Rajhans Restaurant"
],

nonVegRestaurants:[
"Za-Aiqa",
"Filfora Restaurant",
"Jehan Numa Retreat"
],

famousFood:[
"Bhopali Paan",
"Poha",
"Kebabs"
],

hotels:[
"Jehan Numa Palace",
"Courtyard Bhopal",
"Noor Us Sabah Palace"
],

budget:30000

},


khajuraho: {

title:"Khajuraho Trip Plan",

video:"videos/khajuraho.mp4",

places:[
"Khajuraho Temples",
"Western Group Temples",
"Raneh Falls",
"Archaeological Museum",
"Javari Temple"
],

vegRestaurants:[
"Raja Cafe",
"Madras Coffee House",
"Guru Kripa Restaurant"
],

nonVegRestaurants:[
"Paradise Restaurant",
"Golden Cafe",
"Temple View Restaurant"
],

famousFood:[
"Bundelkhandi Food",
"Samosa",
"Local Sweets"
],

hotels:[
"The Lalit Temple View",
"Radisson Khajuraho",
"Hotel Isabel Palace"
],

budget:25000

},


sanchi: {

title:"Sanchi Trip Plan",

video:"videos/sanchi.mp4",

places:[
"Sanchi Stupa",
"Sanchi Museum",
"Udayagiri Caves",
"Gupta Temple",
"Great Bowl"
],

vegRestaurants:[
"Local Bhojanalaya",
"MP Tourism Restaurant",
"Highway Restaurants"
],

nonVegRestaurants:[
"Local Restaurants",
"Hotel Restaurants",
"Nearby Bhopal Restaurants"
],

famousFood:[
"Dal Bafla",
"Poha",
"Jalebi"
],

hotels:[
"MPT Gateway Retreat",
"Hotel Sanchi",
"Courtyard Bhopal"
],

budget:20000

},


darjeeling: {

title:"Darjeeling Trip Plan",

video:"videos/darjeeling.mp4",

places:[
"Tiger Hill",
"Darjeeling Himalayan Railway",
"Tea Gardens",
"Batasia Loop",
"Peace Pagoda"
],

vegRestaurants:[
"Kunga Restaurant",
"Sonam's Kitchen",
"Glenary's"
],

nonVegRestaurants:[
"Kunga Restaurant",
"Tom & Jerry Restaurant",
"Gatty's Cafe"
],

famousFood:[
"Momos",
"Thukpa",
"Darjeeling Tea"
],

hotels:[
"Mayfair Darjeeling",
"Windamere Hotel",
"Summit Swiss Heritage"
],

budget:40000

},


gangtok: {

title:"Gangtok Trip Plan",

video:"videos/gangtok.mp4",

places:[
"MG Marg",
"Tsomgo Lake",
"Rumtek Monastery",
"Nathula Pass",
"Hanuman Tok"
],

vegRestaurants:[
"Taste of Tibet",
"Pure Veg Restaurant",
"Baker's Cafe"
],

nonVegRestaurants:[
"9ine Native Cuisine",
"Solpon Restaurant",
"Mu Kimchi"
],

famousFood:[
"Momos",
"Thukpa",
"Chhurpi"
],

hotels:[
"Mayfair Gangtok",
"Nor-Khill Resort",
"Royal Plaza"
],

budget:45000

},
shillong: {

title:"Shillong Trip Plan",

video:"videos/shillong.mp4",

places:[
"Umiam Lake",
"Elephant Falls",
"Shillong Peak",
"Police Bazaar",
"Don Bosco Museum"
],

vegRestaurants:[
"City Hut Dhaba",
"Jiva Veg Restaurant",
"Madras Cafe"
],

nonVegRestaurants:[
"Jadoh Restaurant",
"Trattoria Restaurant",
"ML 05 Cafe"
],

famousFood:[
"Jadoh",
"Momos",
"Khasi Cuisine"
],

hotels:[
"Hotel Polo Towers",
"Ri Kynjai Resort",
"Centre Point Hotel"
],

budget:35000

},


meghalaya: {

title:"Meghalaya Trip Plan",

video:"videos/meghalaya.mp4",

places:[
"Living Root Bridges",
"Cherrapunji",
"Mawlynnong Village",
"Mawsmai Cave",
"Dawki River"
],

vegRestaurants:[
"Jiva Veg Restaurant",
"Cafe Shillong",
"Local Khasi Restaurants"
],

nonVegRestaurants:[
"City Hut Dhaba",
"Jadoh Restaurant",
"Local Food Stalls"
],

famousFood:[
"Jadoh",
"Momom",
"Smoked Meat"
],

hotels:[
"Polo Orchid Resort",
"Cherrapunji Holiday Resort",
"Riwar Resort"
],

budget:40000

},


kaziranga: {

title:"Kaziranga Trip Plan",

video:"videos/kaziranga.mp4",

places:[
"Kaziranga National Park",
"Elephant Safari",
"Jeep Safari",
"Orchid Park",
"Tea Gardens"
],

vegRestaurants:[
"Landmark Woods Restaurant",
"Local Assamese Restaurants",
"Wild Grass Restaurant"
],

nonVegRestaurants:[
"Wild Grass Restaurant",
"Bon Villa Retreat",
"Local Assamese Restaurants"
],

famousFood:[
"Assamese Thali",
"Masor Tenga",
"Pitha"
],

hotels:[
"Diphlu River Lodge",
"IORA Retreat",
"Infinity Resort Kaziranga"
],

budget:40000

},


puri: {

title:"Puri Trip Plan",

video:"videos/puri.mp4",

places:[
"Jagannath Temple",
"Puri Beach",
"Konark Sun Temple",
"Chilika Lake",
"Swargadwar Beach"
],

vegRestaurants:[
"Wildgrass Restaurant",
"Anandam Veg Restaurant",
"Dalma Restaurant"
],

nonVegRestaurants:[
"Wilderness Restaurant",
"Chakra Tirtha Restaurant",
"Seafood Restaurants"
],

famousFood:[
"Khaja",
"Dalma",
"Seafood"
],

hotels:[
"Mayfair Heritage",
"Sterling Puri",
"Hotel Holiday Resort"
],

budget:30000

},
ayodhya: {

title:"Ayodhya Trip Plan",

video:"videos/ayodhya.mp4",

places:[
"Ram Mandir",
"Hanuman Garhi",
"Kanak Bhawan",
"Saryu River Ghat",
"Ram Ki Paidi"
],

vegRestaurants:[
"Shree Kanak Restaurant",
"Bhog Restaurant",
"Ram Rasoi"
],

nonVegRestaurants:[
"Available in nearby city areas",
"Local Restaurants",
"Highway Restaurants"
],

famousFood:[
"Awadhi Sweets",
"Kachori",
"Lassi"
],

hotels:[
"Rama Residency",
"Hotel Ramprastha",
"Kohinoor Palace"
],

budget:25000

},


gwalior: {

title:"Gwalior Trip Plan",

video:"videos/gwalior.mp4",

places:[
"Gwalior Fort",
"Jai Vilas Palace",
"Tomb of Tansen",
"Sun Temple",
"Gopachal Parvat"
],

vegRestaurants:[
"Indian Coffee House",
"Kwality Restaurant",
"Volga Restaurant"
],

nonVegRestaurants:[
"Silver Saloon",
"Alfanzo Restaurant",
"Local Mughlai Restaurants"
],

famousFood:[
"Bedai",
"Kachori",
"Gajak"
],

hotels:[
"Usha Kiran Palace",
"Neemrana Deo Bagh",
"Clarks Inn Gwalior"
],

budget:30000

},


orchha: {

title:"Orchha Trip Plan",

video:"videos/orchha.mp4",

places:[
"Orchha Fort",
"Ram Raja Temple",
"Chaturbhuj Temple",
"Betwa River",
"Jahangir Mahal"
],

vegRestaurants:[
"Orchha Resort Restaurant",
"Betwa Retreat Restaurant",
"Local Bhojanalaya"
],

nonVegRestaurants:[
"Orchha Resort Restaurant",
"Local Restaurants",
"Highway Restaurants"
],

famousFood:[
"Bundelkhandi Food",
"Poha",
"Dal Bafla"
],

hotels:[
"Orchha Resort",
"Amar Mahal",
"Bundelkhand Riverside"
],

budget:25000

},


jabalpur: {

title:"Jabalpur Trip Plan",

video:"videos/jabalpur.mp4",

places:[
"Bhedaghat Marble Rocks",
"Dhuandhar Falls",
"Madan Mahal Fort",
"Balancing Rock",
"Chausath Yogini Temple"
],

vegRestaurants:[
"Indian Coffee House",
"Best Choice Restaurant",
"Clock Tower Restaurant"
],

nonVegRestaurants:[
"Hotel Arihant Palace",
"Royal Treat",
"Local Restaurants"
],

famousFood:[
"Poha",
"Jalebi",
"Dal Bafla"
],

hotels:[
"Vijan Mahal",
"Hotel Narmada Jacksons",
"Samdariya Hotel"
],

budget:28000

},


ujjain: {

title:"Ujjain Trip Plan",

video:"videos/ujjain.mp4",

places:[
"Mahakaleshwar Temple",
"Ram Ghat",
"Kal Bhairav Temple",
"Ved Shala",
"Harsiddhi Temple"
],

vegRestaurants:[
"Shree Ganga Restaurant",
"Modak Restaurant",
"Apna Sweets"
],

nonVegRestaurants:[
"Available nearby areas",
"Local Restaurants",
"City Food Points"
],

famousFood:[
"Poha",
"Jalebi",
"Malpua"
],

hotels:[
"Anjushree Hotel",
"Rudraksh Club",
"Hotel Mittal Avenue"
],

budget:25000

},


amarkantak: {

title:"Amarkantak Trip Plan",

video:"videos/amarkantak.mp4",

places:[
"Narmada Kund",
"Kapildhara Waterfall",
"Dudh Dhara Waterfall",
"Ancient Temples",
"Sonmuda"
],

vegRestaurants:[
"MPT Holiday Homes Restaurant",
"Local Bhojanalaya",
"Temple Food Stalls"
],

nonVegRestaurants:[
"Limited Availability",
"Local Restaurants",
"Nearby Hotels"
],

famousFood:[
"Local Tribal Food",
"Poha",
"Jalebi"
],

hotels:[
"MPT Holiday Homes",
"Hotel Narmada",
"Tourist Lodge"
],

budget:20000

},
rannofkutch: {

title:"Rann Of Kutch Trip Plan",

video:"videos/kutch.mp4",

places:[
"White Rann",
"Kalo Dungar",
"Mandvi Beach",
"Vijay Vilas Palace",
"Bhuj"
],

vegRestaurants:[
"Green Rock Restaurant",
"Kutchi King",
"Shyam Restaurant"
],

nonVegRestaurants:[
"Hotel Prince Restaurant",
"Local Kutchi Restaurants",
"Bhuj Food Court"
],

famousFood:[
"Kutchi Dabeli",
"Khichdi",
"Gujarati Thali"
],

hotels:[
"Rann Riders",
"Gateway To Rann Resort",
"Regenta Resort Bhuj"
],

budget:45000

},


diu: {

title:"Diu Trip Plan",

video:"videos/diu.mp4",

places:[
"Diu Fort",
"Nagoa Beach",
"Naida Caves",
"Ghoghla Beach",
"St Paul's Church"
],

vegRestaurants:[
"O'Coqueiro Restaurant",
"Apna Adda",
"Shri Ram Vijay"
],

nonVegRestaurants:[
"Apana Foodland",
"Fish Market Restaurants",
"Sea View Restaurant"
],

famousFood:[
"Seafood",
"Gujarati Thali",
"Portuguese Cuisine"
],

hotels:[
"Azzaro Resort",
"Radhika Beach Resort",
"Hotel Apaar"
],

budget:30000

},


daman: {

title:"Daman Trip Plan",

video:"videos/daman.mp4",

places:[
"Devka Beach",
"Jampore Beach",
"Daman Fort",
"St Jerome Fort",
"Church Of Bom Jesus"
],

vegRestaurants:[
"Veera Da Dhaba",
"Pepperzz Restaurant",
"Veg World"
],

nonVegRestaurants:[
"Veera Da Dhaba",
"Kathi Junction",
"Sea Food Restaurants"
],

famousFood:[
"Seafood",
"Gujarati Food",
"Portuguese Snacks"
],

hotels:[
"The Gold Beach Resort",
"Silver Sands Beach Resort",
"Hotel Miramar"
],

budget:30000

},


alappuzha: {

title:"Alappuzha Trip Plan",

video:"videos/alappuzha.mp4",

places:[
"Alleppey Backwaters",
"Houseboat Ride",
"Alappuzha Beach",
"Krishnapuram Palace",
"Marari Beach"
],

vegRestaurants:[
"Thaff Restaurant",
"Halais Restaurant",
"Indian Coffee House"
],

nonVegRestaurants:[
"Thaff Restaurant",
"Dreamers Cafe",
"Seashore Restaurant"
],

famousFood:[
"Kerala Sadya",
"Appam",
"Fish Curry"
],

hotels:[
"Lake Palace Resort",
"Punnamada Resort",
"Ramada Alleppey"
],

budget:50000

},


varkala: {

title:"Varkala Trip Plan",

video:"videos/varkala.mp4",

places:[
"Varkala Beach",
"Janardhana Temple",
"Varkala Cliff",
"Sivagiri Mutt",
"Kappil Beach"
],

vegRestaurants:[
"Abba Restaurant",
"Little Tibet",
"Coffee Temple"
],

nonVegRestaurants:[
"Darjeeling Cafe",
"Clafouti Restaurant",
"Sea Queen"
],

famousFood:[
"Seafood",
"Kerala Meals",
"Banana Chips"
],

hotels:[
"Gateway Varkala",
"Clafouti Beach Resort",
"Magnolia Guesthouse"
],

budget:35000

},


kovalam: {

title:"Kovalam Trip Plan",

video:"videos/kovalam.mp4",

places:[
"Kovalam Beach",
"Lighthouse Beach",
"Hawah Beach",
"Vizhinjam Marine Aquarium",
"Vellayani Lake"
],

vegRestaurants:[
"Suprabhatham",
"Jasmine Bay",
"Indian Coffee House"
],

nonVegRestaurants:[
"German Bakery",
"Fusion Restaurant",
"Seashore Restaurant"
],

famousFood:[
"Seafood",
"Appam",
"Kerala Curry"
],

hotels:[
"Taj Green Cove",
"The Leela Kovalam",
"Uday Samudra Resort"
],

budget:60000

},
madurai: {

title:"Madurai Trip Plan",

video:"videos/madurai.mp4",

places:[
"Meenakshi Amman Temple",
"Thirumalai Nayakkar Palace",
"Gandhi Memorial Museum",
"Vandiyur Mariamman Teppakulam",
"Alagar Koyil"
],

vegRestaurants:[
"Murugan Idli Shop",
"Sree Sabarees",
"Hotel Saravana Bhavan"
],

nonVegRestaurants:[
"Kumar Mess",
"Amma Mess",
"Konar Mess"
],

famousFood:[
"Jigarthanda",
"Idli",
"Parotta"
],

hotels:[
"Heritage Madurai",
"Courtyard By Marriott",
"The Gateway Hotel"
],

budget:30000

},


rameshwaram: {

title:"Rameshwaram Trip Plan",

video:"videos/rameshwaram.mp4",

places:[
"Ramanathaswamy Temple",
"Pamban Bridge",
"Dhanushkodi",
"Ariyaman Beach",
"APJ Abdul Kalam Memorial"
],

vegRestaurants:[
"Ahaan Restaurant",
"Shri Saravana Bhavan",
"Ananda Bhavan"
],

nonVegRestaurants:[
"Hotel Vinayaga",
"Local Seafood Restaurants",
"Coastal Restaurants"
],

famousFood:[
"South Indian Meals",
"Seafood",
"Dosa"
],

hotels:[
"Hyatt Place Rameswaram",
"Hotel Pearl Residency",
"Jiwan Residency"
],

budget:25000

},


kanyakumari: {

title:"Kanyakumari Trip Plan",

video:"videos/kanyakumari.mp4",

places:[
"Vivekananda Rock Memorial",
"Thiruvalluvar Statue",
"Kanyakumari Beach",
"Suchindram Temple",
"Sunset Point"
],

vegRestaurants:[
"Hotel Saravana Bhavan",
"Hotel Annapoorna",
"Sea View Restaurant"
],

nonVegRestaurants:[
"Sea View Restaurant",
"Local Seafood Restaurants",
"Hotel Tamilnadu Restaurant"
],

famousFood:[
"Banana Chips",
"South Indian Meals",
"Seafood"
],

hotels:[
"Hotel Sea View",
"The Gopinivas Grand",
"Hotel Tamilnadu"
],

budget:25000

},


hampi: {

title:"Hampi Trip Plan",

video:"videos/hampi.mp4",

places:[
"Virupaksha Temple",
"Vijaya Vittala Temple",
"Hampi Bazaar",
"Lotus Mahal",
"Matanga Hill"
],

vegRestaurants:[
"Shanti Restaurant",
"Food Corner Hampi",
"Manasa Restaurant"
],

nonVegRestaurants:[
"Nearby Hospet Restaurants",
"Local Cafes",
"Highway Restaurants"
],

famousFood:[
"South Indian Thali",
"Dosa",
"Filter Coffee"
],

hotels:[
"Heritage Resort Hampi",
"Hyatt Place Hampi",
"Clarks Inn"
],

budget:35000

},


mysore: {

title:"Mysore Trip Plan",

video:"videos/mysore.mp4",

places:[
"Mysore Palace",
"Chamundi Hills",
"Brindavan Gardens",
"St Philomena Church",
"Mysore Zoo"
],

vegRestaurants:[
"Mylari Restaurant",
"RRR Restaurant",
"Vidhyarthi Bhavan"
],

nonVegRestaurants:[
"Hanumanthu Pulav",
"Empire Restaurant",
"Mahesh Prasad"
],

famousFood:[
"Mysore Pak",
"Dosa",
"Filter Coffee"
],

hotels:[
"Radisson Blu Mysore",
"Royal Orchid Metropole",
"Grand Mercure Mysore"
],

budget:30000

},


vijayawada: {

title:"Vijayawada Trip Plan",

video:"videos/vijayawada.mp4",

places:[
"Kanaka Durga Temple",
"Prakasam Barrage",
"Undavalli Caves",
"Bhavani Island",
"Gandhi Hill"
],

vegRestaurants:[
"Babai Hotel",
"Minerva Grand",
"RR Durbar"
],

nonVegRestaurants:[
"RR Durbar",
"Southern Spice",
"Barbeque Nation"
],

famousFood:[
"Pulihora",
"Biryani",
"Dosa"
],

hotels:[
"Novotel Vijayawada",
"Gateway Hotel",
"Quality Hotel"
],

budget:25000

},


visakhapatnam: {

title:"Visakhapatnam Trip Plan",

video:"videos/visakhapatnam.mp4",

places:[
"RK Beach",
"Kailasagiri",
"Araku Valley",
"Submarine Museum",
"Borra Caves"
],

vegRestaurants:[
"Venkatadri Vantillu",
"Annapurna Restaurant",
"Hotel Daspalla"
],

nonVegRestaurants:[
"Sea Inn",
"Raju's Kitchen",
"Barbeque Nation"
],

famousFood:[
"Seafood",
"Biryani",
"Andhra Meals"
],

hotels:[
"Novotel Visakhapatnam",
"ITC Fortune",
"The Gateway Hotel"
],

budget:40000

},
tawang: {

title:"Tawang Trip Plan",

video:"videos/tawang.mp4",

places:[
"Tawang Monastery",
"Sela Pass",
"Jaswant Garh",
"Madhuri Lake",
"Nuranang Falls"
],

vegRestaurants:[
"Dragon Restaurant",
"Mon Valley Restaurant",
"Local Vegetarian Cafes"
],

nonVegRestaurants:[
"Dragon Restaurant",
"Woodland Restaurant",
"Local Food Points"
],

famousFood:[
"Thukpa",
"Momos",
"Monpa Cuisine"
],

hotels:[
"Hotel Tawang Heights",
"Dondrub Homestay",
"Yangzom Hotel"
],

budget:50000

},


zirovalley: {

title:"Ziro Valley Trip Plan",

video:"videos/ziro.mp4",

places:[
"Talley Valley Wildlife Sanctuary",
"Ziro Music Festival Ground",
"Meghna Cave Temple",
"ApatanI Villages",
"Pine Forest"
],

vegRestaurants:[
"Local Homestays",
"Ziro Cafe",
"Apna Bhojanalaya"
],

nonVegRestaurants:[
"Local Apatani Restaurants",
"Hotel Restaurants",
"Traditional Food Houses"
],

famousFood:[
"Apong Rice Beer",
"Local Tribal Food",
"Smoked Meat"
],

hotels:[
"Ziro Palace Inn",
"Siiro Resort",
"Hotel Valley View"
],

budget:40000

},


jimcorbett: {

title:"Jim Corbett Trip Plan",

video:"videos/corbett.mp4",

places:[
"Corbett National Park",
"Jhirna Zone",
"Dhikala Zone",
"Garjiya Temple",
"Corbett Waterfall"
],

vegRestaurants:[
"The Safari Cafe",
"Village Vatika Restaurant",
"Local Restaurants"
],

nonVegRestaurants:[
"Tree Tops Restaurant",
"Infinity Restaurant",
"Resort Restaurants"
],

famousFood:[
"Kumaoni Food",
"Dal Bhat",
"Local Sweets"
],

hotels:[
"Taj Corbett Resort",
"Namah Resort",
"Corbett Riverside Resort"
],

budget:50000

},


ranthambore: {

title:"Ranthambore Trip Plan",

video:"videos/ranthambore.mp4",

places:[
"Ranthambore National Park",
"Ranthambore Fort",
"Padam Lake",
"Trinetra Ganesh Temple",
"Surwal Lake"
],

vegRestaurants:[
"Food Corner",
"Raj Palace Restaurant",
"Local Rajasthani Restaurants"
],

nonVegRestaurants:[
"Safari Restaurant",
"Wild Dragon Restaurant",
"Resort Restaurants"
],

famousFood:[
"Dal Baati",
"Rajasthani Thali",
"Kachori"
],

hotels:[
"Ranthambore Regency",
"Ranthambore National Resort",
"Tiger Den Resort"
],

budget:25000
},

bharatpur: {

title:"Bharatpur Trip Plan",

video:"videos/bharatpur.mp4",

places:[
"Keoladeo National Park",
"Lohagarh Fort",
"Deeg Palace",
"Government Museum",
"Ganga Mandir"
],

vegRestaurants:[
"Shree Krishna Restaurant",
"Raj Palace Restaurant",
"Local Bhojanalaya"
],

nonVegRestaurants:[
"Hotel Sunbird Restaurant",
"Local Restaurants",
"Highway Restaurants"
],

famousFood:[
"Rajasthani Thali",
"Kachori",
"Ghevar"
],

hotels:[
"Laxmi Vilas Palace",
"Hotel Sunbird",
"Udai Vilas Palace"
],

budget:25000

},


dehradun: {

title:"Dehradun Trip Plan",

video:"videos/dehradun.mp4",

places:[
"Sahastradhara",
"Robber's Cave",
"Forest Research Institute",
"Tapkeshwar Temple",
"Mindrolling Monastery"
],

vegRestaurants:[
"Kumar Sweets",
"Kalsang Restaurant",
"Cafe De Piccolo"
],

nonVegRestaurants:[
"Kalsang Restaurant",
"Black Pepper Restaurant",
"Orchard Restaurant"
],

famousFood:[
"Garhwali Food",
"Momos",
"Bakery Items"
],

hotels:[
"Hyatt Regency Dehradun",
"Four Points Sheraton",
"Seyfert Sarovar"
],

budget:30000

},


ranikhet: {

title:"Ranikhet Trip Plan",

video:"videos/ranikhet.mp4",

places:[
"Chaubatia Garden",
"Jhula Devi Temple",
"Majhkhali",
"Bhalu Dam",
"Golf Course"
],

vegRestaurants:[
"Local Kumaoni Restaurants",
"Garden Restaurant",
"Annapurna Restaurant"
],

nonVegRestaurants:[
"Chevron Rosemount Restaurant",
"Local Hotels",
"Resort Restaurants"
],

famousFood:[
"Kumaoni Thali",
"Bal Mithai",
"Singori"
],

hotels:[
"Chevron Rosemount",
"Woodsvilla Resort",
"West View Hotel"
],

budget:30000

},
mukteshwar: {

title:"Mukteshwar Trip Plan",

video:"videos/mukteshwar.mp4",

places:[
"Mukteshwar Temple",
"Chauli Ki Jali",
"Indian Veterinary Research Institute",
"Sitla Village",
"Bhalu Gaad Waterfall"
],

vegRestaurants:[
"Local Kumaoni Restaurants",
"Chandi Mati Cafe",
"Vishnu Restaurant"
],

nonVegRestaurants:[
"Local Homestay Restaurants",
"Resort Restaurants",
"Mountain Food Cafe"
],

famousFood:[
"Kumaoni Thali",
"Bal Mithai",
"Local Pahadi Food"
],

hotels:[
"Mountain Trail Resort",
"Te Aroha Resort",
"Casa Belle Vue"
],

budget:30000

},


valleyofflowers: {

title:"Valley Of Flowers Trip Plan",

video:"videos/valleyofflowers.mp4",

places:[
"Valley Of Flowers National Park",
"Hemkund Sahib",
"Ghangaria Village",
"Pushpawati River",
"Govindghat"
],

vegRestaurants:[
"Local Garhwali Restaurants",
"Ghangaria Food Points",
"Hotel Restaurants"
],

nonVegRestaurants:[
"Limited Availability",
"Local Hotels",
"Nearby Restaurants"
],

famousFood:[
"Garhwali Thali",
"Maggi",
"Momos"
],

hotels:[
"Hotel Kuber",
"GMVN Guest House",
"Homestays Ghangaria"
],

budget:50000

},


kedarnath: {

title:"Kedarnath Trip Plan",

video:"videos/kedarnath.mp4",

places:[
"Kedarnath Temple",
"Vasuki Tal",
"Shankaracharya Samadhi",
"Mandakini River",
"Gaurikund"
],

vegRestaurants:[
"Temple Food Stalls",
"Local Bhojanalaya",
"GMVN Restaurants"
],

nonVegRestaurants:[
"Not Available Near Temple Area",
"Nearby Town Restaurants"
],

famousFood:[
"Khichdi",
"Garhwali Food",
"Tea"
],

hotels:[
"GMVN Guest House",
"Local Camps",
"Guest Houses"
],

budget:35000

},


badrinath: {

title:"Badrinath Trip Plan",

video:"videos/badrinath.sp.mp4",

places:[
"Badrinath Temple",
"Tapt Kund",
"Mana Village",
"Vasudhara Falls",
"Neelkanth Peak"
],

vegRestaurants:[
"Local Bhojanalaya",
"Temple Food Stalls",
"Hotel Restaurants"
],

nonVegRestaurants:[
"Limited Availability",
"Nearby Town Restaurants",
"Local Cafes"
],

famousFood:[
"Garhwali Food",
"Khichdi",
"Tea"
],

hotels:[
"GMVN Tourist Rest House",
"Hotel Snow Crest",
"Devlok Hotel"
],

budget:35000

},


somnath: {

title:"Somnath Trip Plan",

video:"videos/somnath.mp4",

places:[
"Somnath Temple",
"Triveni Sangam",
"Somnath Beach",
"Junagadh Gate",
"Bhalka Tirth"
],

vegRestaurants:[
"Hotel Shivam",
"Local Gujarati Restaurants",
"Amul Restaurant"
],

nonVegRestaurants:[
"Sea View Restaurants",
"Local Food Points",
"Nearby Hotels"
],

famousFood:[
"Gujarati Thali",
"Fafda",
"Khakhra"
],

hotels:[
"The Fern Somnath",
"Lords Inn Somnath",
"Hotel Ambar"
],

budget:25000

},


dwarka: {

title:"Dwarka Trip Plan",

video:"videos/dwarka.mp4",

places:[
"Dwarkadhish Temple",
"Bet Dwarka",
"Rukmini Temple",
"Shivrajpur Beach",
"Sudama Setu"
],

vegRestaurants:[
"Atithi Restaurant",
"Govinda Restaurant",
"Local Gujarati Restaurants"
],

nonVegRestaurants:[
"Sea View Restaurants",
"Local Food Points",
"Nearby Hotels"
],

famousFood:[
"Gujarati Thali",
"Fafda Jalebi",
"Khakhra"
],

hotels:[
"Dwarkadhish Lords Eco Inn",
"VITS Devbhumi Hotel",
"Hotel Roma Kristo"
],

budget:30000

},


girnationalpark: {

title:"Gir National Park Trip Plan",

video:"videos/gir.mp4",

places:[
"Gir National Park Safari",
"Devalia Safari Park",
"Kankai Temple",
"Kamleshwar Dam",
"Gir Interpretation Zone"
],

vegRestaurants:[
"Local Gujarati Restaurants",
"Resort Restaurants",
"Hotel Dining"
],

nonVegRestaurants:[
"Resort Restaurants",
"Wildlife Camp Restaurants",
"Local Restaurants"
],

famousFood:[
"Gujarati Thali",
"Khichdi",
"Kathiyawadi Food"
],

hotels:[
"Gateway Hotel Gir",
"Fern Gir Forest Resort",
"Club Mahindra Gir"
],

budget:50000

},


saputara: {

title:"Saputara Trip Plan",

video:"videos/saputara.mp4",

places:[
"Saputara Lake",
"Sunset Point",
"Artist Village",
"Gira Waterfall",
"Hatgadh Fort"
],

vegRestaurants:[
"Udupi Restaurant",
"Lake View Restaurant",
"Local Gujarati Restaurants"
],

nonVegRestaurants:[
"Hotel Restaurants",
"Local Food Points",
"Highway Restaurants"
],

famousFood:[
"Gujarati Thali",
"Bhajiya",
"Chai"
],

hotels:[
"Aakar Lords Inn",
"Shilpi Hill Resort",
"Torani Resort"
],

budget:30000

},
aurangabad: {

title:"Aurangabad Trip Plan",

video:"videos/aurangabad.mp4",

places:[
"Ajanta Caves",
"Ellora Caves",
"Bibi Ka Maqbara",
"Daulatabad Fort",
"Panchakki"
],

vegRestaurants:[
"Naivedya Restaurant",
"Kailash Veg Restaurant",
"Green Leaf Restaurant"
],

nonVegRestaurants:[
"Yalla Yalla",
"Mainland China",
"Hotel Shangrila"
],

famousFood:[
"Naan Qalia",
"Marathwada Thali",
"Jalebi"
],

hotels:[
"Vivanta Aurangabad",
"Welcomhotel Rama International",
"Ambassador Ajanta"
],

budget:30000

},


ajantaEllora: {

title:"Ajanta Ellora Trip Plan",

video:"videos/ellora.mp4",

places:[
"Ajanta Caves",
"Ellora Caves",
"Kailasa Temple",
"Grishneshwar Temple",
"Ghrishneshwar Jyotirlinga"
],

vegRestaurants:[
"MTDC Restaurant",
"Naivedya Restaurant",
"Local Maharashtrian Restaurants"
],

nonVegRestaurants:[
"Hotel Green Olive",
"Yalla Yalla",
"Local Restaurants"
],

famousFood:[
"Maharashtrian Thali",
"Misal Pav",
"Bhakri"
],

hotels:[
"MTDC Ajanta Resort",
"Hotel Kailas",
"Ellora Heritage Resort"
],

budget:28000

},


nagpur: {

title:"Nagpur Trip Plan",

video:"videos/nagpur.mp4",

places:[
"Deekshabhoomi",
"Futala Lake",
"Seminary Hills",
"Japanese Rose Garden",
"Ambazari Lake"
],

vegRestaurants:[
"Haldiram's",
"Naivedyam",
"Ashoka Restaurant"
],

nonVegRestaurants:[
"Barbecue Nation",
"Zuree",
"Veeraswami"
],

famousFood:[
"Tarri Poha",
"Orange Barfi",
"Saoji Food"
],

hotels:[
"Radisson Blu Nagpur",
"Centre Point Hotel",
"The Pride Hotel"
],

budget:25000

},












};




const matchedDestination = Object.keys(placesData).find(
    key => key.toLowerCase() === destination.toLowerCase()
);


const place =
placesData[matchedDestination] || placesData["Goa"];





// Video Load

const video =
document.getElementById("placeVideo");


if(video){

video.src = place.video;

}



const videoTitle =
document.getElementById("videoTitle");


if(videoTitle){

videoTitle.innerHTML = destination;

}






// Destination

document.getElementById("destination").innerHTML =
place.title;

// Vehicle Recommendation

let vehicle = "";

if (people == 1) {

    vehicle = "Bike / Auto";

}
else if (people <= 4) {

    vehicle = "Sedan Car";

}
else if (people <= 7) {

    vehicle = "SUV";

}
else {

    vehicle = "Tempo Traveller";

}


// Hotel Recommendation

let roomRecommendation = "";

if (travelType === "Solo") {

    roomRecommendation = "1 Standard Room";

}
else if (travelType === "Friends") {

    roomRecommendation =
    Math.ceil(people / 2) + " Deluxe Rooms";

}
else {

    roomRecommendation =
    Math.ceil(people / 4) + " Family Suites";

}



// Budget Calculation
const totalBudget = place.budget * people;
document.getElementById("budget").innerHTML =

`
Trip Duration : ${days} Days

<br><br>

Travel Type : ${travelType}

<br><br>

Total Travellers : ${people}

<br><br>

Travel Mode : ${travelMode}

<br><br>

Recommended Vehicle : ${vehicle}

<br><br>

Estimated Budget :

₹${totalBudget.toLocaleString("en-IN")}

`;








// Day Wise Plan


let itinerary = "";


for(let i=0; i<days; i++){


let visitPlace =
place.places[i % place.places.length];


itinerary += `


<div class="day-card">


<h3>Day ${i+1}</h3>


<p>

<b>Morning</b><br>

Visit ${visitPlace}

</p>



<p>

<b>Afternoon</b><br>

Explore nearby attractions and local markets.

</p>



<p>

<b>Evening</b><br>

Enjoy famous viewpoints and local culture.

</p>



</div>


`;


}



document.getElementById("plan").innerHTML =
itinerary;









// Food Filter


let foodHTML = "";



if(foodPreference === "Veg"){
let roomRecommendation = "";

if (travelType === "Solo") {

    roomRecommendation = "1 Standard Room";

}

else if (travelType === "Friends") {

    roomRecommendation = Math.ceil(people / 2) + " Deluxe Rooms";

}

else {

    roomRecommendation = Math.ceil(people / 4) + " Family Suites";

}

foodHTML += `

<h3>Vegetarian Restaurants</h3>
<p><b>Suggested Rooms :</b> ${roomRecommendation}</p>
<ul>

${place.vegRestaurants.map(item=>`<li>${item}</li>`).join("")}

</ul>


`;


}



else if(foodPreference === "Non-Veg"){


foodHTML += `

<h3>Non Vegetarian Restaurants</h3>

<ul>

${place.nonVegRestaurants.map(item=>`<li>${item}</li>`).join("")}

</ul>


`;


}



else{


foodHTML += `

<h3>Vegetarian Restaurants</h3>

<ul>

${place.vegRestaurants.map(item=>`<li>${item}</li>`).join("")}

</ul>


<h3>Non Vegetarian Restaurants</h3>


<ul>

${place.nonVegRestaurants.map(item=>`<li>${item}</li>`).join("")}

</ul>


`;

}




foodHTML += `


<h3>Famous Food</h3>

<ul>

${place.famousFood.map(item=>`<li>${item}</li>`).join("")}

</ul>



<h3>Recommended Hotels</h3>

<p>

<b>Suggested Rooms :</b> ${roomRecommendation}

</p>

<ul>

${place.hotels.map(item=>`<li>${item}</li>`).join("")}

</ul>



`;





document.getElementById("food").innerHTML =
foodHTML;