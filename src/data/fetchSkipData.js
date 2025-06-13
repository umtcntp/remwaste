import axios from 'axios'

export const fetchSkipData = async () => {
    const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    return response.data;
}