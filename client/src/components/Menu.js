import React from "react";
import items from "../data/menuData";
import Leaves from "../img/leaves.svg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  renderItems = item => {
    return (
      <div className="menu-container">
        <h2 className="menu-section__item-title">{item.itemName}</h2>
        <h3 className="menu-section__item-desc">{item.itemDesc}</h3>
        <strong>
          <p className="">{item.category}</p>
        </strong>
      </div>
    );
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    document.title = "Menu | Veganease ";
    const { term } = this.state;
    const filteredData = items.filter(menu => {
      return menu.itemName.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });

    return (
      <React.Fragment>
        <div className="menu-page-container">
          <h2 className="menu-title">
            <span>
              <img alt="Green Leaves" className="leaves" src={Leaves} />
            </span>
            Veganease Menu
            <span>
              <img alt="Green Leaves" className="leaves" src={Leaves} />
            </span>
          </h2>
          <hr className="underline" />
          <div className="search-bar-container">
            <div className="search-bar">
              <input
                onChange={this.onChange}
                className="search-bar__input"
                type="text"
                placeholder="Search By Menu Item..."
              />
            </div>
          </div>
          <div className="menu-section">
            {filteredData.map(item => {
              return this.renderItems(item);
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
