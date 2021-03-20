# Getting Started with Create React App and Learn ReactJS

Project dùng để học reactjs và làm app demo Todo List

## Phân bố cục trong project

### Thư mục components

Trong folder components, chúng ta sẽ nhóm các files lại theo `module` hoặc feature/tính năng.
Một components được cấu thành bởi nhiều hơn 1 file(chẳng hạn như phải import các components khác nhau,
hay các file css cho component đó) khi đó ta sẽ đưa các file này vào chung folder có cùng tên.

### Thư mục UI

Ngoài các folder dành cho module hay tính năng trong ứng dụng, có thể thêm một folder UI (hoặc base/atomic) dùng cho các component dạng UI - là những phần tử nhỏ sử dụng cho UI trong ứng dụng. Đây là những component giống các thư viện open source, thường được dùng đi dùng lại nhiều lần trong ứng dụng, không nhất thiết phải là một module lớn và không thực hiện các business logic. Những ví dụ về components dạng này như Button, Checkbox, SelectBox, Modal, DatePicker, BreadCrumb,...

### Thư mục screens

Đây là thư mục dùng để chứa các các components tượng trưng cho 1 màn hình hiển thị trong ứng dụng.
VD: Đối vơi tính năng CRUD User thì sẽ có ít nhất là 3 màn hình cơ bản bao gồm:

-   List (/users/)
-   Create (/user)
-   Edit (/users/:id)

Screen component nên là một `presentational component` và `không` nên thực hiện xử lý `business logic`
Mỗi component ở trong sẽ đại diện cho route của ứng dụng, thay vì một module nào đó

### Đặt tên cho folder

Để đặt tên components đặt theo hướng `path-based-component-naming`.
Nghĩa là cấu thành bởi đường dẫn từ folder `src/components` đến file chúng ta tạo component đó. Chẳng hạn, bạn có một file với đường dẫn `src/components/User/List.jsx` thì tên component được sử dụng trong List.jsx sẽ được đặt là `UserList`.

VD: `class UserList extends React.Component` với đường dẫn là `src/components/User/List.jsx`

Nếu Tên file trùng tên folder.

VD: `src/components/User/Form/Form.jsx` thì thay vì sử dụng `UserFormForm`, chúng ta sẽ đặt là `UserForm`.

Như vậy thì chỉ cần nhìn path của file thì sẽ biết dược file đó nó nằm ở đâu

### Tài liệu phân project

[Cách phân chi folder cho project ReactJS](https://viblo.asia/p/cach-phan-chia-folder-va-dat-ten-components-cho-mot-app-react-aWj53891K6m)

**Project này sử dụng Flow nên nó đã tắt đi TypeScript mặc định của vscode
**Để mở lại thì vào extensions gõ @builtin và kiếm TypeScript and JavaScript Language Features và bấm enable
