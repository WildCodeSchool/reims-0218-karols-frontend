import { getCountTable } from "."

describe("getCountTable", () => {
  it("should return count data when table is selected", () => {
    const tableSelected = {
      prestations: [
        {
          id: 1,
          name: "Maquillage",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation1.1.png",
              info:
                "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
              titlePreparation:
                "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://mille-et-une-bieres-champigny.business.site/",
              info:
                "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
              titlePreparation: "Maquillage KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://your-cbd-store.jimdofree.com/"
            }
          ]
        },
        {
          id: 2,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.1.png",
              info:
                "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
              titlePreparation: "Coiffure stylisée"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.2.jpg",
              info:
                "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
              titlePreparation: "Coiffure stylisée élaborée"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.3.png",
              titlePreparation: "Coiffure stylisée très élaborée"
            }
          ]
        },
        {
          id: 3,
          name: "Coupes",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.1.png",
              titlePreparation: "Coupe classique",
              duration: {
                minutes: 20
              },
              price: 16
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation3.2.png",
              titlePreparation: "Coupe très stylisée",
              duration: {
                minutes: 30
              },
              price: 24
            }
          ]
        },
        {
          id: 4,
          name: "Vernis",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation7.jpg",
              titlePreparation: "Pose de vernis au choix",
              duration: {
                minutes: 10
              },
              price: 7.5
            }
          ]
        },
        {
          id: 5,
          name: "Coiffure",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation10.png",
              titlePreparation: "Coupe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        },
        {
          id: 6,
          name: "Barbe",
          image: "",
          description: "",
          gender: "M",
          preparations: [
            {
              id: 1,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation11.png",
              info: "http://palf.free.fr/portrait/vocabulaire.htm",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16
            }
          ]
        }
      ],
      services: [
        {
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: true
        },
        {
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a95c6a3a64dcf92424155361476dfc4&auto=format&fit=crop&w=1536&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: false
        }
      ],
      shops: [
        {
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: false
        },
        {
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: true
        },
        {
          id: 3,
          city: "Cannes",
          address: "06150",
          phone: "0423456789",
          image:
            "https://images.unsplash.com/photo-1499076218749-7d639231170d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=406aca1462040924190328fcf1ea0373&auto=format&fit=crop&w=1611&q=80",
          selected: false
        }
      ],
      genders: [
        {
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          sex: "F",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
        }
      ],
      reservation: {
        success: false
      },
      timeSlots: [],
      form: {},
      countPeopleTable: {
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      }
    }
    const expected = 2

    expect(getCountTable(tableSelected)).toEqual(expected)
  })
})
