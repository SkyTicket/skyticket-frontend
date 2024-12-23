import axiosInstance from '../api/axiosInstance';


const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/user/all-users");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch users');
  }
};


export { getAllUsers };