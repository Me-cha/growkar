import axios from "axios";
// import URL from ""

export const getCompaniesAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/company/getCompany`);
    console.log("response", response.data);
    if (response.status === 200) {
      dispatch({
        type: "GET_COMPANY",
        payload: response.data.companyList,
      });
    } else {
      dispatch({
        type: "GET_COMPANY_ERROR",
        error: "Error fetching companies",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "GET_COMPANY_ERROR", error: error.message });
  }
};
