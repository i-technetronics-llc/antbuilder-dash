import { CreateBooking } from "@/models/org_Admin.models";
import HTTPClient from "../http-instance/wrappedInstance";

export default class BookingServices {
  static async createBooking(data: CreateBooking) {
    const response = await HTTPClient.post("/bookings/create", data);
    return response.data;
  }

  //   static async getAllUsers(page, limit) {
  //     const response = await HTTPClient.get(
  //       `/user/users/all_users?page=${page}&limit=${limit}`
  //     );
  //     return response.data;
  //   }
}
