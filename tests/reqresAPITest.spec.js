const { test, expect, request } = require('@playwright/test');

test.describe("This is describe block on reqres", () => {
    let baseURL = null;
    test.beforeAll("This is before all block", () => {
        baseURL = "https://reqres.in";

    });
    test("Test Get List users", async ({ request }) => {
        let resourceListUsers = "/api/users";
        let finalBaseURLListUsers = `${baseURL}${resourceListUsers}?page=2`;
        let responseListUsers = await request.get(finalBaseURLListUsers);
        //console.log(await responseListUsers.json());
        //console.log(await responseListUsers.text());
        expect(await responseListUsers.status()).toBe(200);
    });
    test("Single User", async ({ request }) => {
        let resourceSingleUser = "/api/users/2";
        let finalBaseURLSingleUser = `${baseURL}${resourceSingleUser}`;
        let responseSingleUser = await request.get(finalBaseURLSingleUser);
        // console.log(await responseSingleUser.text());
        expect(await responseSingleUser.text()).toContain("janet.weaver@reqres.in");
    });
    test("Create API ", async ({ request }) => {
        let createAPIPostRequest = "/api/users";
        let finalBaseURLCreatePostRequest = `${baseURL}${createAPIPostRequest}`;
        let postRequestCreate = await request.post(finalBaseURLCreatePostRequest, {
            headers: {
                "x-api-key": "reqres-free-v1"
            },
            data: {

                "name": "morpheus",
                "job": "leader"

            }
        });
        console.log(await postRequestCreate.json());
        let createPostRequest = await postRequestCreate.json();
        console.log(createPostRequest.name)
    });
    test("Put Request", async ({ request }) => {
        let putRequestResource = "/api/users/2";
        let putRequestendPoint = `${baseURL}${putRequestResource}`;
        let putRequestResponse = await request.put(putRequestendPoint, {
            headers:{
                "x-api-key": "reqres-free-v1"
            },
            data: {
                "name": "Rahul",
                "job": "zion resident"
            }
        });
        console.log(await putRequestResponse.json());
        console.log(await putRequestResponse.text());
    })
})