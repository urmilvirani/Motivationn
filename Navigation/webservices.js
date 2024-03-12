import axios from "axios";

export default webservice = async (path, method, data) => {

    const url = 'https://qa.motivation.ie/api/v1/' + path;

    console.log("========== REQ START ==========");

    console.log("url:", url);
    console.log("method:", method);
    console.log("data:", data);

    console.log("========== REQ End ==========");

    let res = await axios.request({
        method: method,
        url: url,
        headers: {
            'Authorization': 'Bearer UBfQovoxMxJABAz9bQZT3XPkOxsRm9Al4OvAdTVMed92fc50',
            'Content-Type': 'multipart/form-data'

        },
        data: data,
    })

    console.log("========== RES START ==========");

    console.log("url:", url);
    console.log("res", res);

    console.log("========== RES End ==========");

    return res.data


}