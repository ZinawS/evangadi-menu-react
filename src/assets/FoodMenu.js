import doroWot from "./images/dorowot.png";
import misirWot from "./images/misirwot.png";
import shiroWot from "./images/shiroWot.png";
import tegabino from "./images/Tegabino.png";
import EnqulalFirfir from "./images/EnqulalFirfir.png";
import Beyayinet from "./images/Beyayinet.png";
import QuantaFirfir from "./images/QuantaFirfir.png";
import GomenBesiga from "./images/GomenBesiga.png";
import YejebenaBuna from "./images/YejebenaBuna.png";

const menu = [
  // Original Dishes
  {
    id: 1,
    title: "TIMATIM SELAXA (ቲማቲም ሰላጣ)",
    category: "dinner",
    price: 5.99,
    img: "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp",
    desc: `Timatim Salata is a fresh Ethiopian tomato salad, also popular in Eritrea. It features diced tomatoes, minced onions, and finely chopped peppers, dressed with berbere spices, olive oil, vinegar, and lemon juice. It’s often served as a side dish with injera or as a topping for various dishes. The salad is known for its vibrant colors and refreshing taste, making it a staple in Ethiopian cuisine.`,
    
  },
  {
    id: 2,
    title: "TIBS (ጥብስ)",
    category: "lunch",
    price: 22.99,
    img: "https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
    desc: `Tibs is sliced beef or lamb pan-fried in butter, garlic, and onion, a popular Ethiopian dish. Available in various forms, it varies in meat cut, spiciness, and vegetable content. Shekla tibs, served sizzling on a clay pot with hot coals, is a dramatic and delicious variation.`,
  },
  {
    id: 3,
    title: "GENFO (ገንፎ)",
    category: "breakfast",
    price: 20.99,
    img: "https://cdn.tasteatlas.com/images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510",
    desc: `Genfo is a thick Ethiopian porridge eaten for breakfast. Made by stirring dry-roasted barley flour into boiling water, it achieves a smooth, dense consistency, often served with butter or spiced oil.`,
  },
  {
    id: 4,
    title: "KINCHE (ቂንጬ)",
    category: "dinner",
    price: 7.99,
    img: "https://cdn.tasteatlas.com/images/dishes/5746f1c174664a01990eb04377c9228a.jpg?w=905&h=510",
    desc: `Kinche is a simple, nutritious Ethiopian breakfast of cracked wheat boiled in water or milk, akin to oatmeal. It’s flavored with niter qibe (spiced butter) or fried onions, or served plain for a light meal.`,
  },
  {
    id: 5,
    title: "KITFO (ክትፎ)",
    category: "lunch",
    price: 25.99,
    img: "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp",
    desc: `Kitfo, a delicacy of minced raw beef, is warmed with butter and mitmita (spicy berbere blend). Served leb leb (lightly warmed) or betam leb leb (cooked), it’s a nutritious treat enjoyed with injera.`,
  },
  {
    id: 6,
    title: "KIK ALICHA (ክክ አልጫ)",
    category: "dinner",
    price: 12.99,
    img: "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kik-alicha.jpg.webp",
    desc: `Kik Alicha is a mild lentil stew made with yellow split peas, niter kibbeh, turmeric, garlic, onions, and ginger. Lacking berbere, it’s less spicy and often served with injera on combination platters.`,
  },
  {
    id: 7,
    title: "GORED GORED (ጎረድ ጎረ�5)",
    category: "lunch",
    price: 28.99,
    img: "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo-gored.jpg.webp",
    desc: `Gored Gored features raw beef cubes (tenderloin or round steak) seasoned with niter kibbeh, mitmita, berbere, and awaze. Similar to kitfo, it’s served with injera for a bold, spicy experience.`,
  },
  {
    id: 8,
    title: "FATIRA (ፈጢራ)",
    category: "breakfast",
    price: 18.99,
    img: "https://cdn.tasteatlas.com/images/dishes/f99dcc3dfcc642348a40b19f51f32b74.jpg?w=905&h=510",
    desc: `Fatira is a crispy wheat flour pancake, a popular Ethiopian breakfast street food. Served with scrambled eggs, honey, or both, it’s cut into pieces and favored during Eid-al-Fitr celebrations.`,
  },
  {
    id: 9,
    title: "KIXA FIR-FIR (ቂጣ ፍር ፍር)",
    category: "breakfast",
    price: 15.99,
    img: "https://cdn.tasteatlas.com/images/dishes/685b5e5b70b441a7a4e7279a43a89333.jpg?w=905&h=510",
    desc: `Kixa Fir-Fir is a breakfast dish of torn kitcha flatbread mixed with clarified butter and berbere spices. Served with yogurt and eaten with a spoon, it’s a unique fit-fit variety.`,
  },
  // New Dishes
  {
    id: 10,
    title: "DORO WAT (ዶሮ ወጥ)",
    category: "dinner",
    price: 24.99,
    img: doroWot,
    desc: `Ethiopia's national dish, Doro Wat is a spicy chicken stew simmered in berbere sauce with onions, garlic, and hard-boiled eggs. Traditionally served with injera during special occasions.`,
  },
  {
    id: 11,
    title: "MISIR WAT (ምስር ወጥ)",
    category: "lunch",
    price: 14.99,
    img: misirWot,
    desc: `A fiery red lentil stew cooked with berbere spice, onions, garlic, and niter kibbeh. This vegan-friendly dish is a staple in Ethiopian cuisine, packed with protein and flavor.`,
  },
  {
    id: 12,
    title: "SHIRO WAT (ሽሮ ወጥ)",
    category: "dinner",
    price: 13.99,
    img: shiroWot,
    desc: `A smooth, flavorful stew made from ground chickpeas or broad beans, cooked with berbere spice, garlic, and onions. Available in both spicy (shiro wat) and mild (shiro alicha) versions.`,
  },
  
  
  {
    id: 15,
    title: "TEGABINO (ተጋቢኖ)",
    category: "lunch",
    price: 19.99,
    img: tegabino,
    desc: `A thick, pancake-like bread made from chickpea flour, similar to socca. Served with honey or stews, it's a gluten-free alternative to injera in some regions.`,
  },
 
  {
    id: 17,
    title: "ENQULAL FIR-FIR (እንቁላል ፍርፍር)",
    category: "breakfast",
    price: 12.99,
    img: EnqulalFirfir,
    desc: `Scrambled eggs mixed with pieces of injera or kitcha bread, seasoned with berbere and niter kibbeh. A popular breakfast dish with a spicy kick.`,
  },
  {
    id: 18,
    title: "YEBAYNETU (የባይነቱ)",
    category: "dinner",
    price: 29.99,
    img:Beyayinet ,
    desc: `A combination platter featuring small portions of various stews and salads arranged on injera. Typically includes doro wat, misir wat, shiro, and vegetable dishes.`,
  },

  {
    id: 26,
    title: "QUANTA FIR-FIR (ቈንጣ ፍርፍር)",
    category: "breakfast",
    price: 18.99,
    img: QuantaFirfir,
    desc: `Dried beef jerky (quanta) soaked and sautéed with onions, tomatoes, and berbere, then mixed with torn injera pieces. A flavorful breakfast dish with intense umami taste.`,
  },
 
  {
    id: 35,
    title: "GOMEN BESIGA (ጎመን በስጋ)",
    category: "dinner",
    price: 19.99,
    img: GomenBesiga,
    desc: `Collard greens stewed with chunks of beef and spices. The meat tenderizes in the greens' juices, creating a flavorful one-pot dish.`,
  },
 
  {
    id: 40,
    title: "YEJEBNA BUNNA (የጀብና ቡና)",
    category: "drink",
    price: 4.99,
    img: YejebenaBuna,
    desc: `Traditional Ethiopian coffee ceremony brew, served in small cups with popcorn or incense. Beans are roasted fresh before brewing for maximum aroma.`,
  },
];

export default menu;
