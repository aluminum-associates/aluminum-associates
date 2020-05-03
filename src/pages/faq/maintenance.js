import React from "react"
import Layout from "../../components/Layout"
import FooterTabs from "../../components/FooterTabs"

export default function Maintenance() {
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
    <Layout title="Maintenance">
      <div className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              How Should I Clean My Vinyl Siding?
            </h1>
          </div>
        </div>
        <FooterTabs tabs={tabs} />
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="title is-size-2">
              How Should I Clean My Vinyl Siding?
            </h2>
            <p>
              As with anything exposed to the elements, vinyl siding will get
              dirty. You can maintain its appearance by cleaning with a brush or
              sponge and a mild cleaning solution at least once a year. Power
              washing is not recommended because it can damage the finish of the
              siding.
            </p>
            <p>
              Although cleaning siding from the top down appears to be the
              logical method, it should actually be washed from the bottom up to
              reduce streaking.
            </p>
            <p>
              It is always a good idea to test wash a small inconspicuous area,
              to ensure the desired result, before completing a larger, highly
              visible area. Always read labels and follow instructions to
              protect eyes, skin, and vegetation from cleaning agents.
            </p>
            <ul>
              <li>
                For hard to remove dirt, wipe the siding using a solution of:
              </li>
              <li>1/2 cup of laundry detergent (i.e. Tide)</li>
              <li>1/2 cup of Trisodiumphosphate (i.e. Soilex)</li>
              <li>1 gallon of water</li>
            </ul>
            <p>
              If mildew is a problem, add 1 quart of liquid laundry bleach to
              this solution.
            </p>
            <p>
              In addition to the normal build up of dirt, you may also have a
              problem with staining. If so, follow these steps:
            </p>
            <table className="table is-bordered is-striped">
              <tbody>
                <tr>
                  <td>Staining Agents:</td>
                  <td>
                    Light oils and grease, grease, caulking compounds, wax,
                    crayons, asphalt, tar, etc.
                  </td>
                </tr>
                <tr>
                  <td>Cleaning agents:</td>
                  <td>
                    Solvents - Mineral spirits V.M.P., Naphtha auto tar remover.
                  </td>
                </tr>
                <tr>
                  <td>Preparation:</td>
                  <td>Remove excess with plastic or wood scraper.</td>
                </tr>
                <tr>
                  <td>Cleaning method:</td>
                  <td>
                    Use soft cloth to apply mineral spirits. Avoid polishing
                    stained area by using too much pressure. Rinse.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table is-bordered is-striped">
              <tbody>
                <tr>
                  <td>Staining agents:</td>
                  <td>Markers, nail polish, lipstick, gum and chalking.</td>
                </tr>
                <tr>
                  <td>Cleaning agents:</td>
                  <td>Cleaning fluid (Trichloroethylene)</td>
                </tr>
                <tr>
                  <td>Preparation:</td>
                  <td>
                    Remove excess with plastic or wood scraper. Chill gum to
                    remove excess.
                  </td>
                </tr>
                <tr>
                  <td>Cleaning method:</td>
                  <td>
                    Use soft cloth to apply mineral spirits. Avoid polishing
                    stained area by using too much pressure. Rinse.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table is-bordered is-striped">
              <tbody>
                <tr>
                  <td>Staining agents:</td>
                  <td>Rust stains.</td>
                </tr>
                <tr>
                  <td>Cleaning agents:</td>
                  <td>Oxalic acid (auto radiator cleaner).</td>
                </tr>
                <tr>
                  <td>Preparation:</td>
                  <td>
                    Make solution of 1 tablespoon of oxalic acid crystals to 1
                    cup warm water.
                  </td>
                </tr>
                <tr>
                  <td>Cleaning method:</td>
                  <td>
                    Apply oxalic acid solution with soft brush, wipe with damp
                    cloth, and then flush with clean water.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table is-bordered is-striped">
              <tbody>
                <tr>
                  <td>Staining agents:</td>
                  <td>Stubborn stains.</td>
                </tr>
                <tr>
                  <td>Cleaning agents:</td>
                  <td>
                    Abrasive type cleaner, scouring pads, or fine sandpaper.
                  </td>
                </tr>
                <tr>
                  <td>Preparation:</td>
                  <td>First try the three procedures above.</td>
                </tr>
                <tr>
                  <td>Cleaning method:</td>
                  <td>
                    Wet the stain first. Rub with cleaning agent in direction of
                    wood grain. Do not remove more material than is absolutely
                    necessary. Rinse.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="title is-size-2">
              What Causes Condensation And How Can I Control It?
            </h2>
            <p>
              Moisture is present in the air in all homes, but when it becomes
              excessive it can cause condensation. Condensation is water that
              forms when warm, moist air hits cooler surfaces – such as windows,
              cold-water pipes or bathroom wall and mirrors. Humidity is a
              measure of the amount of water vapor in the air. Excessive
              humidity is usually the cause of condensation in homes.
            </p>
            <p>
              When humidity levels in your home are too high relative to outdoor
              temperatures, condensation can form on cool surfaces such as
              windows. The windows are not the cause of the condensation, but
              they can be one of the first places where you notice it. Windows
              and doors are the coolest interior surfaces of your home that you
              can see, but if surface condensation is occurring on windows or
              doors it is also quite possible that there is condensation in the
              wall cavities as well.
            </p>
            <p>
              Condensation can cause wood rot, and excess humidity can also
              cause paint to peel or result in mold and mildew, so you should
              address a high humidity issue quickly before it results in
              permanent damage.
            </p>
            <p>
              Moisture in the home comes from a number of sources: cooking,
              dishwashers, self-defrosting refrigerators, clothes washers and
              dryers, showers, saunas, fish tanks, houseplants, fire wood, even
              the breath of people and animals. There are steps you can take to
              control humidity levels in your home.
            </p>
            <ol>
              <li>
                Make sure your furnace is in proper working order and is
                serviced regularly.
              </li>
              <li>
                Turn on exhaust fans when cooking and bathing. Make sure that
                they vent outside. If there are no fans, close the door and open
                a window briefly, until the room clears.
              </li>
              <li>
                Make sure that dryers vent to the outside and that there are no
                holes or leaks in the exhaust pipe.
              </li>
              <li>
                Make sure that louvers and vents for attics and crawl spaces are
                open, adequately sized, and provide cross ventilation.
              </li>
              <li>
                Make sure when drapes are closed they do not fit tight to the
                window or floor. Air should be able to circulate under and
                around the window treatments to prevent build up of cold air in
                front of the window.
              </li>
              <li>
                Ensure that cold air returns are open and unblocked to allow air
                to circulate freely throughout the house.
              </li>
              <li>Be sure that chimneys are not clogged.</li>
              <li>Store firewood outside or in the garage.</li>
            </ol>
            <p>
              In the winter you may need to take additional steps to reduce the
              humidity in your home and increase airflow over cool surfaces:
            </p>
            <ol>
              <li>
                Closely monitor the furnace humidifier to ensure that settings
                are at the recommended levels (see the chart below). When the
                humidity level is too high, turn the humidifier off, shut off
                the water supply, and empty the humidifier pan.
              </li>
              <li>
                Run exhaust fans for kitchen, laundry, and bathrooms for longer
                periods.
              </li>
              <li>Avoid hanging wet clothes inside.</li>
              <li>Remove pans of water from heat registers.</li>
              <li>
                Remove plants from window ledges and bay or bow window seats.
              </li>
              <li>
                Increase airflow over window glass by removing inside screens,
                and opening window coverings – such as blinds, shades, drapes,
                and curtains during daylight hours.
              </li>
              <li>Remove air deflectors from registers under windows.</li>
              <li>Ensure that the sump pump hole is covered.</li>
              <li>
                Open a door or window for several minutes each day to refresh
                the inside air.
              </li>
              <li>
                Keep bedroom doors open, even if only a little, while sleeping.
                Alternatively, ensure that there is a gap at the bottom of the
                door to allow air movement.
              </li>
              <li>
                Leaving the fireplace damper open, or lighting a fire, will
                increase ventilation and improve the rate of air exchange.
              </li>
              <li>
                Keep all rooms, even if unoccupied, heated. All rooms should be
                heated to a minimum of 10°C (50°F), as condensation will often
                occur in unheated rooms.
              </li>
            </ol>
            <p>
              It is important to realize that some condensation experienced
              early in the heating season may simply go away without you having
              to take any action. In the summer months the building materials
              and furnishing in your home absorb a substantial amount of
              moisture. When the furnace comes on these materials start to dry
              out, temporarily adding extra moisture to the air. The resulting
              condensation usually disappears on its own.
            </p>
            <p>What about using a dehumidifier?</p>
            <p>
              A dehumidifier can only reduce the relative humidity to about 60%,
              which is fine in summer when the outdoor humidity is around 90%,
              but would make your walls drip in cold weather. There is no place
              in Canada where a home can be maintained at this humidity level
              without serious condensation problems. In cold weather the
              relative humidity should not be over 40%.
            </p>
            <p>Recommended Indoor Relative Humidity</p>
            <p>
              The table below shows recommended indoor relative humidity levels
              vs. outside air temperature for acceptable comfort. If moisture
              can be reduced to these levels, it may help cure troublesome
              surface condensation problems.
            </p>
            <table className="table is-bordered is-striped">
              <tbody>
                <tr>
                  <th>Outside Air Temperature</th>
                  <th> Indoor Relative Humidity at 21°C With Double Glazing</th>
                </tr>
                <tr>
                  <td>-29°C or below</td>
                  <td>Not over 15%</td>
                </tr>
                <tr>
                  <td>-28°C to -23°C</td>
                  <td>Not over 20%</td>
                </tr>
                <tr>
                  <td>-22°C to -17°C</td>
                  <td>Not over 25%</td>
                </tr>
                <tr>
                  <td>-16°C to -12°C</td>
                  <td>Not over 30%</td>
                </tr>
                <tr>
                  <td>-11°C to -6°C</td>
                  <td>Not over 40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="title is-size-2">
              What Do I Need To Know About Maintaining Caulking And
              Weatherstripping?
            </h2>
            <h2 className="title is-size-4">Caulking</h2>
            <p>
              To prevent the elements (rain, snow, wind, even dust and dirt
              particles) from being unwanted guests in your home, inspect
              windows, doors, exhaust vents, skylights, and other openings
              yearly. You should examine caulking for shrinkage (has it peeled
              away?) and flexibility (is it dry, cracked or crumbling?), and
              weatherstrip for obvious signs of wear (flattened or non-existent
              pile and torn or cracked rubber). Addressing any problems you
              discover could mean lower heating and cooling costs.
            </p>
            <p>
              Although the idea of recaulking around windows, doors, etc. may
              seem intimidating, with sufficient practice and a high-quality
              sealant and caulking gun, it needn`t be. There are many types of
              exterior caulking on the market, but THERMOPLASTIC, available in a
              full range of colours, is an excellent choice. It adheres to all
              exterior surfaces including vinyl, aluminum and brick, and "skins
              over" allowing it to remain pliable.
            </p>
            <p>
              Before you begin you must remove all deteriorated caulking and
              foreign matter, including surface dirt, dust, loose particles, or
              other contaminants, which may inhibit adhesion. Be sure to read
              the safety precautions on the sealant tube. To apply new caulking
              cut the plastic tip of the tube on a 90° angle, a little narrower
              than the width of the desired joint. Use a caulking gun and apply
              using even pressure. Hold the gun at a 45° angle from the joint.
              Ensure the sealant comes in contact with both sides of the joint
              by at least 3mm (1/8") and that the surface of the joint has a
              convex shape. Clean up any drips immediately.
            </p>
            <h2 className="title is-size-4">Weatherstrip</h2>
            <p>
              Weatherstrip is more than just the rubber strip that runs across
              the bottom of your exterior doors – it can also be found running
              up the latch side, along the header and down the hinge side of
              door jambs or frames: on window sashes, and, in some cases, window
              sills and side jambs. Door jambs that house steel doors typically
              feature magnetic and compression weatherstrip (door jambs for wood
              and fiberglass doors use compression only), while storm doors use
              a pile weatherstrip, and windows have both pile and bulb types.
              Compression weatherstrip is a vinyl wrapped foam material, pile is
              like a soft brush cut, and bulb style is a rubber tube.
            </p>
            <p>
              When replacing window weatherstrip, be sure to replace it with the
              type and style originally used. This holds true for steel doors
              and door jambs as well, unless what is currently in use isn`t
              sufficient. Often times, a warped steel door slab or doorframe, or
              a build up of paint, hinders magnetic weatherstrip`s ability to
              adhere. A switch to compression weatherstrip may help.
            </p>
            <p>
              For further information regarding caulking and weatherstripping,
              contact an Aluminum Associates sales representative at
              519-453-6400 or visit our 1801 Trafalgar St. showroom.
            </p>
            <p>
              If you have a question about any of the products that we sell, if
              you`d like to receive a free estimate for professional
              installation, or ask about a project you`re going to install
              yourself, don`t hesitate to contact us – we`re happy to help. You
              can speak to a sales representative in our showroom at 1801
              Trafalgar St. East, call us at 519-453-6400, or{" "}
              <a href="mailto:webpage@aluminumassociates.com">
                click here to e-mail us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
