import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;

// Mục đích của file useAuth.js là tạo một hook tùy chỉnh để truy cập và sử dụng dữ liệu từ AuthContext, hỗ trợ quản lý trạng thái xác thực người dùng trong ứng dụng. File này được sử dụng để đơn giản hóa việc truy cập vào trạng thái và chức năng liên quan đến xác thực trong toàn bộ ứng dụng.
