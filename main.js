/* =========================================================
   DEVVOLTX — DESIGN RESOURCES
   Main JavaScript
========================================================= */


/* =========================================================
   01 — RESOURCE DATA
========================================================= */

/*
  كل موقع هنا بالشكل:

  [
    "اسم الموقع",
    "الرابط",
    "free" أو "paid"
  ]

  والـ type موجود على مستوى التصنيف.
*/

const resources = [

  /* =========================
     COLORS
  ========================== */

  {
    title: "مواقع الألوان",
    type: "color",

    links: [
      ["Color Hunt", "https://colorhunt.co", "free"],
      ["Klart", "https://klart.io", "free"],
      ["Adobe Color", "https://color.adobe.com", "free"],
      ["Webkul Palettes", "https://webkul.github.io", "free"],
      ["Pigment", "https://pigment.shapefactory.co", "free"],
      ["Brand Colors", "https://brandcolors.net", "free"],
      ["Web Gradients", "https://webgradients.com", "free"],
      ["Color Inspire", "https://www.colorinspire.io/", "free"],
      ["My Color Space", "https://mycolor.space", "free"],
      ["Color Lisa", "http://www.colorlisa.com/", "free"],
      ["Material Palette", "https://www.materialpalette.com/", "free"],
      ["Cohesive Colors", "https://javier.xyz/cohesive-colors/", "free"]
    ]
  },


  /* =========================
     IMAGES
  ========================== */

  {
    title: "مواقع الصور",
    type: "image",

    links: [
      ["Unsplash", "https://unsplash.com/", "free"],
      ["Pexels", "https://www.pexels.com/", "free"],
      ["Pixabay", "https://pixabay.com/", "free"],
      ["StockSnap", "https://stocksnap.io/", "free"],
      ["Burst", "https://burst.shopify.com/", "free"],
      ["Reshot", "https://www.reshot.com/", "free"],
      ["Foodies Feed", "https://foodiesfeed.com/", "free"],
      ["Gratisography", "https://www.gratisography.com/", "free"],
      ["Freestocks", "http://freestocks.org/", "free"],
      ["Life of Pix", "http://www.lifeofpix.com/", "free"],
      ["Skitterphoto", "http://skitterphoto.com/", "free"],
      ["Picjumbo", "https://picjumbo.com/", "free"],
      ["Magdeleine", "https://magdeleine.co/browse/", "free"],
      ["Free Photos", "https://freephotos.cc/", "free"],
      ["Startup Stock Photos", "https://startupstockphotos.com", "free"]
    ]
  },


  /* =========================
     PNG
  ========================== */

  {
    title: "صور بدون خلفية",
    type: "image",

    links: [
      ["KissPNG", "https://www.kisspng.com", "free"],
      ["PNG IMG", "http://pngimg.com/", "free"],
      ["Footy Renders", "https://www.footyrenders.com/", "free"],
      ["PNGTree", "https://pngtree.com/", "paid"],
      ["Free PNG Img", "https://www.freepngimg.com/", "free"],
      ["PNGFly", "https://www.pngfly.com/", "free"],
      ["PNG Play", "http://www.pngplay.com/", "free"],
      ["StickPNG", "https://www.stickpng.com/", "free"],
      ["PNGAll", "http://www.pngall.com/", "free"],
      ["Free PNGs", "https://www.freepngs.com/", "free"],
      ["PNGMart", "http://www.pngmart.com/", "free"]
    ]
  },


  /* =========================
     VIDEOS
  ========================== */

  {
    title: "مواقع الفيديوهات",
    type: "video",

    links: [
      ["Mixkit", "https://mixkit.co", "free"],
      ["Coverr", "https://coverr.co", "free"],
      ["Motion Places", "https://www.motionplaces.com", "free"],
      ["Videezy", "https://www.videezy.com/", "free"],
      ["Videvo", "https://www.videvo.net/", "paid"],
      ["Pixabay Videos", "https://pixabay.com/videos/", "free"],
      ["Pexels Videos", "https://videos.pexels.com/", "free"],
      ["Cute Stock Footage", "https://www.cutestockfootage.com/", "free"],
      ["Monzoom", "https://www.monzoom.com", "paid"]
    ]
  },


  /* =========================
     INSPIRATION
  ========================== */

  {
    title: "مواقع استلهام عام",
    type: "inspiration",

    links: [
      ["Inspiration DE", "https://www.inspirationde.com", "free"],
      ["Designspiration", "https://www.designspiration.net", "free"],
      ["Pinterest", "https://www.pinterest.com", "free"],
      ["Dribbble", "https://dribbble.com", "free"],
      ["The Inspiration Grid", "https://theinspirationgrid.com", "free"],
      ["The Design Inspiration", "https://thedesigninspiration.com", "free"],
      ["Behance", "https://www.behance.net", "free"],
      ["Awwwards", "https://www.awwwards.com/websites", "free"],
      ["One Page Love", "https://onepagelove.com", "free"]
    ]
  },


  /* =========================
     LOGO INSPIRATION
  ========================== */

  {
    title: "استلهام الشعارات",
    type: "inspiration",

    links: [
      ["Logo Moose", "https://www.logomoose.com", "free"],
      ["Logopond", "https://logopond.com", "free"],
      ["Logo Lounge", "https://www.logolounge.com", "paid"],
      ["Logo Faves", "http://logofaves.com", "free"],
      ["Logo Talkz", "http://www.logotalkz.com", "free"],
      ["Logospire", "http://logospire.com", "free"]
    ]
  },


  /* =========================
     UI / UX
  ========================== */

  {
    title: "استلهام UX / تطبيقات",
    type: "ui",

    links: [
      ["Inspired UI", "https://inspired-ui.com", "free"],
      ["Call to Idea", "https://www.calltoidea.com", "free"],
      ["Mobile Patterns", "https://www.mobile-patterns.com", "free"],
      ["UpLabs", "https://www.uplabs.com", "free"],
      ["Lovely UI", "https://www.lovelyui.com", "free"],
      ["iOS Icon Gallery", "https://www.iosicongallery.com", "free"],
      ["UI Garage", "https://uigarage.net", "free"]
    ]
  },


  /* =========================
     MOCKUPS
  ========================== */

  {
    title: "قوالب الموك أب",
    type: "mockup",

    links: [
      ["Mockups for Free", "https://mockupsforfree.com/", "free"],
      ["Mockup World", "https://www.mockupworld.co", "free"],
      ["Graphic Burger", "https://graphicburger.com", "free"],
      ["Zippy Pixels", "https://zippypixels.com", "free"],
      ["Pixeden", "https://www.pixeden.com", "free"],
      ["Freebies Bug", "https://freebiesbug.com", "free"],
      ["PSD Repo", "https://psdrepo.com", "free"],
      ["Mockups Design", "https://mockups-design.com", "free"],
      ["Medialoot Mockups", "https://medialoot.com/free-mockups/", "free"],
      ["The Mockup Club", "https://themockup.club", "free"],
      ["Barn Images", "https://barnimages.com/freebies/", "free"],
      ["LS Graphics", "https://www.ls.graphics/free", "free"]
    ]
  },


  /* =========================
     DESIGN FILES
  ========================== */

  {
    title: "ملفات تصميم عامة",
    type: "file",

    links: [
      ["Freepik", "https://www.freepik.com", "paid"],
      ["All Free Download", "https://all-free-download.com", "free"],
      ["Vecteezy", "https://www.vecteezy.com", "free"],
      ["365PSD", "https://365psd.com", "free"],
      ["1001 Free Downloads", "https://www.1001freedownloads.com", "free"],
      ["Freebies Bug", "https://freebiesbug.com", "free"],
      ["Free PSD Files", "https://freepsdfiles.net", "free"],
      ["Graphics Fuel", "https://www.graphicsfuel.com", "free"]
    ]
  },


  /* =========================
     PHOTOSHOP BRUSHES
  ========================== */

  {
    title: "فرش فوتوشوب",
    type: "brush",

    links: [
      ["Brush King", "https://www.brushking.eu/", "free"],
      ["Brusheezy", "https://www.brusheezy.com/brushes", "free"],
      ["My Photoshop Brushes", "https://myphotoshopbrushes.com/", "free"],
      ["FBrushes", "https://fbrushes.com/", "free"],
      ["GFX Fever", "http://gfxfever.com/photoshop-brushes", "free"],
      ["Get Brushes", "http://getbrushes.com/", "free"],
      ["Brushes Download", "http://www.brushesdownload.com/", "free"],
      ["Chez Plumeau", "https://www.chezplumeau.com", "free"],
      ["Wow Brushes", "http://wowbrushes.com/", "free"],
      ["Brush Photoshop", "https://www.brush-photoshop.fr/", "free"]
    ]
  },


  /* =========================
     ICONS
  ========================== */

  {
    title: "الأيقونات",
    type: "icon",

    links: [
      ["Flaticon", "https://www.flaticon.com", "free"],
      ["Free Icons", "https://freeicons.io", "free"],
      ["Icon Store", "https://iconstore.co", "free"],
      ["Iconfinder", "https://www.iconfinder.com", "free"],
      ["Digital Nomad Icons", "https://digitalnomadicons.com", "free"],
      ["Simple Icons", "https://simpleicons.org", "free"],
      ["Icon Icons", "https://icon-icons.com", "free"],
      ["Icon SVG", "https://iconsvg.xyz", "free"],
      ["X Icons", "https://www.xicons.co", "free"],
      ["Ionicons", "https://ionicons.com", "free"],
      ["To Icon", "https://www.toicon.com", "free"],
      ["Icons8", "https://icons8.com", "free"],
      ["IcoMoon", "https://icomoon.io", "free"],
      ["IconScout", "https://iconscout.com", "free"],
      ["Animaticons", "http://animaticons.co", "paid"]
    ]
  }

];


/* =========================================================
   02 — SETTINGS
========================================================= */

const STORAGE_KEY =
  "devvoltx_design_favorites";

let activeFilter = "all";

let favorites =
  JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );


/* =========================================================
   03 — DOM ELEMENTS
========================================================= */

const elements = {

  sections:
    document.getElementById("sections"),

  categoryNav:
    document.getElementById("categoryNav"),

  searchInput:
    document.getElementById("searchInput"),

  filters:
    document.getElementById("filters"),

  totalLinks:
    document.getElementById("totalLinks"),

  totalCategories:
    document.getElementById("totalCategories"),

  freeCount:
    document.getElementById("freeCount"),

  favoriteCount:
    document.getElementById("favoriteCount"),

  toast:
    document.getElementById("toast")

};


/* =========================================================
   04 — GET ALL RESOURCES
========================================================= */

/*
  نحول البيانات الموجودة داخل التصنيفات
  إلى Array واحدة ليسهل التعامل معها.
*/

function getAllResources() {

  const allResources = [];

  resources.forEach((category, categoryIndex) => {

    category.links.forEach(link => {

      allResources.push({

        name: link[0],

        url: link[1],

        pricing: link[2],

        type: category.type,

        category: category.title,

        categoryIndex

      });

    });

  });

  return allResources;

}


/* =========================================================
   05 — WEBSITE DOMAIN
========================================================= */

function getDomain(url) {

  try {

    return new URL(url)
      .hostname
      .replace("www.", "");

  } catch {

    return url;

  }

}


/* =========================================================
   06 — FALLBACK INITIALS
========================================================= */

function getInitials(name) {

  const cleanName =
    name
      .replace(
        /[^\u0600-\u06FFa-zA-Z0-9 ]/g,
        ""
      )
      .trim();

  const words =
    cleanName.split(/\s+/);

  if (words.length >= 2) {

    return (
      words[0][0] +
      words[1][0]
    ).toUpperCase();

  }

  return cleanName
    .substring(0, 2)
    .toUpperCase();

}


/* =========================================================
   07 — FAVORITES
========================================================= */

function getResourceKey(name, url) {

  return `${name}|${url}`;

}


function isFavorite(name, url) {

  return favorites.includes(
    getResourceKey(name, url)
  );

}


function saveFavorites() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
  );

}


function toggleFavorite(name, url) {

  const key =
    getResourceKey(name, url);

  if (favorites.includes(key)) {

    favorites =
      favorites.filter(
        favorite => favorite !== key
      );

    showToast(
      "تمت الإزالة من المفضلة"
    );

  } else {

    favorites.push(key);

    showToast(
      "⭐ تمت الإضافة للمفضلة"
    );

  }

  saveFavorites();

  updateStatistics();

  renderResources();

}


/* =========================================================
   08 — COPY LINK
========================================================= */

async function copyLink(url) {

  try {

    await navigator.clipboard.writeText(url);

    showToast("✓ تم نسخ الرابط");

  } catch {

    const textarea =
      document.createElement("textarea");

    textarea.value = url;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

    showToast("✓ تم نسخ الرابط");

  }

}


/* =========================================================
   09 — TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  elements.toast.textContent =
    message;

  elements.toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      elements.toast.classList.remove(
        "show"
      );

    }, 1800);

}


/* =========================================================
   10 — WEBSITE ICON
========================================================= */

function createWebsiteIcon(name, url) {

  const domain =
    getDomain(url);

  const initials =
    getInitials(name);

  return `

    <div class="site-icon">

      <img
        src="https://www.google.com/s2/favicons?domain=${domain}&sz=128"
        alt=""
        loading="lazy"
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='block';
        "
      >

      <span
        class="fallback-icon"
        style="display:none"
      >
        ${initials}
      </span>

    </div>

  `;

}


/* =========================================================
   11 — STATISTICS
========================================================= */

function updateStatistics() {

  const allResources =
    getAllResources();

  elements.totalLinks.textContent =
    allResources.length;

  elements.totalCategories.textContent =
    resources.length;

  elements.freeCount.textContent =
    allResources.filter(
      resource =>
        resource.pricing === "free"
    ).length;

  elements.favoriteCount.textContent =
    favorites.length;

}


/* =========================================================
   12 — CATEGORY NAVIGATION
========================================================= */

function renderCategoryNavigation() {

  elements.categoryNav.innerHTML = "";


  /* All categories button */

  const allButton =
    document.createElement("button");

  allButton.className = "active";

  allButton.innerHTML = `

    <span class="nav-dot"></span>

    الكل

    <span class="nav-count">
      ${getAllResources().length}
    </span>

  `;

  allButton.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

  elements.categoryNav.appendChild(
    allButton
  );


  /* Individual categories */

  resources.forEach(
    (category, index) => {

      const button =
        document.createElement("button");

      button.dataset.category =
        `category-${index}`;

      button.innerHTML = `

        <span class="nav-dot"></span>

        ${category.title}

        <span class="nav-count">
          ${category.links.length}
        </span>

      `;

      button.addEventListener(
        "click",
        () => {

          const section =
            document.getElementById(
              `category-${index}`
            );

          if (!section) return;

          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

      elements.categoryNav.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   13 — FILTER CHECK
========================================================= */

function matchesFilter(resource) {

  /* Show everything */

  if (activeFilter === "all") {
    return true;
  }


  /* Pricing filters */

  if (activeFilter === "free") {

    return resource.pricing === "free";

  }

  if (activeFilter === "paid") {

    return resource.pricing === "paid";

  }


  /* Category filters */

  return resource.type === activeFilter;

}


/* =========================================================
   14 — FILTER BUTTONS
========================================================= */

function setupFilters() {

  const buttons =
    elements.filters
      .querySelectorAll(".filter");

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeFilter =
          button.dataset.filter;


        /* Update active button */

        buttons.forEach(
          filterButton => {

            filterButton.classList.toggle(
              "active",
              filterButton === button
            );

          }
        );


        renderResources();

      }
    );

  });

}


/* =========================================================
   15 — SEARCH
========================================================= */

function getSearchQuery() {

  return elements.searchInput
    .value
    .trim()
    .toLowerCase();

}


function matchesSearch(resource) {

  const query =
    getSearchQuery();

  if (!query) {
    return true;
  }

  const searchableText = `

    ${resource.name}
    ${resource.url}
    ${resource.category}

  `.toLowerCase();

  return searchableText.includes(query);

}


/* =========================================================
   16 — RESOURCE CARD
========================================================= */

function createResourceCard(
  name,
  url,
  pricing
) {

  const card =
    document.createElement("article");

  card.className =
    "resource";


  const favorite =
    isFavorite(name, url);


  card.innerHTML = `

    <div class="resource-top">

      ${createWebsiteIcon(name, url)}

      <div class="resource-info">

        <span class="resource-name">
          ${name}
        </span>

        <span class="resource-url">
          ${getDomain(url)}
        </span>

      </div>

    </div>


    <div class="resource-actions">

      <a
        class="action open"
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        فتح الموقع ↗
      </a>


      <button
        class="action copy-button"
        type="button"
        title="نسخ الرابط"
      >
        📋
      </button>


      <button
        class="action favorite
        ${favorite ? "active" : ""}"
        type="button"
        title="إضافة للمفضلة"
      >
        ${favorite ? "★" : "☆"}
      </button>


      <span
        class="pricing ${pricing}"
      >
        ${
          pricing === "free"
            ? "مجاني"
            : "مدفوع"
        }
      </span>

    </div>

  `;


  /* Copy */

  card
    .querySelector(".copy-button")
    .addEventListener(
      "click",
      () => copyLink(url)
    );


  /* Favorite */

  card
    .querySelector(".favorite")
    .addEventListener(
      "click",
      () => {

        toggleFavorite(
          name,
          url
        );

      }
    );


  return card;

}


/* =========================================================
   17 — RENDER RESOURCES
========================================================= */

function renderResources() {

  elements.sections.innerHTML = "";

  let visibleResources = 0;


  resources.forEach(
    (category, categoryIndex) => {

      /* Filter links */

      const filteredLinks =
        category.links.filter(link => {

          const resource = {

            name: link[0],

            url: link[1],

            pricing: link[2],

            type: category.type,

            category: category.title

          };

          return (
            matchesFilter(resource) &&
            matchesSearch(resource)
          );

        });


      /* Hide empty categories */

      if (filteredLinks.length === 0) {
        return;
      }


      visibleResources +=
        filteredLinks.length;


      /* Create section */

      const section =
        document.createElement("section");

      section.className =
        "category";

      section.id =
        `category-${categoryIndex}`;


      /* Category header */

      section.innerHTML = `

        <div class="category-head">

          <div class="category-number">
            ${String(
              categoryIndex + 1
            ).padStart(2, "0")}
          </div>

          <h2 class="category-title">
            ${category.title}
          </h2>

          <span class="category-count">
            ${filteredLinks.length} مصدر
          </span>

        </div>

        <div class="grid"></div>

      `;


      const grid =
        section.querySelector(".grid");


      /* Create cards */

      filteredLinks.forEach(link => {

        const card =
          createResourceCard(
            link[0],
            link[1],
            link[2]
          );

        grid.appendChild(card);

      });


      elements.sections.appendChild(
        section
      );

    }
  );


  /* Empty state */

  if (visibleResources === 0) {

    elements.sections.innerHTML = `

      <div class="empty">

        <div class="empty__icon">
          ⌕
        </div>

        <strong>
          مفيش نتائج
        </strong>

        جرّب كلمة بحث مختلفة
        أو غيّر الفلتر.

      </div>

    `;

  }

}


/* =========================================================
   18 — SEARCH EVENT
========================================================= */

elements.searchInput.addEventListener(
  "input",
  () => {

    renderResources();

  }
);


/* =========================================================
   19 — INITIALIZE
========================================================= */

function initialize() {

  updateStatistics();

  renderCategoryNavigation();

  setupFilters();

  renderResources();

}


/* Start application */

initialize();