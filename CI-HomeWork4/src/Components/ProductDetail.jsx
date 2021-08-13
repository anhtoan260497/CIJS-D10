import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
       const  {img,ram,rom,info} = this.props.productDetail;
       console.log(this.props.productDetail)
    //    const {screen, os, frontCamera,backCamera} = info;
        return (
            <div className="container mt-5">
               <div className="row">
                   <img className="col-5 col-md-5 col-lg-6" src={img} alt=""/>
                   <div className="col-7 col md-7 col-lg 6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn Hình</td>
                                {/* <td>{screen}</td> */}
                            </tr>
                            <tr>
                                <td>Hệ Điều Hành</td>
                                {/* <td>{os}</td> */}
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                {/* <td>{frontCamera}</td> */}
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                {/* <td>{backCamera}</td>    */}
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{rom}</td>
                            </tr>
                        </tbody>
                    </table>
                   </div>
               </div>
            </div>
        );
    }
}

export default ProductDetail;