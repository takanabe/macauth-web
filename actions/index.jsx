import request from 'superagent';

export const REQUEST_POSTS = 'REQUEST_POSTS';
let API_ENDPOINT_URL = (false) ? "https://exapmle.com" : 'http://127.0.0.1';

function callPostApi(api_name,request_body, api_url=API_ENDPOINT_URL) {
  return new Promise(function(resolve, reject) {
    request
      .post(API_ENDPOINT_URL + api_name)
      .send(request_body)
      .set('Accept', 'application/json')
      .end(
        (err, res) => {
          if (err) {
            alert('Invalid format data\n' + err);
            reject(err);
          } else {
            console.log(res.text);
            resolve(res.text)
          }
        }
      );
  });
}

// Action Creators
function requestPosts(registeredMacAddress) {
  return {
    type: REQUEST_POSTS,
    registeredMacAddress: registeredMacAddress
  };
}


function splitMacAddressInfoTextsIntoArray(mac_addresses_info_texts){
  let lines = mac_addresses_info_texts.split('\n');
  // Delete spaces and tabs if each line have them at the end of texts.
  lines = lines.map(function(elem){
    return elem.replace(/(\s|\n|\r)+$/g, "");
  });

  console.log(lines);
  return lines;
}

function deleteLinesIncludeOnlySpacesAndTabs(mac_addresses_info_array){
  let lines = mac_addresses_info_array.filter(function(elem){
    if(1 < elem.length) {
      return elem;
    }
  });
  console.log(lines);
  return lines;
}

function createRegistrationRequestBody(mac_addresses_info_array){
  let request_data_array = []
  mac_addresses_info_array
    .map(function(elem){
      return elem.split(/\s+/);
    })
    .map(function(elem,index){
      request_data_array.push(
              {"id": elem[1],
               "user_group_id": elem[0],
               "vlan_id": parseInt(elem[2]),
               "information": elem[3]});
    });

    console.log(request_data_array);

  return {"mac_addresses": request_data_array};
}

export function registerMacInfo(macAddressInfo) {
  let lines_array = splitMacAddressInfoTextsIntoArray(macAddressInfo);
  lines_array = deleteLinesIncludeOnlySpacesAndTabs(lines_array)
  let request_body = createRegistrationRequestBody(lines_array);
  const api_name = '/mac_addresses';

   return requestPosts(callPostApi(api_name, request_body));
}
