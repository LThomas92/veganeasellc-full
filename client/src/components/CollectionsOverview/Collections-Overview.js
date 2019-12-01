import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ShopPreview from "../Shop/ShopPreview";

import { selectCollections } from "../../actions/shopSelector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ShopPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
