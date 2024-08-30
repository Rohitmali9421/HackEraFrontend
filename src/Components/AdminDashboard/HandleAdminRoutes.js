import axios from "axios";
async function fetchTotalSales(){
    try {
        const response = await axios.get('http://localhost:8080/api/aradmin/orders' );
        console.log('Orders:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

export {fetchTotalSales};