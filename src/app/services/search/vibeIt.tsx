import Resources from "@/app/resources/resources";
import axios from "axios";
export default async function vibeIt(
    mainQuery: string | null,
    secondaryQuery: string | null,
    currentPage: string,
    result_count: string,
    setState: any,
    access_token: string | null,
    searchResults: any,
    selectedBrands: any[] | null,
    setNoMoreResults: any
) {
    console.log('inside vibe it')
    if(mainQuery=='' && secondaryQuery=='') return;
    let data = {
        "query": {
            "mainquery": mainQuery,
            "secondaryquery": secondaryQuery,
        },
        "current_page": currentPage,
        "result_count": result_count,
        "brand_filter": selectedBrands && selectedBrands.length != 0 ? 1 : 0,
        "brand_list": selectedBrands && selectedBrands.length != 0 ? selectedBrands : [],
    }
    let header = {
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(header)
    // console.log(data)
    try {
        let results = await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/vibe-it", data, header)
        if(results['data']['message']){
            setNoMoreResults(true)
            return;}
        let products: any = {}
        for (let key in results['data']) {
            if (results['data'].hasOwnProperty(key)) {
                products[currentPage + ' ' + key] = results['data'][key];
            }
        }
        setState({ ...searchResults, ...products })
        console.log(results['data'])
    } catch (e: any) {
        //console.log(e.message)
    }

}