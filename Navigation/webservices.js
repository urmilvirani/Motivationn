import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default webservice = async (path, method, data) => {

    const url = 'https://qa.motivation.ie/api/v1/' + path;

    console.log("========== REQ START ==========");

    console.log("url:", url);
    console.log("method:", method);
    console.log("data:", data);

    console.log("========== REQ End ==========");

    const authToken = await AsyncStorage.getItem('authToken');
    console.log(authToken);
    let res = await axios.request({
        method: method,
        url: url,
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data',
            'Cache-Control': 'no-cache'

        },
        data: data,
    })

    console.log("========== RES START ==========");

    console.log("url:", url);
    console.log("res", res.data.data);

    console.log("========== RES End ==========");

    return res.data


}