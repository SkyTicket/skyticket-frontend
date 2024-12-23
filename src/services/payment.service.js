import axiosInstance from "../api/axiosInstance";

    const paymentService = async ({bookingId}) => {
        try {
            const response = await axiosInstance.post(`/api/v1/payment/booking/${bookingId}`)
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    export { paymentService };