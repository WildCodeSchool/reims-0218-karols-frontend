import { getCountByGender } from "."

describe("getCountByGender", () => {
  it("should return count of male and female gender", () => {
    const state = {
      prestations: [
        {
          _id: "5b4da63e4dc2ad000886016d",
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
              titlePreparation: "Maquillage focus",
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530864856-preparation1-1.jpg",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_FOCUS"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530865173-preparation1-2.jpg",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              titlePreparation: "Maquillage KAROLS",
              type: "MAQ_KAROLS"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1495638671147-2cb03fe8e33e.jpg",
              titlePreparation: "Maquillage ultime",
              info: "https://fr.wikipedia.org/wiki/Maquillage",
              type: "MAQ_ULTIME"
            }
          ]
        },
        {
          _id: "5b4da63e4dc2ad000886016e",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530865220-preparation2-1.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              titlePreparation: "Coiffure stylisée",
              type: "COIF_STYL"
            },
            {
              id: 2,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure élaborée",
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530865251-preparation2-2.jpg",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_2"
            },
            {
              id: 3,
              selected: false,
              count: 0,
              titlePreparation: "Coiffure très élaborée",
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531730707/projet3/1530865277-preparation2-3.png",
              info: "https://fr.wikipedia.org/wiki/Coiffure",
              type: "COIF_STYL_3"
            }
          ]
        },
        {
          _id: "5b4da63e4dc2ad000886016f",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530865316-preparation3-1.jpg",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/1530865352-preparation3-2.jpg",
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
          _id: "5b4da63e4dc2ad0008860170",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1522337660859-02fbefca4702.jpg",
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
          _id: "5b4da63e4dc2ad0008860171",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/1530865462-preparation10.jpg",
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
          _id: "5b4da63e4dc2ad0008860172",
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
              image:
                "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/1530865521-preparation11.jpg",
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
          _id: "5b4da63e4dc2ad0008860174",
          id: 1,
          name: "Préparation",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1512496015851-a90fb38ba796.jpg",
          description: "Venez vous faire préparer",
          selected: false
        },
        {
          _id: "5b4da63e4dc2ad0008860175",
          id: 2,
          name: "Table",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1511914678378-2906b1f69dcf.jpg",
          description: "Réservez une table pour votre soirée",
          selected: false
        },
        {
          _id: "5b4da63e4dc2ad0008860176",
          id: 3,
          name: "Table & Préparation",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1522936643032-5f3cde4cad06.jpg",
          description: "Réservez votre table et vos préparations",
          selected: true
        }
      ],
      shops: [
        {
          _id: "5b4da63d4dc2ad0008860169",
          id: 1,
          city: "Paris",
          address: "75000",
          phone: "0123456789",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1438955138287-0c090d2290d5.jpg",
          selected: true
        },
        {
          _id: "5b4da63d4dc2ad000886016a",
          id: 2,
          city: "Lyon",
          address: "69000",
          phone: "0223456789",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
          selected: false
        },
        {
          _id: "5b4da63d4dc2ad000886016b",
          id: 3,
          city: "Cannes",
          address: "06150",
          phone: "0423456789",
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1499076218749-7d639231170d.jpg",
          selected: false
        }
      ],
      genders: [
        {
          _id: "5b4da63e4dc2ad0008860178",
          sex: "M",
          selected: false,
          count: 2,
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729253/projet3/photo-1475403614135-5f1aa0eb5015.jpg",
          description: "Un homme"
        },
        {
          _id: "5b4da63e4dc2ad0008860179",
          sex: "F",
          selected: false,
          count: 3,
          image:
            "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531729254/projet3/photo-1523264653568-d3d4032d1476.jpg",
          description: "Une femme"
        }
      ],
      reservation: {
        success: false
      },
      timeSlots: [],
      loading: false,
      form: {},
      countPeopleTable: {
        _id: "5b4da63e4dc2ad000886017b",
        count: 2,
        image:
          "http://res.cloudinary.com/dlfnke6kc/image/upload/v1531730293/projet3/main_6.jpg"
      },
      logo: {
        _id: "5b4da63e4dc2ad000886017d",
        image:
          "https://image.noelshack.com/fichiers/2018/27/3/1530690032-logo-noirt.png"
      }
    }
    expect(getCountByGender(state, "M")).toEqual(2)
    expect(getCountByGender(state, "F")).toEqual(3)
  })
})
