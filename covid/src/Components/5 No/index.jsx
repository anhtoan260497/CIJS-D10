import React, { Fragment } from 'react'
import "./style.css";

const Prevent = () => {
  return (
    <Fragment>
      <h1 style={{margin:"5% 38% 0 38%"}}>Thực hiện quy tắt 5 không</h1>
      <div className="container-box">
        <div className="content-box">
          <div className="imgBx">
            <img
              src={process.env.PUBLIC_URL + "/image/deokhautrang.jpg"}
              alt="img"
            />
          </div>
          <div className="content">
            <h2>Khẩu Trang</h2>
            <p>Đeo khẩu trang y tế ở khu cách ly, bệnh viện, nơi công cộng</p>
          </div>
        </div>
        <div className="content-box">
          <div className="imgBx">
            <img
              src={process.env.PUBLIC_URL + "/image/khukhuan.jpg"}
              alt="img"
            />
          </div>
          <div className="content">
            <h2>Khử Khuẩn</h2>
            <p>
              Thường xuyên khử khuẩn bằng dung dịch rửa tay hoặc xà phòng. Vệ
              sinh các bề mặt thường xuyên tiếp xúc, giữ nhà cửa gọn gàng,
              thoáng mát
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="imgBx">
            <img src={process.env.PUBLIC_URL + "/image/tutap.png"} alt="img" />
          </div>
          <div className="content">
            <h2>Không tụ tập</h2>
            <p>Không tự tập nơi đông người</p>
          </div>
        </div>
        <div className="content-box">
          <div className="imgBx">
            <img
              src={process.env.PUBLIC_URL + "/image/khaibao.png"}
              alt="img"
            />
          </div>
          <div className="content">
            <h2>Khai báo y tế</h2>
            <p>
              Khai báo y tế khi có dấu hiệu SỐT, HO, KHÓ THỞ hoặc gọi 19009095
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="imgBx">
            <img
              src={process.env.PUBLIC_URL + "/image/khoangcach.png"}
              alt="img"
            />
          </div>
          <div className="content">
            <h2>Khoảng Cách</h2>
            <p>Giữ khoảng cách khi tiếp xúc người khác</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Prevent;
