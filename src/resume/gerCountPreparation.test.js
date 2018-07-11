import { getCountPreparation } from "."

describe("getCountPreparation", () => {
  it("should return count data when a preparation is selected", () => {
    const countPreparation = {
      prestations: [
        {
          _id: "5b3f2a588e9ef775127b87ed",
          id: 1,
          name: "Maquillage",
          image: "",
          description: "",
          gender: "F",
          preparations: [
            {
              id: 1,
              selected: true,
              count: 1,
              image: "http://localhost:8000/images/preparation1.1.png",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation:
                "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
              type: "MAQ_FOCUS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://mille-et-une-bieres-champigny.business.site/",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation: "Maquillage KAROLS",
              type: "MAQ_KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
              titlePreparation: "Maquillage ultime",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_ULTIME"
            }
          ]
        },
        {
          _id: "5b3f2a588e9ef775127b87ee",
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
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée",
              type: "COIF_STYL"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image: "http://localhost:8000/images/preparation2.2.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée élaborée",
              type: "COIF_STYL_2"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée très élaborée",
              type: "COIF_STYL_3"
            }
          ]
        },
        {
          _id: "5b3f2a588e9ef775127b87ef",
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
              price: 16,
              type: "COUPE_CLASS"
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
              price: 24,
              type: "COUPE_STYL"
            }
          ]
        },
        {
          _id: "5b3f2a588e9ef775127b87f0",
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
              price: 7.5,
              type: "VERNIS"
            }
          ]
        },
        {
          _id: "5b3f2a588e9ef775127b87f1",
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
              price: 16,
              type: "COUPE_HOMME"
            }
          ]
        },
        {
          _id: "5b3f2a588e9ef775127b87f2",
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
              info: "https://fr.wikipedia.org/wiki/Barbe",
              titlePreparation: "Barbe 1",
              duration: {
                minutes: 20
              },
              price: 16,
              type: "BARBE"
            }
          ]
        }
      ],
      services: [
        {
          _id: "5b3f2a588e9ef775127b87f4",
          id: 1,
          name: "Préparation",
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
          description: "Venez vous faire maquiller",
          selected: false
        },
        {
          _id: "5b3f2a588e9ef775127b87f5",
          id: 2,
          name: "Table",
          image:
            "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
          description: "Venez boire un coup",
          selected: false
        },
        {
          _id: "5b3f2a588e9ef775127b87f6",
          id: 3,
          name: "Table + préparation",
          image:
            "https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a95c6a3a64dcf92424155361476dfc4&auto=format&fit=crop&w=1536&q=80",
          description: "Venez vous faire maquiller et prendre un petit coup",
          selected: true
        }
      ],
      shops: [
        {
          _id: "5b3f2a588e9ef775127b87e9",
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
          selected: true
        },
        {
          _id: "5b3f2a588e9ef775127b87ea",
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: false
        },
        {
          _id: "5b3f2a588e9ef775127b87eb",
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
          _id: "5b3f2a588e9ef775127b87f8",
          sex: "M",
          selected: false,
          count: 0,
          image:
            "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
        },
        {
          _id: "5b3f2a588e9ef775127b87f9",
          sex: "F",
          selected: true,
          count: 1,
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
        _id: "5b3f2a588e9ef775127b87fb",
        count: 2,
        image: "http://bar-legacy.com/img/main_6.jpg"
      },
      logo: {
        _id: "5b3f2a588e9ef775127b87fd",
        image:
          "https://image.noelshack.com/fichiers/2018/27/3/1530690032-logo-noirt.png"
      }
    }
    const expected = [
      {
        _id: "5b3f2a588e9ef775127b87ed",
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: true,
            count: 1,
            image: "http://localhost:8000/images/preparation1.1.png",
            info: "https://fr.wikipedia.org/wiki/Maquillage",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            type: "MAQ_FOCUS"
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info: "https://fr.wikipedia.org/wiki/Maquillage",
            titlePreparation: "Maquillage KAROLS",
            type: "MAQ_KAROLS"
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://fr.wikipedia.org/wiki/Maquillage",
            type: "MAQ_ULTIME"
          }
        ]
      },
      {
        _id: "5b3f2a588e9ef775127b87ee",
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
            info: "https://fr.wikipedia.org/wiki/Coiffure",
            titlePreparation: "Coiffure stylisée",
            type: "COIF_STYL"
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info: "https://fr.wikipedia.org/wiki/Coiffure",
            titlePreparation: "Coiffure stylisée élaborée",
            type: "COIF_STYL_2"
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "https://fr.wikipedia.org/wiki/Coiffure",
            titlePreparation: "Coiffure stylisée très élaborée",
            type: "COIF_STYL_3"
          }
        ]
      },
      {
        _id: "5b3f2a588e9ef775127b87ef",
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
            price: 16,
            type: "COUPE_CLASS"
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
            price: 24,
            type: "COUPE_STYL"
          }
        ]
      },
      {
        _id: "5b3f2a588e9ef775127b87f0",
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
            price: 7.5,
            type: "VERNIS"
          }
        ]
      },
      {
        _id: "5b3f2a588e9ef775127b87f1",
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
            price: 16,
            type: "COUPE_HOMME"
          }
        ]
      },
      {
        _id: "5b3f2a588e9ef775127b87f2",
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
            info: "https://fr.wikipedia.org/wiki/Barbe",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            type: "BARBE"
          }
        ]
      }
    ]

    expect(getCountPreparation(countPreparation)).toEqual(expected)
  })
})
