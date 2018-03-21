import request from "./request";

const InfoService = {
    getInfoList(options) {
        return request({
            method: "GET",
            url: "https://ccnubox.muxixyz.com/api/webview_info"
        })
    }
}
export default InfoService;