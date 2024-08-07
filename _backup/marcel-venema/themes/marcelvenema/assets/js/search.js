document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");
  let miniSearch;

  // Fetch and initialize MiniSearch
  fetch("/index.json")
    .then((response) => response.json())
    .then((data) => {
      miniSearch = new MiniSearch({
        fields: ["title", "summary"], // Kolom yang akan diindeks
        storeFields: [
          "title",
          "summary",
          "url",
          "author",
          "date",
          "readingtime",
        ], // Kolom yang akan ditampilkan di hasil pencarian
      });
      miniSearch.addAll(data);

      // Perform search if query exists in URL
      const params = new URLSearchParams(window.location.search);
      const query = params.get("query");
      if (query) {
        searchInput.value = query;
        performSearch(query);
      }
    });

  // Perform search when user types
  searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    performSearch(query);
  });

  function performSearch(query) {
    if (query && miniSearch) {
      const results = miniSearch.search(query);
      resultsContainer.innerHTML = "";
      if (results.length) {
        results.forEach((result) => {
          const resultItem = document.createElement("div");
          const highlightedTitle = highlightText(result.title, query);
          const highlightedSummary = highlightText(result.summary, query);
          resultItem.innerHTML = `<div class="search-result__card border border-solid border-[#00000040] pt-[28px] px-[18px] pb-[25px] mb-5"> <div class="mb-8"> <div class="pt-[11px] px-[11px] mb-6"> <div class="flex items-center space-x-[10px]"> <div class="flex-none w-[32px]"> <div class="w-[32px] h-[32px] rounded-full overflow-hidden"> <img src="/authors/marcel-venema/profile_hu0e7051a1bf2d22eebc6d18caf0949420_2311_32x0_resize_q100_h2_box.webp" class="w-full h-auto object-cover object-center rounded-[16px]" alt="profile.jpeg" width="32" height="32"> </div> </div> <div> <div class="flex items-center"> <h4 class="text-xs text-black leading-[1.25] mb-0">${result.author}</h4> <span><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" class="blog-post-post-list-description-fill" style="fill-rule: evenodd;"> <path d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z"> </path> </svg> </span> </div> <div class="text-xs text-black leading-[1.25] flex items-center"> <span class="text-xs">${result.date}</span> <span class="w-[4px] h-[4px] bg-black rounded-[2px] mx-2"></span> <span>${result.readingtime} min</span> </div> </div> </div> </div> <div class="relative"> <div class="px-[11px]"> <a class="group" href="${result.url}"> <h3 class="text-[#101010] group-hover:text-[#d49c59] text-[1.25rem] lg:text-[1.75rem] font-heading font-bold leading-[1.25] mb-2">${highlightedTitle}</h3> </a> </div> <p class="text-base lg:text-[1.0625rem] text-[#101010] leading-[1.25] group-hover:text-[#d49c59] mb-0">${highlightedSummary}</p> </div> </div> <div class="border-t border-solid border-gray-300 pt-2"> <a class="text-black text-xs hover:text-[#d49c59]" href="${result.url}">Read More</a> </div> </div>`;
          resultsContainer.appendChild(resultItem);
        });
      } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
      }
    } else {
      resultsContainer.innerHTML = "";
    }
  }

  function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
});
