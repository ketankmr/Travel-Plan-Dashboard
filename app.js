// Persistent Data Storage Configuration
const STORAGE_CONFIG = {
    key: 'diy_travel_dashboard',
    autoSaveDelay: 500, // milliseconds
    version: '1.0'
};

// Trip data and configuration
let EXCHANGE_RATE = 90; // EUR to INR - editable
let CURRENT_CURRENCY = 'EUR'; // Default currency

// Currency configuration
const CURRENCIES = {
    EUR: { symbol: '€', label: 'EUR' },
    INR: { symbol: '₹', label: 'INR' }
};

// Updated daily itinerary data with new 10-day routing
const dailyItinerary = [
    {
        day: 1,
        date: "Day 1",
        location: "Bangalore → Helsinki",
        title: "International Travel Day",
        activities: [
            "Flight departure from Bangalore",
            "International flight to Helsinki",
            "Arrival at Helsinki-Vantaa Airport",
            "Immigration and customs",
            "Hotel check-in and rest"
        ],
        accommodation: "Helsinki Hotel",
        meals: ["In-flight meals", "Light dinner"],
        transport: "International flight + airport transfer",
        costItems: ["Bangalore-Helsinki flight", "Airport transfer", "Helsinki Hotel night 1"],
        tips: "Allow time for jet lag recovery, arrive evening",
        weather: "Pack layers for Finnish climate",
        dailyCostEur: 425
    },
    {
        day: 2,
        date: "Day 2", 
        location: "Helsinki",
        title: "Helsinki City Exploration",
        activities: [
            "Hop-on-Hop-off bus tour (24h pass)",
            "Temppeliaukio Rock Church visit",
            "Sibelius Monument",
            "Senate Square and Cathedral",
            "Market Square exploration"
        ],
        accommodation: "Helsinki Hotel",
        meals: ["Breakfast (hotel)", "Lunch (own)", "Dinner (own)"],
        transport: "Public transport card + bus tour",
        costItems: ["Hop-on bus tour", "Rock Church entry", "Local transport card"],
        tips: "Download HSL app for local transport",
        weather: "Comfortable walking shoes essential",
        dailyCostEur: 43
    },
    {
        day: 3,
        date: "Day 3",
        location: "Helsinki + Porvoo",
        title: "Porvoo Historic Town Day Trip",
        activities: [
            "Morning bus to Porvoo (1 hour)",
            "Historic Old Town walking tour",
            "Colorful riverside wooden houses",
            "Porvoo Cathedral visit",
            "Return to Helsinki evening"
        ],
        accommodation: "Helsinki Hotel",
        meals: ["Breakfast (hotel)", "Lunch (Porvoo)", "Dinner (Helsinki)"],
        transport: "Bus day trip to Porvoo",
        costItems: ["Porvoo day trip", "Local transport"],
        tips: "Historic town 50km from Helsinki, great for photos",
        weather: "Bring camera for colorful houses",
        dailyCostEur: 20
    },
    {
        day: 4,
        date: "Day 4",
        location: "Helsinki → Rovaniemi", 
        title: "Journey to Lapland",
        activities: [
            "Morning departure on Santa Claus Express train",
            "Scenic 8-10 hour train journey through Finnish countryside",
            "Arrival in Rovaniemi evening",
            "Hotel check-in",
            "Evening Northern Lights tour with bonfire"
        ],
        accommodation: "Rovaniemi Hotel",
        meals: ["Breakfast (hotel)", "Lunch (train)", "Dinner (tour)"],
        transport: "Night train with 3-berth sleeper cabin",
        costItems: ["Train Helsinki-Rovaniemi", "Rovaniemi Hotel", "Northern Lights tour 1"],
        tips: "Book sleeper cabin with shower for comfort",
        weather: "Pack warm clothes for Northern Lights",
        dailyCostEur: 287
    },
    {
        day: 5,
        date: "Day 5",
        location: "Rovaniemi",
        title: "Santa Claus Village Adventure",
        activities: [
            "Visit Santa Claus Village",
            "Cross the Arctic Circle",
            "Meet Santa Claus and photo session", 
            "Reindeer sleigh ride experience",
            "Husky dog sleigh adventure",
            "Shop for Arctic souvenirs"
        ],
        accommodation: "Rovaniemi Hotel",
        meals: ["Breakfast (hotel)", "Lunch (village)", "Dinner (own)"],
        transport: "Local bus to/from Santa Village",
        costItems: ["Santa Village + sleigh rides", "Local transport"],
        tips: "Bring camera for Arctic Circle certificate",
        weather: "Thermal layers and winter boots recommended",
        dailyCostEur: 110
    },
    {
        day: 6,
        date: "Day 6",
        location: "Rovaniemi",
        title: "Free Lapland Day",
        activities: [
            "Free morning for rest or exploration",
            "Optional: Arktikum Science Center visit",
            "Optional: Local reindeer farm visit",
            "Afternoon leisure time",
            "Second Northern Lights hunting tour"
        ],
        accommodation: "Rovaniemi Hotel", 
        meals: ["Breakfast (hotel)", "Lunch (own)", "Dinner (own)"],
        transport: "Walking or local bus",
        costItems: ["Optional activities", "Northern Lights tour 2"],
        tips: "Two Northern Lights tours increase chances of sighting",
        weather: "Check aurora forecast apps like Aurora Now",
        dailyCostEur: 99
    },
    {
        day: 7,
        date: "Day 7",
        location: "Rovaniemi → Stockholm",
        title: "Flight to Stockholm",
        activities: [
            "Morning flight Rovaniemi to Stockholm",
            "Direct flight via Helsinki connection",
            "Arrival in Stockholm",
            "Airport transfer to Stockholm hotel",
            "Hotel check-in and city orientation"
        ],
        accommodation: "Stockholm Hotel",
        meals: ["Breakfast (hotel)", "In-flight snack", "Dinner (own)"],
        transport: "Rovaniemi-Stockholm flight + transfers",
        costItems: ["Rovaniemi-Stockholm flight", "Stockholm Hotel", "Airport transfers"],
        tips: "Direct routing saves time vs returning to Helsinki",
        weather: "Swedish weather similar to Finland",
        dailyCostEur: 220
    },
    {
        day: 8,
        date: "Day 8",
        location: "Stockholm", 
        title: "Stockholm Historic Tour",
        activities: [
            "Old Town (Gamla Stan) walking tour",
            "Vasa Museum visit with skip-the-line entry",
            "Royal Palace exterior",
            "Stortorget Square",
            "Evening at leisure"
        ],
        accommodation: "Stockholm Hotel",
        meals: ["Breakfast (hotel)", "Lunch (own)", "Dinner (own)"],
        transport: "Stockholm public transport card",
        costItems: ["Old Town walking tour", "Transport card"],
        tips: "Vasa Museum is must-see, book ahead",
        weather: "Comfortable walking attire",
        dailyCostEur: 70
    },
    {
        day: 9,
        date: "Day 9",
        location: "Stockholm",
        title: "Stockholm Free Day",
        activities: [
            "Full day free for shopping and exploration",
            "Drottninggatan shopping street",
            "Local cafes and restaurants",
            "Optional archipelago boat tour",
            "Evening pub crawl tour"
        ],
        accommodation: "Stockholm Hotel",
        meals: ["Breakfast (hotel)", "Lunch (own)", "Dinner (own)"],
        transport: "Public transport",
        costItems: ["Optional activities", "Pub crawl"],
        tips: "Download SL app for Stockholm public transport",
        weather: "Enjoy Swedish summer/autumn weather",
        dailyCostEur: 30
    },
    {
        day: 10,
        date: "Day 10",
        location: "Stockholm → Bangalore",
        title: "International Departure",
        activities: [
            "Final morning shopping or sightseeing",
            "Hotel check-out",
            "Airport transfer",
            "International flight departure to Bangalore",
            "Journey home"
        ],
        accommodation: "Flight",
        meals: ["Breakfast (hotel)", "In-flight meals"],
        transport: "Airport transfer + international flight",
        costItems: ["Stockholm-Bangalore flight", "Airport transfer"],
        tips: "Allow 3 hours for international check-in",
        weather: "Pack appropriately for return to Indian climate",
        dailyCostEur: 345
    }
];

// Default trip items data
const DEFAULT_TRIP_ITEMS = [
    {
        id: 1,
        category: "International Flights",
        name: "Bangalore to Helsinki Flight",
        duration: "One way",
        unitCostEur: 310,
        unitCostInr: 28000,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.skyscanner.co.in/routes/blr/hel/bengaluru-to-helsinki-vantaa.html",
        notes: "International arrival flight",
        booked: false,
        isDefault: true
    },
    {
        id: 2,
        category: "International Flights", 
        name: "Stockholm to Bangalore Flight",
        duration: "One way",
        unitCostEur: 345,
        unitCostInr: 31000,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.skyscanner.co.in/routes/stoc/blr/stockholm-to-bengaluru.html",
        notes: "International return flight",
        booked: false,
        isDefault: true
    },
    {
        id: 3,
        category: "Helsinki",
        name: "Helsinki Hotel",
        duration: "3 nights",
        unitCostEur: 115,
        unitCostInr: 10350,
        quantity: 3,
        shared: true,
        bookingUrl: "https://www.booking.com/city/fi/helsinki.html",
        notes: "Central location, breakfast included",
        booked: false,
        isDefault: true
    },
    {
        id: 4,
        category: "Helsinki",
        name: "Hop-on Hop-off Bus",
        duration: "24h pass",
        unitCostEur: 35,
        unitCostInr: 3150,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.klook.com/en-IN/activity/3428-hop-on-hop-off-bus-helsinki/",
        notes: "Covers main attractions",
        booked: false,
        isDefault: true
    },
    {
        id: 5,
        category: "Helsinki",
        name: "Rock Church Entry",
        duration: "Single visit",
        unitCostEur: 8,
        unitCostInr: 720,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.temppeliaukionkirkko.fi/",
        notes: "Famous underground church",
        booked: false,
        isDefault: true
    },
    {
        id: 6,
        category: "Helsinki",
        name: "Porvoo Day Trip",
        duration: "Full day",
        unitCostEur: 20,
        unitCostInr: 1800,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.viator.com/en-IN/tours/Helsinki/Porvoo-Half-Day-Sightseeing/d803-46188P38",
        notes: "Historic town visit by bus",
        booked: false,
        isDefault: true
    },
    {
        id: 7,
        category: "Helsinki",
        name: "Local Transport Card",
        duration: "3 days",
        unitCostEur: 20,
        unitCostInr: 1800,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.hsl.fi/en/tickets-and-fares",
        notes: "Metro, tram, bus access",
        booked: false,
        isDefault: true
    },
    {
        id: 8,
        category: "Transport",
        name: "Night Train Helsinki-Rovaniemi",
        duration: "One way only",
        unitCostEur: 148,
        unitCostInr: 13320,
        quantity: 1,
        shared: true,
        bookingUrl: "https://www.vr.fi/en",
        notes: "3-berth sleeper cabin with shower",
        booked: false,
        isDefault: true
    },
    {
        id: 9,
        category: "Lapland",
        name: "Rovaniemi Hotel",
        duration: "3 nights",
        unitCostEur: 140,
        unitCostInr: 12600,
        quantity: 3,
        shared: true,
        bookingUrl: "https://www.booking.com/city/fi/rovaniemi.html",
        notes: "Central Rovaniemi location",
        booked: false,
        isDefault: true
    },
    {
        id: 10,
        category: "Lapland",
        name: "Northern Lights Tour",
        duration: "Evening tour x2",
        unitCostEur: 99,
        unitCostInr: 8910,
        quantity: 2,
        shared: false,
        bookingUrl: "https://www.arcticlifestyle.fi/",
        notes: "Small group, photos included",
        booked: false,
        isDefault: true
    },
    {
        id: 11,
        category: "Lapland",
        name: "Santa Village + Sleigh Rides",
        duration: "Full day",
        unitCostEur: 110,
        unitCostInr: 9900,
        quantity: 1,
        shared: false,
        bookingUrl: "https://santaclausvillage.info/",
        notes: "Reindeer + husky combo",
        booked: false,
        isDefault: true
    },
    {
        id: 12,
        category: "Transport",
        name: "Rovaniemi-Stockholm Flight", 
        duration: "Direct flight",
        unitCostEur: 100,
        unitCostInr: 9000,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.skyscanner.co.in/routes/rvn/stoc/rovaniemi-to-stockholm.html",
        notes: "Finnair connection via Helsinki",
        booked: false,
        isDefault: true
    },
    {
        id: 13,
        category: "Stockholm",
        name: "Stockholm Hotel",
        duration: "3 nights",
        unitCostEur: 120,
        unitCostInr: 10800,
        quantity: 3,
        shared: true,
        bookingUrl: "https://www.booking.com/city/se/stockholm.html",
        notes: "Central Stockholm location",
        booked: false,
        isDefault: true
    },
    {
        id: 14,
        category: "Stockholm",
        name: "Old Town Walking Tour",
        duration: "3 hours",
        unitCostEur: 55,
        unitCostInr: 4950,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.getyourguide.com/stockholm-l50/",
        notes: "Includes Vasa Museum",
        booked: false,
        isDefault: true
    },
    {
        id: 15,
        category: "Stockholm",
        name: "Stockholm Transport Card",
        duration: "3 days",
        unitCostEur: 15,
        unitCostInr: 1350,
        quantity: 1,
        shared: false,
        bookingUrl: "https://sl.se/en/",
        notes: "Metro, bus, tram access",
        booked: false,
        isDefault: true
    },
    {
        id: 16,
        category: "Stockholm",
        name: "Pub Crawl",
        duration: "Evening",
        unitCostEur: 30,
        unitCostInr: 2700,
        quantity: 1,
        shared: false,
        bookingUrl: "https://www.viator.com/Stockholm-tours/Bar-Club-and-Pub-Tours/d907-g6-c18",
        notes: "Social evening activity",
        booked: false,
        isDefault: true
    }
];

// Initialize trip items from defaults
let tripItems = [...DEFAULT_TRIP_ITEMS];

// State management
let currentGroupSize = 3;
let nextItemId = 17;
let currentTab = 'overview';
let saveTimeout = null;
let isStorageAvailable = true;

// Persistent Data Management
class PersistentDataManager {
    constructor() {
        this.storageKey = STORAGE_CONFIG.key;
        this.checkStorageAvailability();
    }

    checkStorageAvailability() {
        try {
            const test = 'storage_test';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            this.isAvailable = true;
            console.log('✅ Local storage available');
        } catch (error) {
            this.isAvailable = false;
            isStorageAvailable = false;
            console.warn('⚠️ Local storage not available:', error);
            this.showStorageError();
        }
    }

    showStorageError() {
        const statusEl = document.getElementById('storage-status');
        if (statusEl) {
            statusEl.textContent = 'Storage unavailable';
            statusEl.style.color = 'var(--color-error)';
        }
    }

    save(data) {
        if (!this.isAvailable) return false;

        try {
            const saveData = {
                version: STORAGE_CONFIG.version,
                timestamp: Date.now(),
                data: data
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(saveData));
            this.updateSaveStatus('saved');
            this.updateDataSize();
            console.log('💾 Data saved to localStorage');
            return true;
        } catch (error) {
            console.error('Save failed:', error);
            this.updateSaveStatus('error');
            return false;
        }
    }

    load() {
        if (!this.isAvailable) return null;

        try {
            const stored = localStorage.getItem(this.storageKey);
            if (!stored) return null;

            const saveData = JSON.parse(stored);
            console.log('📖 Loaded data from storage:', saveData.timestamp);
            return saveData.data;
        } catch (error) {
            console.error('Load failed:', error);
            return null;
        }
    }

    clear() {
        if (!this.isAvailable) return false;

        try {
            localStorage.removeItem(this.storageKey);
            console.log('🗑️ Storage cleared');
            return true;
        } catch (error) {
            console.error('Clear failed:', error);
            return false;
        }
    }

    getDataSize() {
        if (!this.isAvailable) return '0 KB';

        try {
            const data = localStorage.getItem(this.storageKey);
            if (!data) return '0 KB';
            
            const sizeInBytes = new Blob([data]).size;
            if (sizeInBytes < 1024) return `${sizeInBytes} B`;
            return `${(sizeInBytes / 1024).toFixed(1)} KB`;
        } catch (error) {
            return 'Unknown';
        }
    }

    updateDataSize() {
        const sizeEl = document.getElementById('data-size');
        if (sizeEl) {
            sizeEl.textContent = this.getDataSize();
        }
    }

    updateSaveStatus(status) {
        const indicator = document.getElementById('save-indicator');
        const saveText = document.getElementById('save-text');
        const lastSavedTime = document.getElementById('last-saved-time');
        
        if (!indicator || !saveText) return;

        // Remove existing status classes
        indicator.classList.remove('saving', 'error');
        
        switch (status) {
            case 'saving':
                indicator.classList.add('saving');
                saveText.textContent = 'Saving...';
                break;
            case 'saved':
                saveText.textContent = 'All changes saved';
                if (lastSavedTime) {
                    lastSavedTime.textContent = new Date().toLocaleTimeString();
                }
                break;
            case 'error':
                indicator.classList.add('error');
                saveText.textContent = 'Save failed';
                break;
        }
    }

    getLastSavedTime() {
        if (!this.isAvailable) return null;

        try {
            const stored = localStorage.getItem(this.storageKey);
            if (!stored) return null;

            const saveData = JSON.parse(stored);
            return new Date(saveData.timestamp);
        } catch (error) {
            return null;
        }
    }
}

// Initialize persistent data manager
const dataManager = new PersistentDataManager();

// Auto-save functionality with debouncing
function scheduleAutoSave() {
    if (saveTimeout) clearTimeout(saveTimeout);
    
    dataManager.updateSaveStatus('saving');
    
    saveTimeout = setTimeout(() => {
        const success = saveData();
        if (success) {
            console.log('💾 Auto-save completed');
        }
    }, STORAGE_CONFIG.autoSaveDelay);
}

function saveData() {
    const dataToSave = {
        tripItems: tripItems,
        userPreferences: {
            currency: CURRENT_CURRENCY,
            exchangeRate: EXCHANGE_RATE,
            groupSize: currentGroupSize
        },
        customItems: tripItems.filter(item => !item.isDefault),
        lastSaved: Date.now()
    };

    return dataManager.save(dataToSave);
}

function loadData() {
    const savedData = dataManager.load();
    if (!savedData) {
        console.log('📝 No saved data found, using defaults');
        updatePersistenceStatus();
        return false;
    }

    try {
        // Load user preferences
        if (savedData.userPreferences) {
            CURRENT_CURRENCY = savedData.userPreferences.currency || 'EUR';
            EXCHANGE_RATE = savedData.userPreferences.exchangeRate || 90;
            currentGroupSize = savedData.userPreferences.groupSize || 3;
        }

        // Load trip items
        if (savedData.tripItems && Array.isArray(savedData.tripItems)) {
            tripItems = savedData.tripItems;
            
            // Ensure next ID is higher than any existing ID
            const maxId = Math.max(...tripItems.map(item => item.id || 0));
            nextItemId = maxId + 1;
        }

        console.log('✅ Data loaded successfully');
        updatePersistenceStatus();
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

function updatePersistenceStatus() {
    const lastSaved = dataManager.getLastSavedTime();
    const lastSavedEl = document.getElementById('last-saved-time');
    const lastBackupEl = document.getElementById('last-backup');
    
    if (lastSavedEl) {
        if (lastSaved) {
            lastSavedEl.textContent = lastSaved.toLocaleString();
        } else {
            lastSavedEl.textContent = 'Never';
        }
    }
    
    if (lastBackupEl) {
        const backupTime = localStorage.getItem('last_backup_time');
        if (backupTime) {
            lastBackupEl.textContent = new Date(parseInt(backupTime)).toLocaleString();
        } else {
            lastBackupEl.textContent = 'Never';
        }
    }

    dataManager.updateDataSize();
}

// Export/Import functionality
function exportSettings() {
    const exportData = {
        version: STORAGE_CONFIG.version,
        exportDate: new Date().toISOString(),
        tripItems: tripItems,
        userPreferences: {
            currency: CURRENT_CURRENCY,
            exchangeRate: EXCHANGE_RATE,
            groupSize: currentGroupSize
        }
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `diy-travel-settings-${new Date().toISOString().split('T')[0]}.json`;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    // Update last backup time
    localStorage.setItem('last_backup_time', Date.now().toString());
    updatePersistenceStatus();
    
    console.log('📤 Settings exported successfully');
    alert('Settings exported successfully! File saved to downloads.');
}

function importSettings(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const importData = JSON.parse(e.target.result);
            
            if (!importData.version || !importData.tripItems) {
                throw new Error('Invalid file format');
            }
            
            // Restore data
            tripItems = importData.tripItems || DEFAULT_TRIP_ITEMS;
            
            if (importData.userPreferences) {
                CURRENT_CURRENCY = importData.userPreferences.currency || 'EUR';
                EXCHANGE_RATE = importData.userPreferences.exchangeRate || 90;
                currentGroupSize = importData.userPreferences.groupSize || 3;
            }
            
            // Update next ID
            const maxId = Math.max(...tripItems.map(item => item.id || 0));
            nextItemId = maxId + 1;
            
            // Update UI
            updateUIFromData();
            scheduleAutoSave();
            
            console.log('📥 Settings imported successfully');
            alert('Settings imported successfully! All your data has been restored.');
            
        } catch (error) {
            console.error('Import failed:', error);
            alert('Import failed: Invalid file format or corrupted data.');
        }
    };
    
    reader.readAsText(file);
}

function updateUIFromData() {
    // Update form controls
    const currencySelector = document.getElementById('currency-selector');
    const exchangeRateInput = document.getElementById('exchange-rate');
    const groupSizeSelect = document.getElementById('group-size');
    
    if (currencySelector) currencySelector.value = CURRENT_CURRENCY;
    if (exchangeRateInput) exchangeRateInput.value = EXCHANGE_RATE;
    if (groupSizeSelect) groupSizeSelect.value = currentGroupSize;
    
    // Update displays
    updateCurrencyLabels();
    updateSummary();
    renderTable();
    renderItinerary();
    updateTimestamp();
}

function resetAllData() {
    // Reset to defaults
    tripItems = [...DEFAULT_TRIP_ITEMS];
    CURRENT_CURRENCY = 'EUR';
    EXCHANGE_RATE = 90;
    currentGroupSize = 3;
    nextItemId = 17;
    
    // Clear storage
    dataManager.clear();
    localStorage.removeItem('last_backup_time');
    
    // Update UI
    updateUIFromData();
    updatePersistenceStatus();
    
    console.log('🔄 All data reset to defaults');
}

// Global functions for onclick handlers
window.toggleBookingStatus = function(itemId) {
    const item = tripItems.find(i => i.id === itemId);
    if (item) {
        item.booked = !item.booked;
        updateSummary();
        scheduleAutoSave();
        
        // Add visual feedback
        const row = document.querySelector(`tr[data-item-id="${itemId}"]`);
        if (row) {
            row.classList.add('pulse');
            setTimeout(() => row.classList.remove('pulse'), 600);
        }
    }
};

window.deleteItem = function(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        tripItems = tripItems.filter(item => item.id !== itemId);
        renderTable();
        updateSummary();
        scheduleAutoSave();
    }
};

window.toggleDayDetails = function(dayNumber) {
    const dayCard = document.querySelector(`[data-day="${dayNumber}"]`);
    if (dayCard) {
        dayCard.classList.toggle('expanded');
    }
};

// Currency formatting functions
function formatCurrency(amount, currency) {
    const { symbol } = CURRENCIES[currency];
    if (currency === 'EUR') {
        return `${symbol}${amount.toFixed(2)}`;
    } else {
        return `${symbol}${Math.round(amount).toLocaleString('en-IN')}`;
    }
}

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return amount;
    
    if (fromCurrency === 'EUR' && toCurrency === 'INR') {
        return amount * EXCHANGE_RATE;
    } else if (fromCurrency === 'INR' && toCurrency === 'EUR') {
        return amount / EXCHANGE_RATE;
    }
    return amount;
}

function getItemCost(item, currency) {
    if (currency === 'EUR') {
        return item.unitCostEur;
    } else {
        return item.unitCostInr;
    }
}

function updateCurrencyLabels() {
    const currencyLabel = CURRENCIES[CURRENT_CURRENCY].label;
    
    // Update table headers
    const priceHeader = document.getElementById('price-header');
    const totalHeader = document.getElementById('total-header');
    const perPersonHeader = document.getElementById('per-person-header');
    const tableCurrency = document.getElementById('table-currency');
    const instructionsCurrency = document.getElementById('instructions-currency');
    const itineraryCurrency = document.getElementById('itinerary-currency');
    const modalCurrency = document.getElementById('modal-currency');
    
    if (priceHeader) priceHeader.textContent = `Price (${currencyLabel})`;
    if (totalHeader) totalHeader.textContent = `Total (${currencyLabel})`;
    if (perPersonHeader) perPersonHeader.textContent = `Per Person (${currencyLabel})`;
    if (tableCurrency) tableCurrency.textContent = currencyLabel;
    if (instructionsCurrency) instructionsCurrency.textContent = currencyLabel;
    if (itineraryCurrency) itineraryCurrency.textContent = currencyLabel;
    if (modalCurrency) modalCurrency.textContent = currencyLabel;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing DIY Travel Dashboard with persistent storage...');
    
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
        // Load saved data first  
        const dataLoaded = loadData();
        
        // Initialize UI
        setupEventListeners();
        updateUIFromData();
        switchTab('overview');
        updatePersistenceStatus();
        
        if (dataLoaded) {
            console.log('✅ Application initialized with saved data');
        } else {
            console.log('✅ Application initialized with default data');
        }
    }, 100);
});

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Tab navigation - FIXED
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.dataset.tab;
            console.log('Tab clicked:', tabName);
            switchTab(tabName);
        });
    });

    // Currency selector - FIXED
    const currencySelector = document.getElementById('currency-selector');
    if (currencySelector) {
        console.log('Setting up currency selector');
        currencySelector.addEventListener('change', function() {
            const newCurrency = this.value;
            console.log('Currency changed from', CURRENT_CURRENCY, 'to', newCurrency);
            CURRENT_CURRENCY = newCurrency;
            updateCurrencyLabels();
            updateSummary();
            renderTable();
            renderItinerary();
            scheduleAutoSave();
            
            // Update converter if values exist
            const converterEur = document.getElementById('converter-eur');
            const converterInr = document.getElementById('converter-inr');
            if (converterEur && converterEur.value) {
                const eurValue = parseFloat(converterEur.value);
                if (!isNaN(eurValue)) {
                    converterInr.value = Math.round(convertCurrency(eurValue, 'EUR', 'INR'));
                }
            }
        });
    } else {
        console.error('Currency selector not found');
    }

    // Exchange rate control
    const exchangeRateInput = document.getElementById('exchange-rate');
    if (exchangeRateInput) {
        exchangeRateInput.addEventListener('focus', function() {
            this.select();
        });
        
        exchangeRateInput.addEventListener('input', function() {
            const newRate = parseFloat(this.value);
            if (newRate > 0 && newRate !== EXCHANGE_RATE) {
                EXCHANGE_RATE = newRate;
                // Update all INR values based on EUR values
                tripItems.forEach(item => {
                    item.unitCostInr = Math.round(item.unitCostEur * EXCHANGE_RATE);
                });
                updateSummary();
                renderTable();
                renderItinerary();
                updateTimestamp();
                scheduleAutoSave();
                
                // Update converter if values exist
                const converterEur = document.getElementById('converter-eur');
                const converterInr = document.getElementById('converter-inr');
                if (converterEur && converterEur.value) {
                    const eurValue = parseFloat(converterEur.value);
                    if (!isNaN(eurValue)) {
                        converterInr.value = Math.round(convertCurrency(eurValue, 'EUR', 'INR'));
                    }
                }
            }
        });
    }

    // Reset exchange rate button
    const resetRateBtn = document.getElementById('reset-rate-btn');
    if (resetRateBtn) {
        resetRateBtn.addEventListener('click', function() {
            EXCHANGE_RATE = 90;
            if (exchangeRateInput) {
                exchangeRateInput.value = 90;
            }
            tripItems.forEach(item => {
                item.unitCostInr = Math.round(item.unitCostEur * EXCHANGE_RATE);
            });
            updateSummary();
            renderTable();
            renderItinerary();
            updateTimestamp();
            scheduleAutoSave();
        });
    }

    // Reset all data button - FIXED
    const resetAllBtn = document.getElementById('reset-all-btn');
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', function() {
            console.log('Reset all button clicked');
            showResetModal();
        });
    } else {
        console.error('Reset all button not found');
    }

    // Currency converter
    const converterEur = document.getElementById('converter-eur');
    const converterInr = document.getElementById('converter-inr');
    
    if (converterEur) {
        converterEur.addEventListener('focus', function() {
            this.select();
        });
        
        converterEur.addEventListener('input', function() {
            const eurValue = parseFloat(this.value);
            if (!isNaN(eurValue) && eurValue >= 0) {
                converterInr.value = Math.round(convertCurrency(eurValue, 'EUR', 'INR'));
            } else if (this.value === '') {
                converterInr.value = '';
            }
        });
    }
    
    if (converterInr) {
        converterInr.addEventListener('focus', function() {
            this.select();
        });
        
        converterInr.addEventListener('input', function() {
            const inrValue = parseFloat(this.value);
            if (!isNaN(inrValue) && inrValue >= 0) {
                converterEur.value = convertCurrency(inrValue, 'INR', 'EUR').toFixed(2);
            } else if (this.value === '') {
                converterEur.value = '';
            }
        });
    }

    // Group size change
    const groupSizeSelect = document.getElementById('group-size');
    if (groupSizeSelect) {
        groupSizeSelect.addEventListener('change', function() {
            currentGroupSize = parseInt(this.value);
            updateSummary();
            renderTable();
            renderItinerary();
            scheduleAutoSave();
        });
    }

    // Export/Import buttons - FIXED
    const exportBtn = document.getElementById('export-settings-btn');
    const importBtn = document.getElementById('import-settings-btn');
    const importFile = document.getElementById('import-file');

    if (exportBtn) {
        console.log('Setting up export button');
        exportBtn.addEventListener('click', function() {
            console.log('Export button clicked');
            exportSettings();
        });
    } else {
        console.error('Export button not found');
    }

    if (importBtn && importFile) {
        importBtn.addEventListener('click', function() {
            importFile.click();
        });

        importFile.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                importSettings(file);
            }
            // Reset file input
            this.value = '';
        });
    }

    // Add item button
    const addItemBtn = document.getElementById('add-item-btn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', showAddItemModal);
    }

    // Export CSV button
    const exportCsvBtn = document.getElementById('export-csv-btn');
    if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', exportToCSV);
    }

    // Modal controls - FIXED
    setupModalEventListeners();
    
    console.log('Event listeners setup complete');
}

function setupModalEventListeners() {
    // Add Item Modal
    const modalClose = document.getElementById('modal-close');
    const modalCancel = document.getElementById('modal-cancel');
    const modalSave = document.getElementById('modal-save');
    const addItemModal = document.getElementById('add-item-modal');

    if (modalClose) modalClose.addEventListener('click', hideAddItemModal);
    if (modalCancel) modalCancel.addEventListener('click', hideAddItemModal);
    if (modalSave) modalSave.addEventListener('click', saveNewItem);

    if (addItemModal) {
        const backdrop = addItemModal.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', hideAddItemModal);
        }
    }

    const addItemForm = document.getElementById('add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveNewItem();
        });
    }

    // Reset Modal - FIXED
    const resetModalClose = document.getElementById('reset-modal-close');
    const resetCancel = document.getElementById('reset-cancel');
    const exportBeforeReset = document.getElementById('export-before-reset');
    const confirmReset = document.getElementById('confirm-reset');
    const resetModal = document.getElementById('reset-modal');

    if (resetModalClose) {
        resetModalClose.addEventListener('click', hideResetModal);
    } else {
        console.error('Reset modal close button not found');
    }
    
    if (resetCancel) {
        resetCancel.addEventListener('click', hideResetModal);
    }
    
    if (exportBeforeReset) {
        exportBeforeReset.addEventListener('click', function() {
            exportSettings();
            hideResetModal();
        });
    }
    
    if (confirmReset) {
        confirmReset.addEventListener('click', function() {
            resetAllData();
            hideResetModal();
            alert('All data has been reset to defaults.');
        });
    }

    if (resetModal) {
        const backdrop = resetModal.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', hideResetModal);
        }
    }
}

function showResetModal() {
    console.log('Showing reset modal');
    const modal = document.getElementById('reset-modal');
    if (modal) {
        modal.classList.remove('hidden');
        console.log('Reset modal shown');
    } else {
        console.error('Reset modal not found');
    }
}

function hideResetModal() {
    const modal = document.getElementById('reset-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function updateTimestamp() {
    const timestamp = document.getElementById('rate-timestamp');
    if (timestamp) {
        const now = new Date();
        timestamp.textContent = now.toLocaleTimeString();
    }
}

function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Update tab buttons
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update tab content - FIXED
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.id === `${tabName}-tab`) {
            content.classList.add('active');
            content.style.display = 'block';
        } else {
            content.classList.remove('active');
            content.style.display = 'none';
        }
    });

    currentTab = tabName;
    
    // Re-render content for active tab if needed
    if (tabName === 'itinerary') {
        renderItinerary();
    } else if (tabName === 'costs') {
        renderTable();
    }
    
    console.log('Tab switched to:', tabName);
}

function calculateTotalCost(item, currency) {
    const unitCost = getItemCost(item, currency);
    return unitCost * item.quantity;
}

function calculatePerPersonCost(item, currency) {
    const totalCost = calculateTotalCost(item, currency);
    if (item.shared) {
        return totalCost / currentGroupSize;
    }
    return totalCost;
}

function calculateGrandTotal(currency) {
    return tripItems.reduce((total, item) => {
        return total + calculatePerPersonCost(item, currency);
    }, 0);
}

function calculateGroupTotal(currency) {
    return tripItems.reduce((total, item) => {
        const itemTotal = calculateTotalCost(item, currency);
        if (item.shared) {
            return total + itemTotal;
        } else {
            return total + (itemTotal * currentGroupSize);
        }
    }, 0);
}

function updateSummary() {
    const totalPerPerson = calculateGrandTotal(CURRENT_CURRENCY);
    const groupTotal = calculateGroupTotal(CURRENT_CURRENCY);
    const bookedCount = tripItems.filter(item => item.booked).length;
    const totalCount = tripItems.length;
    
    // Calculate international flights cost
    const internationalFlights = tripItems.filter(item => item.category === 'International Flights');
    const internationalCost = internationalFlights.reduce((total, item) => {
        return total + calculatePerPersonCost(item, CURRENT_CURRENCY);
    }, 0);

    // Update header stats
    const totalPerPersonEl = document.getElementById('total-per-person');
    if (totalPerPersonEl) totalPerPersonEl.textContent = formatCurrency(totalPerPerson, CURRENT_CURRENCY);

    // Update summary cards
    const totalCostEl = document.getElementById('total-cost');
    const costPerPersonEl = document.getElementById('cost-per-person');
    const bookedCountEl = document.getElementById('booked-count');
    const totalCountEl = document.getElementById('total-count');
    const internationalCostEl = document.getElementById('international-cost');

    if (totalCostEl) totalCostEl.textContent = formatCurrency(groupTotal, CURRENT_CURRENCY);
    if (costPerPersonEl) costPerPersonEl.textContent = formatCurrency(totalPerPerson, CURRENT_CURRENCY);
    if (bookedCountEl) bookedCountEl.textContent = bookedCount;
    if (totalCountEl) totalCountEl.textContent = totalCount;
    if (internationalCostEl) internationalCostEl.textContent = formatCurrency(internationalCost, CURRENT_CURRENCY);
}

function renderItinerary() {
    const timeline = document.getElementById('itinerary-timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    dailyItinerary.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.dataset.day = day.day;

        const perPersonCost = convertCurrency(day.dailyCostEur, 'EUR', CURRENT_CURRENCY);
        
        dayCard.innerHTML = `
            <div class="day-header" onclick="toggleDayDetails(${day.day})">
                <div class="day-info">
                    <div class="day-number">${day.day}</div>
                    <div class="day-title">
                        <h3>${day.title}</h3>
                        <div class="day-location">${day.location}</div>
                    </div>
                </div>
                <div class="day-cost">
                    <div class="day-cost-value">${formatCurrency(perPersonCost, CURRENT_CURRENCY)}</div>
                    <small class="day-cost-label">per person</small>
                </div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="day-details">
                <div class="day-content">
                    <div class="day-activities">
                        <div class="activity-section">
                            <h4>🎯 Activities</h4>
                            <ul class="activity-list">
                                ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="activity-section">
                            <h4>🏨 Accommodation</h4>
                            <ul class="activity-list">
                                <li>${day.accommodation}</li>
                            </ul>
                            <h4>🍽️ Meals</h4>
                            <ul class="activity-list">
                                ${day.meals.map(meal => `<li>${meal}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="activity-section">
                            <h4>🚗 Transport</h4>
                            <ul class="activity-list">
                                <li>${day.transport}</li>
                            </ul>
                            <h4>💰 Cost Items</h4>
                            <ul class="activity-list">
                                ${day.costItems.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="day-meta">
                        <div class="meta-item">
                            <div class="meta-label">${CURRENT_CURRENCY} Budget</div>
                            <div class="meta-value">${formatCurrency(perPersonCost, CURRENT_CURRENCY)}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Weather Tip</div>
                            <div class="meta-value">${day.weather}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Pro Tip</div>
                            <div class="meta-value">${day.tips}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        timeline.appendChild(dayCard);
    });
}

function renderTable() {
    const tbody = document.getElementById('cost-table-body');
    if (!tbody) {
        console.error('Table body not found');
        return;
    }
    
    console.log('Rendering table with', tripItems.length, 'items in currency:', CURRENT_CURRENCY);
    tbody.innerHTML = '';

    const categories = [...new Set(tripItems.map(item => item.category))];
    
    categories.forEach(category => {
        // Add category header
        const categoryRow = document.createElement('tr');
        categoryRow.className = 'category-row';
        categoryRow.innerHTML = `
            <td colspan="10"><strong>${category}</strong></td>
        `;
        tbody.appendChild(categoryRow);

        // Add items in this category
        const categoryItems = tripItems.filter(item => item.category === category);
        categoryItems.forEach(item => {
            const row = createTableRow(item);
            tbody.appendChild(row);
        });
    });
    
    console.log('Table rendered successfully');
}

function createTableRow(item) {
    const row = document.createElement('tr');
    row.dataset.itemId = item.id;
    
    const unitCost = getItemCost(item, CURRENT_CURRENCY);
    const totalCost = calculateTotalCost(item, CURRENT_CURRENCY);
    const perPersonCost = calculatePerPersonCost(item, CURRENT_CURRENCY);
    
    row.innerHTML = `
        <td>
            <div class="item-name">${item.name}</div>
            <small class="item-notes">${item.notes || ''}</small>
        </td>
        <td>${item.duration}</td>
        <td class="editable-cell" data-field="unitCost" data-type="number" data-item-id="${item.id}">
            ${formatCurrency(unitCost, CURRENT_CURRENCY)}
        </td>
        <td class="editable-cell" data-field="quantity" data-type="number" data-item-id="${item.id}">
            ${item.quantity}
        </td>
        <td class="cost-cell">${formatCurrency(totalCost, CURRENT_CURRENCY)}</td>
        <td>
            <span class="shared-indicator ${item.shared ? 'shared-yes' : 'shared-no'}">
                ${item.shared ? 'Yes' : 'No'}
            </span>
        </td>
        <td class="cost-cell">${formatCurrency(perPersonCost, CURRENT_CURRENCY)}</td>
        <td>
            ${item.bookingUrl ? 
                `<a href="${item.bookingUrl}" target="_blank" class="booking-link booking-link--primary">Book</a>` :
                `<span class="booking-link booking-link--disabled">No Link</span>`
            }
        </td>
        <td>
            <input type="checkbox" class="status-checkbox" ${item.booked ? 'checked' : ''} 
                   onchange="toggleBookingStatus(${item.id})">
        </td>
        <td>
            <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
        </td>
    `;

    // Add click handlers for editable cells
    const editableCells = row.querySelectorAll('.editable-cell');
    editableCells.forEach(cell => {
        cell.addEventListener('click', function() {
            makeEditable(this);
        });
    });

    return row;
}

function makeEditable(cell) {
    if (cell.classList.contains('editing')) return;

    const field = cell.dataset.field;
    const type = cell.dataset.type;
    const itemId = parseInt(cell.dataset.itemId);
    const item = tripItems.find(i => i.id === itemId);
    
    if (!item) return;

    let currentValue;
    if (field === 'unitCost') {
        currentValue = getItemCost(item, CURRENT_CURRENCY);
    } else {
        currentValue = item[field];
    }

    cell.classList.add('editing');
    
    const input = document.createElement('input');
    input.className = 'edit-input';
    input.type = type;
    input.value = currentValue;
    
    if (type === 'number') {
        input.min = '0';
        input.step = field === 'unitCost' ? '0.01' : '1';
    }

    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
    input.select();

    function saveEdit() {
        const newValue = type === 'number' ? parseFloat(input.value) || 0 : input.value.trim();
        
        if (type === 'number' && newValue < 0) {
            cancelEdit();
            return;
        }

        if (field === 'unitCost') {
            if (CURRENT_CURRENCY === 'EUR') {
                item.unitCostEur = newValue;
                item.unitCostInr = Math.round(newValue * EXCHANGE_RATE);
            } else {
                item.unitCostInr = newValue;
                item.unitCostEur = parseFloat((newValue / EXCHANGE_RATE).toFixed(2));
            }
        } else {
            item[field] = newValue;
        }
        
        cell.classList.remove('editing');
        cell.classList.add('saved');
        
        if (field === 'unitCost') {
            cell.textContent = formatCurrency(newValue, CURRENT_CURRENCY);
        } else {
            cell.textContent = newValue;
        }
        
        updateSummary();
        renderTable();
        renderItinerary();
        scheduleAutoSave();
        
        // Remove saved class after animation
        setTimeout(() => cell.classList.remove('saved'), 800);
    }

    function cancelEdit() {
        cell.classList.remove('editing');
        if (field === 'unitCost') {
            cell.textContent = formatCurrency(currentValue, CURRENT_CURRENCY);
        } else {
            cell.textContent = currentValue;
        }
    }

    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cancelEdit();
        }
    });
}

function showAddItemModal() {
    const modal = document.getElementById('add-item-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('fade-in');
        const nameInput = document.getElementById('item-name');
        if (nameInput) nameInput.focus();
    }
}

function hideAddItemModal() {
    const modal = document.getElementById('add-item-modal');
    const form = document.getElementById('add-item-form');
    
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('fade-in');
    }
    
    if (form) {
        form.reset();
    }
}

function saveNewItem() {
    const name = document.getElementById('item-name')?.value.trim();
    const duration = document.getElementById('item-duration')?.value.trim();
    const cost = parseFloat(document.getElementById('item-cost')?.value) || 0;
    const quantity = parseInt(document.getElementById('item-quantity')?.value) || 1;
    const shared = document.getElementById('item-shared')?.checked || false;
    const url = document.getElementById('item-url')?.value.trim();

    if (!name || !duration || cost <= 0) {
        alert('Please fill in all required fields with valid values.');
        return;
    }

    let costEur, costInr;
    if (CURRENT_CURRENCY === 'EUR') {
        costEur = cost;
        costInr = Math.round(cost * EXCHANGE_RATE);
    } else {
        costInr = cost;
        costEur = parseFloat((cost / EXCHANGE_RATE).toFixed(2));
    }

    const newItem = {
        id: nextItemId++,
        category: 'Custom',
        name: name,
        duration: duration,
        unitCostEur: costEur,
        unitCostInr: costInr,
        quantity: quantity,
        shared: shared,
        bookingUrl: url || null,
        notes: 'Custom item',
        booked: false,
        isDefault: false
    };

    tripItems.push(newItem);
    renderTable();
    updateSummary();
    scheduleAutoSave();
    hideAddItemModal();
    
    // Switch to costs tab and scroll to the new item
    switchTab('costs');
    setTimeout(() => {
        const newRow = document.querySelector(`tr[data-item-id="${newItem.id}"]`);
        if (newRow) {
            newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            newRow.classList.add('pulse');
            setTimeout(() => newRow.classList.remove('pulse'), 600);
        }
    }, 100);
}

function exportToCSV() {
    const currencyLabel = CURRENCIES[CURRENT_CURRENCY].label;
    const headers = [
        'Item/Activity', 'Duration/Details', `${currencyLabel} Unit Cost`, 
        'Quantity', `${currencyLabel} Total Cost`, 'Shared', 
        `${currencyLabel} Cost Per Person`, 'Booking URL', 'Booked Status'
    ];
    
    const csvData = [headers.join(',')];
    
    tripItems.forEach(item => {
        const unitCost = getItemCost(item, CURRENT_CURRENCY);
        const totalCost = calculateTotalCost(item, CURRENT_CURRENCY);
        const perPersonCost = calculatePerPersonCost(item, CURRENT_CURRENCY);
        
        const row = [
            `"${item.name}"`,
            `"${item.duration}"`,
            CURRENT_CURRENCY === 'EUR' ? unitCost.toFixed(2) : Math.round(unitCost),
            item.quantity,
            CURRENT_CURRENCY === 'EUR' ? totalCost.toFixed(2) : Math.round(totalCost),
            item.shared ? 'Yes' : 'No',
            CURRENT_CURRENCY === 'EUR' ? perPersonCost.toFixed(2) : Math.round(perPersonCost),
            `"${item.bookingUrl || ''}"`,
            item.booked ? 'Yes' : 'No'
        ];
        csvData.push(row.join(','));
    });
    
    // Add summary rows
    csvData.push('');
    csvData.push(`"Exchange Rate (EUR to INR)",,,,,,,${EXCHANGE_RATE}`);
    csvData.push(`"Display Currency",,,,,,,${currencyLabel}`);
    const totalPerPerson = calculateGrandTotal(CURRENT_CURRENCY);
    const totalValue = CURRENT_CURRENCY === 'EUR' ? totalPerPerson.toFixed(2) : Math.round(totalPerPerson);
    csvData.push(`"Total Cost Per Person (${currencyLabel})",,,,,,,${totalValue}`);
    csvData.push(`"Group Size",,,,,,,${currentGroupSize}`);
    
    const csvContent = csvData.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `helsinki-lapland-stockholm-trip-${currencyLabel.toLowerCase()}-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            alert(`Trip CSV file downloaded successfully in ${currencyLabel}!`);
        }, 100);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'n':
                e.preventDefault();
                showAddItemModal();
                break;
            case 's':
                e.preventDefault();
                exportToCSV();
                break;
            case 'e':
                e.preventDefault();
                exportSettings();
                break;
            case '1':
                e.preventDefault();
                switchTab('overview');
                break;
            case '2':
                e.preventDefault();
                switchTab('itinerary');
                break;
            case '3':
                e.preventDefault();
                switchTab('costs');
                break;
            case '4':
                e.preventDefault();
                switchTab('booking');
                break;
        }
    }
    
    const modals = document.querySelectorAll('.modal:not(.hidden)');
    if (e.key === 'Escape' && modals.length > 0) {
        hideAddItemModal();
        hideResetModal();
    }
});

console.log('🌍 Enhanced DIY Helsinki-Lapland-Stockholm Travel Dashboard initialized!');
console.log('💾 Features: Auto-save, persistent storage, export/import, reset functionality');
console.log('✈️ International flights from Bangalore');
console.log('🗺️ 10-day routing: BLR→HEL→Porvoo→Lapland→Stockholm→BLR');
console.log('💱 Single currency display with persistent exchange rates');
console.log('📊 Real-time currency conversion with automatic saving');
console.log('🔄 All changes saved automatically every 500ms');
console.log('📱 Clean interface with comprehensive data management');