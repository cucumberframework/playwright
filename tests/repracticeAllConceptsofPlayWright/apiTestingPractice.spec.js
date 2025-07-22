const { test, expect } = require('@playwright/test');


test.describe('This is describe block', () => {
    let requestCall = null;
    let AddPlaceEndpoint = null;
    let deletePlaceEndPoint = null;
    let place_id = null;
    let getPlaceEndPoint = null;
    let getPlaceResource = null;
    const baseURL = "https://rahulshettyacademy.com";
    let apiKey = null;
    test.beforeEach("This is beforeEach", async ({ request }) => {
        //const requestContextCreation=await  request.newContext();
        let addplaceresource = "/maps/api/place/add/json";
        let deletePlaceResource = "/maps/api/place/delete/json";
        let getPlaceResource = "/maps/api/place/get/json";
        apiKey = "qaclick123";
        AddPlaceEndpoint = `${baseURL}${addplaceresource}?key=${apiKey}`;
        deletePlaceEndPoint = `${baseURL}${deletePlaceResource}?key=${apiKey}`;


    });

    test("Google map Add post request", async ({ request }) => {
        requestCall = await request.post(AddPlaceEndpoint, {
            data: {
                "location": {
                    "lat": -38.383494,
                    "lng": 33.427362
                },
                "accuracy": 50,
                "name": "Frontline house",
                "phone_number": "(+91) 983 893 3937",
                "address": "29, side layout, cohen 09",
                "types": [
                    "shoe park",
                    "shop"
                ],
                "website": "http://google.com",
                "language": "French-IN"
            }

        });
        console.log(await requestCall.json());  //it will show the response in json format 
        let responseJsonBody = await requestCall.json();
        place_id = responseJsonBody.place_id;
        console.log("Printing Place_id::"+place_id);
        console.log("Print Google map post API response in text::"+await requestCall.text());     //it will show the response which is received in json format in text format 
        expect(await requestCall.ok());
        expect(await requestCall.text()).toContain("OK") //it will assert if the response which we have received in text format has the required text 
        expect(await requestCall.text()).toContain("APP");
    });
    test("Google Map get request", async ({ request }) => {
        getPlaceResource = "/maps/api/place/get/json";
        getPlaceEndPoint = `${baseURL}${getPlaceResource}?key=${apiKey}&place_id=${place_id}`
        let getPlaceResponse =await request.get(getPlaceEndPoint);
        console.log("Get Place Json Response::"+await getPlaceResponse.json());
        console.log("Get Place text Response::"+await getPlaceResponse.text());
    });
    test("Delete place post request", async ({ request }) => {
        const deletePlaceResponse = await request.post(deletePlaceEndPoint, {
            data: {
                "place_id": place_id
            }
        })
        console.log(await deletePlaceResponse.json())
        let deletePlaceResponseJson = await deletePlaceResponse.json();
        let deletePlaceResponseText = await deletePlaceResponse.text();
        console.log("Delete place response in text::"+deletePlaceResponseText);
        console.log("Extract status from the json response of delete place API::"+deletePlaceResponseJson.status);  //this will give the status field value from the received response 
        expect(deletePlaceResponseText).toContain("OK");

    })

});
