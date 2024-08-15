const removeSearchHistory = () => {
    // Retrieve the search history array from local storage
    let searchHistory = JSON.parse(localStorage.getItem("vibesearch-history")) || [];

    // Find the index of the item "pants" in the search history array
    const indexToRemove = searchHistory.indexOf("pants");
    
    // If "pants" exists in the array, remove it
    if (indexToRemove !== -1) {
        searchHistory.splice(indexToRemove, 1); // Remove the item from the array
    }

    console.log("Updated Search History:", searchHistory);
};

export default removeSearchHistory;
