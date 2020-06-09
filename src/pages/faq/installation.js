import React from "react"
import Layout from "../../components/Layout"
import FooterTabs from "../../components/FooterTabs"

export default function Installation() {
  const tabs = [
    {
      title: "Installation",
      slug: "/faq/installation",
    },
    {
      title: "Maintenance",
      slug: "/faq/maintenance",
    },
    {
      title: "Product Choice",
      slug: "/faq/product-choice",
    },
  ]

  return (
    <Layout title="Installation">
      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2">
              Frequently Asked Installation Questions
            </h1>
          </div>
        </div>
        <FooterTabs tabs={tabs} />
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="title is-size-3 is-size-4-mobile">
              How Do I Calculate The Amount Of Vinyl Siding I Will Need?
            </h2>
            <p>
              For horizontal siding you must adjust the height of the area to be
              covered to make it divisible by the height of the siding panel
              (e.g. 9" high panel for Double 4.5" profile). For example, if your
              wall is 114" high you must add 3" to the height to make it
              divisible by 9", to ensure that you have enough vinyl siding.
            </p>
            <p>
              Similarly, for vertical siding you must increase the width to make
              it divisible by the width of the vertical siding panel being used.
            </p>
            <ul>
              <li>
                Measure each wall you want to cover. Multiply width x height =
                _____ sq. ft.
              </li>
              <li>
                Use the following formula to calculate siding required for each
                gable end:
              </li>
              <li>
                Gable width x gable height, multiplied by .67 (or 2/3) = _____
                sq. ft.
              </li>
              <li>Total the square footage for all walls and gable ends.</li>
              <li>
                Measure all openings for doors and windows. Multiply width x
                height = _____ sq. ft.
              </li>
              <li>Total the square footage for all openings.</li>
              <li>
                Subtract half of the total square footage of openings from the
                total wall area.
              </li>
              <li>
                The remaining number represents the total square footage of
                vinyl siding required.
              </li>
            </ul>
            <p>
              Complete installation instructions are available at Aluminum
              Associates. See the Siding page of this website for specific
              information about the quality siding that is available from
              Aluminum Associates.
            </p>
            <h2 className="title is-size-3 is-size-4-mobile">
              What Can I Expect When My New Door Or Windows Are Installed?
            </h2>
            <p>
              Following the placement of an order with our Sales Representatives
              and payment of an applicable deposit, our Installation Manager
              will call you to arrange a time to recheck all measurements and
              order details. He is responsible for the smooth installation of
              your new door or windows, so involving him at this early stage
              ensures accuracy and a smooth transition from ordering to
              installation.
            </p>
            <p>
              Steel and fibreglass entry systems, patio doors, and windows are
              custom ordered to fit your application. Once these items are
              received in our warehouse, and examined to ensure that all
              components are intact and in good condition, our Service Advisor
              will contact you to arrange a convenient time for installation.
            </p>
            <p>
              With your permission, when the installers arrive they will place a
              small job site sign on your property. New doors and windows can be
              installed year-round. In most cases it takes only a few minutes to
              take out an existing door or window and set a new one in place, so
              the exposure to the elements is minimal. The improved energy
              efficiency of a new door or window can more than offset the
              minimal exposure to the elements.
            </p>
            <p>
              Deadbolt locks are recommended for the best door security. Our
              installers will install your new (or existing) door handle and
              deadbolt.
            </p>
            <p>
              When removal and replacement is done professionally there is
              virtually no damage to your home. In most cases, however, rather
              than reusing the old casing trim (the woodwork around the interior
              door or window opening) Aluminum Associates replaces it with new
              trim. The trim is then ready for the customer to apply the
              appropriate paint or stain to match their decor.
            </p>
            <p>
              Our installers will make every effort to protect your property and
              ensure that the work area is fully cleaned, including cleaning
              fingerprints off of glass and trim, and removing all refuse,
              before leaving the job site. We will take away your old doors and
              windows and ensure that they are taken to a recycling depot.
              Wherever possible, these items are recycled to create post
              consumer materials that can be used to make new products, rather
              than going to a land fill.
            </p>
            <p>
              After final completion your Sales Representative will call to set
              up an appointment to meet with you to go over the work to ensure
              your satisfaction. They will also review the warranty cards, and
              if everything is to your satisfaction, present an invoice and
              collect payment of the balance owing. The Sales Representative
              will leave a copy of the invoice and all warranties for your
              files, and take away the job site sign.
            </p>
            <p>
              You can sit back and enjoy the comfort and convenience of your new
              door or windows.
            </p>
            <p>
              If you have a question about any of the products that we sell, if
              you`d like to receive a free estimate for professional
              installation, or ask about a project you`re going to install
              yourself, don`t hesitate to contact us – we`re happy to help. You
              can speak to a sales representative in our showroom at 1801
              Trafalgar St. East, call us at 519-453-6400, or click here to
              e-mail us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
