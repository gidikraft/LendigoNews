export const CONSTANTS = {
    //URL
    NEWSURL: 'https://hn.algolia.com/api/v1/search_by_date?numericFilters=points%3E250&page=',
    LINKEDIN_URL: 'https://www.linkedin.com/in/oluwaseun-fagade-4b381686',
    GITHUB_URL: 'https://www.github.com/gidikraft',

    //colors
    PRIMARY_COLOR: '#940917',
    SECONDARY_COLOR: '#1ee9f7',
    MENU_COLOR: '#1e25f7',
    BACKGROUND_COLOR: '#009fb8',
    BLACK: '#000000',
    NEWS_BACKGROUND: '#dbdbdb',
    PLACEHOLDER_COLOR: '#037980',
    ACCENT_COLOR: '#e8e11e',

    //errors
    FETCH_NEWS_ERROR: 'Data fetching cancelled',
    RESPONSE_ERROR: "Failed to fetch news",
    ERROR: 'Error',
    ALERT_MESSAGE: 'Enter a valid Username',

    //queries
    FETCH_DATA_QUERY: "SELECT * FROM items",
    DELETE_DATA_QUERY: "DELETE * FROM items",
    CREATE_TABLE_QUERY: 'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)',
    ADD_ITEM_QUERY: 'INSERT INTO items (text, count) values (?, ?)',

    //constants
    CENTER: 'center',
    HIDDEN: 'hidden',
    ROW: "row",
    BOLD: 'bold',
    FLEX_END: 'flex-end',
    SPACE_EVENLY: 'space-evenly',
    CONTAINED: 'contained',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    OUTLINED: 'outlined',
    HUNDRED_PC: '100%',
    EIGHTY_PC: '80%',

    //fonts
    DOSIS_BOLD: 'Dosis_700Bold',
    DOSIS_REGULAR: 'Dosis_400Regular',
    DODSIS_LIGHT: 'Dosis_200ExtraLight',

}

