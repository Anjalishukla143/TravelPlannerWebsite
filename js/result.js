console.log("FINAL RESULT JS WORKING");


const destination =
(localStorage.getItem("destination") || "Goa").trim();

console.log("Selected Destination:", destination);


const days =
parseInt(localStorage.getItem("days")) || 3;

const budget =
localStorage.getItem("budget") || "10000";

const foodPreference =
localStorage.getItem("food") || "Veg";





const placesData = {


Goa: {

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


budget:
"₹9000 - ₹12000"

},





Manali: {


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


budget:
"₹10000 - ₹15000"

},
Delhi: {

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

budget:"₹8000 - ₹25000"

},


Mumbai: {

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

budget:"₹10000 - ₹30000"

},


Bangalore: {

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

budget:"₹9000 - ₹28000"

},


Kolkata: {

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

budget:"₹8000 - ₹22000"

},


Chennai: {

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

budget:"₹8000 - ₹25000"

},


Hyderabad: {

title:"Hyderabad Trip Plan",

video:"videos/hyderabad.mp4",

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

budget:"₹9000 - ₹26000"

},


Pune: {

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

budget:"₹8000 - ₹24000"

},


Udaipur: {

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

budget:"₹12000 - ₹40000"

},


Jaisalmer: {

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

budget:"₹10000 - ₹35000"

},


Jodhpur: {

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

budget:"₹10000 - ₹35000"

},
Agra: {

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

budget:"₹8000 - ₹30000"

},


Varanasi: {

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

budget:"₹7000 - ₹25000"

},


Rishikesh: {

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

budget:"₹8000 - ₹30000"

},


Mussoorie: {

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

budget:"₹10000 - ₹35000"

},


Shimla: {

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

budget:"₹12000 - ₹40000"

},


Dharamshala: {

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

budget:"₹9000 - ₹30000"

},


Ooty: {

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

budget:"₹9000 - ₹30000"

},


Munnar: {

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

budget:"₹10000 - ₹35000"

},


Kerala: {

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

budget:"₹12000 - ₹50000"

},


Andaman: {

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

budget:"₹20000 - ₹70000"

},
Jaipur: {

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

budget:"₹10000 - ₹40000"

},


Ajmer: {

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

budget:"₹7000 - ₹25000"

},


Pushkar: {

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

budget:"₹8000 - ₹30000"

},


"Mount Abu": {

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

budget:"₹9000 - ₹30000"

},


Bikaner: {

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

budget:"₹8000 - ₹30000"

},


Haridwar: {

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

budget:"₹7000 - ₹25000"

},


Nainital: {

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

budget:"₹10000 - ₹35000"

},
Auli: {

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

budget:"₹12000 - ₹40000"

},


Kasol: {

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

budget:"₹8000 - ₹30000"

},


Kasauli: {

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

budget:"₹9000 - ₹30000"

},


"Leh Ladakh": {

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

budget:"₹25000 - ₹70000"

},


"Spiti Valley": {

title:"Spiti Valley Trip Plan",

video:"videos/spiti.mp4",

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

budget:"₹20000 - ₹60000"

},


Dalhousie: {

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

budget:"₹10000 - ₹35000"

},


Amritsar: {

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

budget:"₹8000 - ₹30000"

},


Chandigarh: {

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

budget:"₹9000 - ₹30000"

},
Lucknow: {

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

budget:"₹8000 - ₹30000"

},


Mathura: {

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

budget:"₹6000 - ₹20000"

},


Vrindavan: {

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

budget:"₹5000 - ₹20000"

},


Pondicherry: {

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

budget:"₹10000 - ₹40000"

},


Coorg: {

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

budget:"₹12000 - ₹45000"

},
Wayanad: {

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

budget:"₹10000 - ₹35000"

},


Mahabaleshwar: {

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

budget:"₹9000 - ₹30000"

},


Lonavala: {

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

budget:"₹8000 - ₹30000"

},


Khandala: {

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

budget:"₹8000 - ₹25000"

},


Nashik: {

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

budget:"₹8000 - ₹30000"

},


Ahmedabad: {

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

budget:"₹8000 - ₹30000"

},
Surat: {

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

budget:"₹7000 - ₹25000"

},


Vadodara: {

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

budget:"₹7000 - ₹25000"

},


Indore: {

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

budget:"₹7000 - ₹25000"

},


Bhopal: {

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

budget:"₹8000 - ₹30000"

},


Khajuraho: {

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

budget:"₹7000 - ₹25000"

},


Sanchi: {

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

budget:"₹5000 - ₹20000"

},


Darjeeling: {

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

budget:"₹12000 - ₹40000"

},


Gangtok: {

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

budget:"₹12000 - ₹45000"

},
Shillong: {

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

budget:"₹10000 - ₹35000"

},


Meghalaya: {

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

budget:"₹12000 - ₹40000"

},


Kaziranga: {

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

budget:"₹10000 - ₹40000"

},


Puri: {

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

budget:"₹8000 - ₹30000"

},
Ayodhya: {

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

budget:"₹6000 - ₹25000"

},


Gwalior: {

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

budget:"₹7000 - ₹30000"

},


Orchha: {

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

budget:"₹7000 - ₹25000"

},


Jabalpur: {

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

budget:"₹7000 - ₹28000"

},


Ujjain: {

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

budget:"₹6000 - ₹25000"

},


Amarkantak: {

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

budget:"₹5000 - ₹20000"

},
RannOfKutch: {

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

budget:"₹12000 - ₹45000"

},


Diu: {

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

budget:"₹8000 - ₹30000"

},


Daman: {

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

budget:"₹9000 - ₹30000"

},


Alappuzha: {

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

budget:"₹12000 - ₹50000"

},


Varkala: {

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

budget:"₹9000 - ₹35000"

},


Kovalam: {

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

budget:"₹15000 - ₹60000"

},
Madurai: {

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

budget:"₹8000 - ₹30000"

},


Rameshwaram: {

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

budget:"₹7000 - ₹25000"

},


Kanyakumari: {

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

budget:"₹7000 - ₹25000"

},


Hampi: {

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

budget:"₹9000 - ₹35000"

},


Mysore: {

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

budget:"₹9000 - ₹30000"

},


Vijayawada: {

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

budget:"₹7000 - ₹25000"

},


Visakhapatnam: {

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

budget:"₹10000 - ₹40000"

},
Tawang: {

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

budget:"₹15000 - ₹50000"

},


ZiroValley: {

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

budget:"₹12000 - ₹40000"

},


JimCorbett: {

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

budget:"₹12000 - ₹50000"

},


Ranthambore: {

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

budget:"₹15000 - ₹60000"

},


Bharatpur: {

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

budget:"₹7000 - ₹25000"

},


Dehradun: {

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

budget:"₹9000 - ₹30000"

},


Ranikhet: {

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

budget:"₹9000 - ₹30000"

},
Mukteshwar: {

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

budget:"₹9000 - ₹30000"

},


ValleyOfFlowers: {

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

budget:"₹15000 - ₹50000"

},


Kedarnath: {

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

budget:"₹10000 - ₹35000"

},


Badrinath: {

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

budget:"₹10000 - ₹35000"

},


Somnath: {

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

budget:"₹7000 - ₹25000"

},


Dwarka: {

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

budget:"₹7000 - ₹30000"

},


GirNationalPark: {

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

budget:"₹12000 - ₹50000"

},


Saputara: {

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

budget:"₹8000 - ₹30000"

},
Aurangabad: {

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

budget:"₹8000 - ₹30000"

},


AjantaEllora: {

title:"Ajanta Ellora Trip Plan",

video:"videos/ajanta-ellora.mp4",

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

budget:"₹8000 - ₹28000"

},


Nagpur: {

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

budget:"₹7000 - ₹25000"

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





// Budget Calculation

document.getElementById("budget").innerHTML =

`
Trip Duration: ${days} Days
<br><br>

Estimated Cost:
${place.budget}

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


foodHTML += `

<h3>Vegetarian Restaurants</h3>

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

<ul>

${place.hotels.map(item=>`<li>${item}</li>`).join("")}

</ul>



`;





document.getElementById("food").innerHTML =
foodHTML;