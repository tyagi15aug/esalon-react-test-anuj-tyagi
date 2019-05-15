export const FETCH_API_DATA = "FETCH_API_DATA";
export const DATA_RECEIVED = "DATA_RECEIVED";

export function fetchData() {
  return { type: FETCH_API_DATA };
}

export function dataReceived(apiResponse) {
  return { type: DATA_RECEIVED, apiResponse};
}