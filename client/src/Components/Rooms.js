import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigationBar from "./NavigationBar";

class Rooms extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container fluid style={{ marginBottom: "100px" }}>
          <Row style={{ marginTop: "100px" }}>
            <Col>
              <img
                src={require("./static/room/PremierRoom2.jpg")}
                alt="Premier Room with Garden View"
                width="800"
                height="500"
                hspace="100"
              />
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "100px",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontFamily: "Times New Roman",
                }}
              >
                Premier Room with Garden View
              </p>
            </Col>
            <Col style={{ paddingTop: "100px" }}>
              <Row>
                <p>A premier experience of Oberoi hospitality.</p>
                <p>
                  Uninterrupted garden views are best enjoyed from the cushioned
                  bay window seat in these stunning rooms. Decorated in a
                  natural palette, with vibrant touches of colour and
                  traditional Indian patterns, the spacious interiors include a
                  king sized bed and a marble ensuite bathroom with views of a
                  private sun dappled courtyard.
                </p>
                <p>
                  Offering a picturesque view of the landscaped gardens of the
                  resort, the rooms are spacious and elegantly appointed with
                  original artworks and handcrafted furniture. The bathrooms
                  feature freestanding Victorian bathtubs and separate shower
                  stalls overlooking a private walled courtyard.
                </p>
              </Row>
              <Row>
                <p>
                  <u>Pricing ( GST included)</u>
                  <ul>
                    <li>Rs 23,000</li>
                    <li>Rs 3,000 (per extra bed)</li>
                  </ul>
                </p>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "100px" }}>
            <Col>
              <img
                src={require("./static/room/UdaivilasPremierRoomwithPoolView1.jpg")}
                alt="Premier Room with Garden View"
                width="800"
                height="500"
                hspace="100"
              />
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "100px",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontFamily: "Times New Roman",
                }}
              >
                Premium Room with Pool View
              </p>
            </Col>
            <Col style={{ paddingTop: "100px" }}>
              <Row>
                <p>Matchless comfort with an authentic vibe.</p>
                <p>
                  These spacious rooms have been carefully designed for your
                  utmost comfort, with a king size bed and a marble bathroom
                  with private courtyard views. They feature hand printed Indian
                  fabrics, and a colour palette that harmonises natural tones
                  and Rajasthani vibrancy. But the highlight has to be the
                  cushioned bay window seat with views of our main pool, Mewar
                  style courtyard and lush green lawns.
                </p>
              </Row>
              <Row>
                <p>
                  <u>Pricing ( GST included)</u>
                  <ul>
                    <li>Rs 28,000</li>
                    <li>Rs 3,000 (per extra bed)</li>
                  </ul>
                </p>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "100px" }}>
            <Col>
              <img
                src={require("./static/room/UdaivilasPremierRoomwithSemiPvtPool.jpg")}
                alt="Premier Room with Garden View"
                width="800"
                height="500"
                hspace="100"
              />
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "100px",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontFamily: "Times New Roman",
                }}
              >
                Premier Lake View with Semi Private Pool
              </p>
            </Col>
            <Col style={{ paddingTop: "100px" }}>
              <Row>
                <p>A pool experience beyond compare.</p>
                <p>
                  From the latched gate on your private terrace, you can slip
                  into a breathtaking semi private pool with uninterrupted lake
                  views. Or simply relax on a sun lounger. Inside your room,
                  naturally lit interiors are enhanced with bursts of colour and
                  traditional Indian fabrics. Furnishings include a two poster
                  king size bed, a plush sofa and a wooden writing desk. The
                  marble bathroom also offers lake views.
                </p>
              </Row>
              <Row>
                <p>
                  <u>Pricing ( GST included)</u>
                  <ul>
                    <li>Rs 48,000</li>
                    <li>Rs 3,000 (per extra bed)</li>
                  </ul>
                </p>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "100px" }}>
            <Col>
              <img
                src={require("./static/room/UdaivilasLuxurySuiteDrawingRoom.jpg")}
                alt="Premier Room with Garden View"
                width="800"
                height="500"
                hspace="100"
              />
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "100px",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontFamily: "Times New Roman",
                }}
              >
                Luxury Suite Drawing Room
              </p>
            </Col>
            <Col style={{ paddingTop: "100px" }}>
              <Row>
                <p>Your own private space to relax and unwind.</p>
                <p>
                  Enjoy garden views and exquisite luxury; from the elegant
                  living room to the king size bedroom, ensuite bathroom, dining
                  room, powder room and private courtyard. Outside, a private
                  pool and al fresco dining space provide the perfect setting to
                  relax and unwind.
                </p>
              </Row>
              <Row>
                <p>
                  <u>Pricing ( GST included)</u>
                  <ul>
                    <li>Rs 2,30,780</li>
                    <li>Rs 3,000 (per extra bed)</li>
                  </ul>
                </p>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "100px" }}>
            <Col>
              <img
                src={require("./static/room/UdaivilasKohinoor.jpg")}
                alt="Premier Room with Garden View"
                width="800"
                height="500"
                hspace="100"
              />
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "100px",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontFamily: "Times New Roman",
                }}
              >
                Kohinoor Luxury Suite with Private Pool
              </p>
            </Col>
            <Col style={{ paddingTop: "100px" }}>
              <Row>
                <p>Our crowning glory, especially for you.</p>
                <p>
                  With its gold domed ceilings, mirror mosaics and hand carved
                  marble privacy screens, the Kohinoor Suite is a rarity. A
                  master bedroom and twin bedroom, a spectacular dining room,
                  living room and private pool occupy a tasteful 2,650 square
                  feet. All the very latest technology, including three
                  television sets, bring a touch of modernity to this true
                  classic.
                </p>
              </Row>
              <Row>
                <p>
                  <u>Pricing ( GST included)</u>
                  <ul>
                    <li>Rs 6,16,540</li>
                    <li>Rs 3,000 (per extra bed)</li>
                  </ul>
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Rooms;
