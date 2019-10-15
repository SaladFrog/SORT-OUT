// view-products
var stripe = require('stripe')('key');
var stripeProduct = await stripe.products.retrieve(
    'productId',
    );

var stripeSku = await stripe.skus.list({
product: stripeProduct.id
});

return {
stripeProduct, 
sku: stripeSku.data
};

// products
<div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <img src="https://picsum.photos/500" alt="print to sell">
      </div>

      <div class="col-md-5 offset-md-1">
        <h1><%= stripeProduct.name %></h1>
        <p><strong>Välj storlek</strong></p>
        <% _.each(sku, function(sku){ %>
        <button class="btn btn-outline-dark mb-5"><%= sku.attributes.name %></button>
        <% }) %>

        <br>

        <form action="">
          <div class="form-group">
            <% _.each(sku, function(sku){ %>
            <input type="button" class="btn btn-outline-danger mb-5" value="<%= sku.attributes.name %>"
              v-model="checked">
            <% }) %>
          </div>
          <p><strong>Description</strong><br>
            <%= stripeProduct.metadata.description %></p>
          <button class="btn btn-block btn-danger">Checkout</button>
        </form>
        {{ checked }}

      </div>
    </div>
  </div>

  <hr><!-- divider -->
          
// products.page
data: {
    checked: []
},
