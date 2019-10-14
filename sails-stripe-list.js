// page-products
<% _.forEach(products.data, function(product) { %>
  <h3><%= product.name %></h3>
  <a class="btn btn-info" href="/products/<%= product.id %>"><%= product.name %></a>
<% }) %>

// view-products
var products = await stripe.products.list(
  {limit: 3},
);
return {
  products: products
};

// page-product


<h1><%= product.name %></h1>

// view-product
inputs: {
  id: {
    description: 'The ID of the product to look up.',
    type: 'string'
  }
},
success: {
  responseType: 'view',
  viewTemplatePath: 'pages/product'
},
notFound: {
  description: 'No product with the specified ID was found in the database.',
  responseType: 'notFound'
}
  
fn: async function ({ id }) {
  var productId = {id}
  sails.log(productId.id);

  var product = await stripe.products.retrieve(
    productId.id
  );

  if (!product) { throw 'notFound'; }

  sails.log(product);
  return {
    product: product
  };
}
