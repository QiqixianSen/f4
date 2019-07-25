import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../list/store/actionCreators";
import Footer from "../../../common/footer";
import Header from "../../../common/header";
import "./list.scss";

class Booklist extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <Header {...this.props}>精品书单</Header>
        <div className="listmain">
          <ul>
            {list.map(item => {
              return (
                <li key={item.id}>
                  <div className="textside">
                    <div className="textmain">
                      <h3>{item.title}</h3>
                      <p>{item.sdesc}</p>
                      <div>
                        {item.tags
                          .split(",")
                          .slice(0, 4)
                          .map((item, index) => {
                            return <span key={index}>{item}</span>;
                          })}
                      </div>
                    </div>
                    <div className="picside">
                      <div className="pic1">
                        <img src={item.items[0].cover} />
                      </div>
                      <div className="pic2">
                        <img src={item.items[1].cover} />
                      </div>
                      <div className="pic3">
                        <img src={item.items[2].cover} />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    this.props.insbooklist();
  }
}

const mapState = state => ({
  list: state.list.allbooks
});

const mapdispatch = dispatch => ({
  insbooklist() {
    dispatch(actionCreators.getbookinfo());
  },
});

export default connect(
  mapState,
  mapdispatch
)(Booklist);
