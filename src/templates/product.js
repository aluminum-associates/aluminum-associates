import React from "react"
import Layout from "../components/layout"

const Product = () => {
  return (
    <Layout>
      <section class="section">
        <div class="container">
          <h1 class="title is-1">Product Name</h1>
          <div class="product-grid-wrapper">
            <div class="product-specs">
              <div class="overview"></div>
              <div class="key-features">
                <h2 class="title">Key Features</h2>
              </div>
              <div class="product-options">
                <h2 class="title">Options</h2>
              </div>
              <div class="documentation">
                <h2 class="title">Learn More</h2>
              </div>
              <p class="disclaimer">
                * If you have a question about any of the products that we sell,
                if you'd like to receive a free estimate for professional
                installation, or have questions about a product you're going to
                install yourself, don't hesitate to contact us — we're happy to
                help. You can speak to a sales representative in our showroom at
                1801 Trafalgar St. East, call us at{" "}
                <a href="tel:+(519)453-6400">519-453-6400</a>, or{" "}
                <a href="mailto:info@aluminumassociates.com">
                  click here to e-mail us
                </a>
                .
              </p>
            </div>
            <div class="product-gallery">
              <h2 class="title">Gallery</h2>
              <div class="gallery-wrapper">
                <a href="{{ img|url }}">
                  <img src="{{ img|url }}" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Product
